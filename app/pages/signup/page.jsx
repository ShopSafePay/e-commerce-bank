'use client'

import React, { useState } from 'react'
import { signIn } from 'next-auth/react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'




const Signup = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const handleSubmit = async(e) =>{
    e.preventDefault();
    
    if(name === '' || email === '' || password === ''){
      toast.error("Fill all fields");
      return
    }
    if(password.length < 6){
      toast.error("Password must be at least 6 characters")
      return
    }
    
    try{

      const res = await fetch('https://localhost/3000/api/register',{
        headers: {
          'Content-Type': 'applicaton/json'
        },
        method: 'POST',
        body: JSON.stringify({email,name,password})
      })

      console.log(await res.json())

      if(res.ok){
        toast.success("Successfully registered the user")
        setTimeout(() => {
          signIn()
        }, 1500)
        return

      }else{
        toast.error("Error occured when registering")
        return
      }


    }catch(err){
      console.log(err)
    }


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
              <div className="relative mt-2 w-full">
                <input type="text" name="email" className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " onChange={(e) => setEmail(e.target.value)} />
                <label className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"> Enter Your Email </label>
              </div>
              <div className="relative mt-2 w-full">
                <input type="text" name="name" className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " onChange={(e) => setName(e.target.value)}/>
                <label className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"> Enter Your Name</label>
              </div>
              <div className="relative mt-2 w-full">
                <input type="text" name="password" className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " onChange={(e) => setPassword(e.target.value)}/>
                <label className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"> Enter Your Password</label>
              </div>
              <input className="mt-4 w-full cursor-pointer rounded-lg bg-blue-600 pt-3 pb-3 text-white shadow-lg hover:bg-blue-400" type="submit" value="Create account" />
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