'use client'

import React, { useState } from 'react'
import {useRouter} from 'next/navigation'






const Signup = () => {

  const router = useRouter();

  const [error, setError] = useState(null);
 
  const handleSubmit = async(e) =>{
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(name, email, password);
    
    if(name == '' || email == '' || password == ''){
      alert("Fill all fields");
      return
    }
    if(password.length < 6){
      alert("Password must be at least 6 characters")
      return
    }

    try {

      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      })

      res.status === 201 && router.push('/pages/login?success=Account created successfully')
      res.status === 409 && setError('Email already exists!') 

    } catch (error) {
      setError(error)
      console.log(error)
    } 

    e.target.reset()
  

  }



  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-100">
      <div className="w-full max-w-3xl overflow-hidden rounded-lg bg-white shadow-lg sm:flex">
        <div className="m-2 w-full rounded-2xl bg-gray-400 bg-cover bg-center text-white sm:w-2/5" style={{backgroundImage: `url(https://images.pexels.com/photos/3943723/pexels-photo-3943723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`}}></div>
        <div className="w-full sm:w-3/5">
          <div className="p-8">
            <h1 className="text-3xl font-black text-slate-700">Sign up</h1>
            <p className="mt-2 mb-5 text-base leading-tight text-gray-600">Sign up now and unleash the power of DogeBank</p>
            <form className="mt-8" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="mb-2 inline-block text-xs font-medium uppercase text-gray-700">Email</label>
                <input type="text" className="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow" id="email" name="email" placeholder="Enter your email" />
              </div>
              <div className="mb-4">
                <label className="mb-2 inline-block text-xs font-medium uppercase text-gray-700">Name</label>
                <input type="text" className="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow" id="name" name="name" placeholder="Enter your name" />
              </div>
              <div className="mb-4">
                <label className="mb-2 inline-block text-xs font-medium uppercase text-gray-700">Password</label>
                <input type="password" className="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow" id="password" name="password" placeholder="Enter your password" />
              </div>
              <input className="mt-4 w-full cursor-pointer rounded-lg bg-blue-600 pt-3 pb-3 text-white shadow-lg hover:bg-blue-400" type="submit" value="Create account" />
              {error && <p className="mt-4 text-red-500">{ error }</p>}
            </form>
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">Already have an account? <a href="/pages/login" className="font-bold text-blue-600 no-underline hover:text-blue-400">Sign in</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  )
}

export default Signup