"use client";

import { X } from 'lucide-react'
import React, { useState } from 'react'

const page = () => {
    const [alerts, setAlerts] = useState([
    { id: 1, color: "bg-pink-600" },
    { id: 2, color: "bg-gray-600" },
    { id: 3, color: "bg-green-600" },
    { id: 4, color: "bg-orange-600" },
    { id: 5, color: "bg-yellow-600" },
    { id: 6, color: "bg-blue-600" },
    { id: 7, color: "bg-slate-600" },
  ])

  const handleClose = (id: number) => {
    setAlerts(prev => prev.filter(alert => alert.id !== id))
  }

  return (
    <div className='pt-12'>
        <div className="max-w-4xl mx-auto">
         <div className='p-4 bg-white dark:bg-gray-200 rounded-md'>
           <h3 className='text-xl font-semibold dark:text-black'>Alerts</h3>
         <div className="flex flex-col space-y-4 gap-2 mt-7">
          {alerts.map(alert => (
        <div
          key={alert.id}
          className={`p-5 flex items-center w-full justify-between text-sm font-medium text-white rounded-md ${alert.color}`}
          role="alert"
        >
          <p>A Simple Primary Alert With an Example Link. Give it a Click if you like.</p>
          <button onClick={() => handleClose(alert.id)}>
            <X className="w-5 h-5 cursor-pointer" />
          </button>
        </div>
      ))}
    </div>
  </div>
         <div className='p-4 bg-white dark:bg-gray-200 rounded-md mt-6'>
            <h3 className='text-xl font-semibold dark:text-black'>Notifications</h3>
            <p className='text-sm font-normal text-gray-500 pt-1'>Notifications on this page use Toasts from Bootstrap. Read more details here.</p>
            <div className="grid md:grid-cols-4 grid-cols-2 gap-5 pt-5">
              <button className='bg-green-500 p-2 rounded font-medium text-white text-center cursor-pointer'>
                Success
              </button>
              <button className='bg-blue-500 p-2 rounded font-medium text-white text-center cursor-pointer'>
                Info
              </button>
              <button className='bg-yellow-500 p-2 rounded font-medium text-white text-center cursor-pointer'>
                Warning
              </button>
              <button className='bg-red-500 p-2 rounded font-medium text-white text-center cursor-pointer'>
                Danger
              </button>
            </div>
         </div>
        </div>
    </div>
  )
}

export default page
