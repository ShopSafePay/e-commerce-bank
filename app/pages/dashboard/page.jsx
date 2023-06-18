'use client'

import Footer from '@components/Footer/Footer'
import Navbar from '@components/Navbar/Navbar'
import jwt from 'jsonwebtoken'
import { useEffect,useState } from 'react'




const dashboard = () => {

  const [user, setUser] = useState(
    {
      name: '',
      account: '',
      balance: '',
      key: '',
    }
  )

  const dataFetch = async (email) => {

    const res = await fetch(`/api/dashboard?email=${email}`)
  
    const  data = await res.json()
    console.log(data)

    setUser({...user, name: data[0].name, account: data[0].account, balance: data[0].balance,key: data[0].key})

  }


  useEffect(() => {
    const token = localStorage.getItem('token')
    const decoded = jwt.decode(token)
    console.log(decoded.email)
    dataFetch(decoded.email)
  }, [])

  

  

  return (
    
    <div>
      <Navbar/>
      
      <div className="m-10 grid gap-5 sm:grid-cols-3  mx-auto max-w-screen-lg">

        <div className="px-4 py-6 shadow-lg shadow-blue-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 rounded-xl bg-rose-400 p-4 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
          <p className="mt-4 font-medium">Account</p>
          <p className="mt-2 text-xl font-medium"> {user.account} </p>
         
        </div>
        <div className="px-4 py-6 shadow-lg shadow-blue-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 rounded-xl bg-green-400 p-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="mt-4 font-medium">Balance</p>
          <p className="mt-2 text-xl font-medium"> {user.balance} </p>
         
        </div>

        <div className="px-4 py-6 shadow-lg shadow-blue-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 rounded-xl bg-blue-400 p-4 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
          </svg>
          <p className="mt-4 font-medium">Secret Key</p>
          <p className="mt-2 text-xl font-medium">{user.key}</p>
         
        </div>

      </div>



      <div className="mx-auto mt-8 max-w-screen-lg px-2 py-16">
        <div className="sm:flex sm:items-center sm:justify-between flex-col sm:flex-row">
          <p className="flex-1 text-base font-bold text-gray-900">Latest Payments</p>

          <div className="mt-4 sm:mt-0">
            <div className="flex items-center justify-start sm:justify-end">
              <div className="flex items-center">
                <label className="mr-2 flex-shrink-0 text-sm font-medium text-gray-900"> Sort by: </label>
                <select name="" className="sm: mr-4 block w-full whitespace-pre rounded-lg border p-1 pr-10 text-base outline-none focus:shadow sm:text-sm">
                  <option className="whitespace-no-wrap text-sm">Recent</option>
                </select>
              </div>

              <button type="button" className="inline-flex cursor-pointer items-center rounded-lg border border-gray-400 bg-white py-2 px-3 text-center text-sm font-medium text-gray-800 shadow hover:bg-gray-100 focus:shadow">
                <svg className="mr-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" className=""></path>
                </svg>
                Export to CSV
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-xl border shadow">
          <table className="min-w-full border-separate border-spacing-y-2 border-spacing-x-2">
            <thead className="hidden border-b lg:table-header-group">
              <tr className="">
                <td width="50%" className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Invoice</td>

                <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Date</td>

                <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Amount</td>

                <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Status</td>
              </tr>
            </thead>

            <tbody className="lg:border-gray-300">
              <tr className="">
                <td width="50%" className="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6">
                  Standard Plan - Feb 2022
                  <div className="mt-1 lg:hidden">
                    <p className="font-normal text-gray-500">07 February, 2022</p>
                  </div>
                </td>

                <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">07 February, 2022</td>

                <td className="whitespace-no-wrap py-4 px-6 text-right text-sm text-gray-600 lg:text-left">
                  $59.00
                  <div className="flex mt-1 ml-auto w-fit items-center rounded-full bg-blue-600 py-2 px-3 text-left text-xs font-medium text-white lg:hidden">Complete</div>
                </td>

                <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                  <div className="inline-flex items-center rounded-full bg-blue-600 py-2 px-3 text-xs text-white">Complete</div>
                </td>
              </tr>

              <tr className="">
                <td width="50%" className="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6">
                  Standard Plan - Jan 2022
                  <div className="mt-1 lg:hidden">
                    <p className="font-normal text-gray-500">09 January, 2022</p>
                  </div>
                </td>

                <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">09 January, 2022</td>

                <td className="whitespace-no-wrap py-4 px-6 text-right text-sm text-gray-600 lg:text-left">
                  $59.00
                  <div className="flex mt-1 ml-auto w-fit items-center rounded-full bg-red-200 py-1 px-2 text-left font-medium text-red-500 lg:hidden">Canceled</div>
                </td>

                <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                  <div className="inline-flex items-center rounded-full bg-red-200 py-1 px-2 text-red-500">Canceled</div>
                </td>
              </tr>

              <tr className="">
                <td width="50%" className="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6">
                  Basic Plan - Dec 2021
                  <div className="mt-1 lg:hidden">
                    <p className="font-normal text-gray-500">15 December, 2021</p>
                  </div>
                </td>

                <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">15 December, 2021</td>

                <td className="whitespace-no-wrap py-4 px-6 text-right text-sm text-gray-600 lg:text-left">
                  $29.00
                  <div className="flex mt-1 ml-auto w-fit items-center rounded-full bg-blue-600 py-2 px-3 text-left text-xs font-medium text-white lg:hidden">Complete</div>
                </td>

                <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                  <div className="inline-flex items-center rounded-full bg-blue-600 py-2 px-3 text-xs text-white">Complete</div>
                </td>
              </tr>

              <tr className="">
                <td width="50%" className="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6">
                  Basic Plan - Nov 2021
                  <div className="mt-1 lg:hidden">
                    <p className="font-normal text-gray-500">14 November, 2021</p>
                  </div>
                </td>

                <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">14 November, 2021</td>

                <td className="whitespace-no-wrap py-4 px-6 text-right text-sm text-gray-600 lg:text-left">
                  $29.00
                  <div className="flex mt-1 ml-auto w-fit items-center rounded-full bg-blue-200 py-1 px-2 text-left font-medium text-blue-500 lg:hidden">Pending</div>
                </td>

                <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                  <div className="inline-flex items-center rounded-full bg-blue-200 py-1 px-2 text-blue-500">Pending</div>
                </td>
              </tr>

              <tr className="">
                <td width="50%" className="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6">
                  Basic Plan - Oct 2021
                  <div className="mt-1 lg:hidden">
                    <p className="font-normal text-gray-500">15 October, 2021</p>
                  </div>
                </td>

                <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">15 October, 2021</td>

                <td className="whitespace-no-wrap py-4 px-6 text-right text-sm text-gray-600 lg:text-left">
                  $29.00
                  <div className="flex mt-1 ml-auto w-fit items-center rounded-full bg-blue-600 py-2 px-3 text-left text-xs font-medium text-white lg:hidden">Complete</div>
                </td>

                <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                  <div className="inline-flex items-center rounded-full bg-blue-600 py-2 px-3 text-xs text-white">Complete</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <Footer />

    </div>
  
  
  )
}

export default dashboard