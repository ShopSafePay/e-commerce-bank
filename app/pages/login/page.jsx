"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const Login = () => {
  const router = useRouter();

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);

    if (email == "" || password == "") {
      alert("Fill all fields");
      return;
    }
    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const { data } = await res.json();

      res.status === 401 && setError(data);

      if (res.status === 201) {
        console.log(data);
        localStorage.setItem("token", data);

        router.push("/pages/dashboard");
      }
    } catch (err) {
      setError("Something went wrong");
      console.log(err);
    }

    e.target.reset();
  };

  return (
    <div className="flex min-h-screen w-screen w-full items-center justify-center text-gray-600 bg-gray-50">
      <div className="relative">
        <div className="hidden sm:block h-56 w-56 text-indigo-300 absolute a-z-10 -left-20 -top-20">
          <svg
            id="patternId"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="a"
                patternUnits="userSpaceOnUse"
                width="40"
                height="40"
                patternTransform="scale(0.6) rotate(0)"
              >
                <rect x="0" y="0" width="100%" height="100%" fill="none" />
                <path
                  d="M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5"
                  strokeWidth="1"
                  stroke="none"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="800%"
              height="800%"
              transform="translate(0,0)"
              fill="url(#a)"
            />
          </svg>
        </div>
        <div className="hidden sm:block h-28 w-28 text-indigo-300 absolute a-z-10 -right-20 -bottom-20">
          <svg
            id="patternId"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="b"
                patternUnits="userSpaceOnUse"
                width="40"
                height="40"
                patternTransform="scale(0.5) rotate(0)"
              >
                <rect x="0" y="0" width="100%" height="100%" fill="none" />
                <path
                  d="M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5"
                  strokeWidth="1"
                  stroke="none"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="800%"
              height="800%"
              transform="translate(0,0)"
              fill="url(#b)"
            />
          </svg>
        </div>
        {/* <!-- Register --> */}
        <div className="relative flex flex-col sm:w-[30rem] rounded-lg border-gray-400 bg-white shadow-lg px-4">
          <div className="flex-auto p-6">
            {/* <!-- Logo --> */}
            <div className="mb-10 flex flex-shrink-0 flex-grow-0 items-center justify-center overflow-hidden">
              <a
                href="/"
                className="flex cursor-pointer items-center gap-2 text-indigo-500 no-underline hover:text-indigo-500"
              >
                <span className="flex-shrink-0 text-3xl font-black tracking-tight opacity-100">
                  DogeBank
                </span>
              </a>
            </div>
            {/* <!-- /Logo --> */}
            {/* <h4 className="mb-2 font-medium text-gray-700 xl:text-xl">Welcome to Doge<span>Bank</span></h4> */}
            <p className="mb-6 text-gray-500">
              Please sign-in to access your account
            </p>

            <form id="" className="mb-4" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="mb-2 inline-block text-xs font-medium uppercase text-gray-700">
                  Email
                </label>
                <input
                  type="text"
                  className="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <div className="flex justify-between">
                  <label className="mb-2 inline-block text-xs font-medium uppercase text-gray-700">
                    Password
                  </label>
                  <a
                    href="*"
                    className="cursor-pointer text-indigo-500 no-underline hover:text-indigo-500"
                  >
                    <small className=" ">Forgot Password?</small>
                  </a>
                </div>
                <div className="relative flex w-full flex-wrap items-stretch">
                  <input
                    type="password"
                    id="password"
                    className="relative block flex-auto cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow"
                    name="password"
                    placeholder="Enter your password"
                  />
                </div>
              </div>
              <div className="mb-4">
                <div className="block">
                  <input
                    className="mt-1 mr-2 h-5 w-5 appearance-none rounded border border-gray-300 bg-contain bg-no-repeat align-top text-black shadow checked:bg-indigo-500 focus:border-indigo-500 focus:shadow"
                    type="checkbox"
                    id="remember-me"
                    style={{
                      backgroundImage: `url(&quot;data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M6 10l3 3l6-6'/%3e%3c/svg%3e&quot;)" checked`,
                    }}
                  />
                  <label className="inline-block"> Remember Me </label>
                </div>
              </div>
              <div className="mb-4">
                <button
                  className="grid w-full cursor-pointer select-none rounded-md border border-indigo-500 bg-indigo-500 py-2 px-5 text-center align-middle text-sm text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none"
                  type="submit"
                >
                  Sign in
                </button>
              </div>

              {error && <p className="text-red-500 text-xs italic">{error}</p>}
            </form>

            <p className="mb-4 text-center">
              New on DogeBank?
              <a
                href="/pages/signup"
                className="cursor-pointer text-indigo-500 no-underline hover:text-indigo-500"
              >
                {" "}
                Create an account{" "}
              </a>
            </p>
          </div>
        </div>
        {/* <!-- /Register --> */}
      </div>
    </div>
  );
};

export default Login;
