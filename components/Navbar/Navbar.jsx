"use client";
import { useEffect, useState } from "react";
import jwt from "jsonwebtoken";

const Navbar = () => {
  const [data, setData] = useState({
    name: "Login",
    url: "/pages/login",
    functionName: "handleLogin",
    home: "",
    homeUrl: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    const decode = jwt.decode(token);
    if (token) {
      setData({
        ...data,
        name: "Logout",
        url: "/",
        functionName: "handleLogout",
        home: "Dashboard",
        homeUrl: "/pages/dashboard",
      });
    } else {
      setData({
        ...data,
        name: "Login",
        url: "/pages/login",
        functionName: "handleLogin",
        home: "",
        homeUrl: "",
      });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
  };

  return (
    <div className="w-full bg-white sticky top-0 z-30">
      <header className="mb-0 px-4 shadow">
        <div className="relative mx-auto flex max-w-screen-lg flex-col py-4 sm:flex-row sm:items-center sm:justify-between">
          <a className="flex items-center text-2xl font-black" href="/">
            <span>DogeBank</span>
          </a>
          <input className="peer hidden" type="checkbox" id="navbar-open" />
          <label
            className="absolute right-0 mt-1 cursor-pointer text-xl sm:hidden"
            for="navbar-open"
          >
            <span className="sr-only">Toggle Navigation</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="0.88em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z"
              />
            </svg>
          </label>
          <nav
            aria-label="Header Navigation"
            className="peer-checked:block hidden pl-2 py-6 sm:block sm:py-0"
          >
            <ul className="flex flex-col gap-y-4 sm:flex-row sm:gap-x-8">
              <li className="">
                <a
                  className="text-gray-600 hover:text-blue-600"
                  href={data.homeUrl}
                >
                  {data.home}
                </a>
              </li>

              <li className="">
                <a
                  className="text-gray-600 hover:text-blue-600"
                  href="/pages/contact"
                >
                  Contact Us
                </a>
              </li>
              <li className="">
                <a
                  className="text-gray-600 hover:text-blue-600"
                  href="/pages/faq"
                >
                  FAQ
                </a>
              </li>

              <li className="mt-2 sm:mt-0">
                <a
                  className="rounded-xl border-2 border-blue-600 px-6 py-2 font-medium text-blue-600 hover:bg-blue-600 hover:text-white"
                  href={data.url}
                  onClick={
                    data.functionName === "handleLogout" ? handleLogout : null
                  }
                >
                  {data.name}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
