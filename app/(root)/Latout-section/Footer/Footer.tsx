import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex md:flex-row flex-col gap-4 items-center justify-between pt-10 pb-5'>
      <div>
        <p className='text-base font-normal text-gray-500'>© 2025, made with by <Link href="" className='font-semibold'>Creative Tim</Link> for a better web.</p>
      </div>
      <div className="flex items-center gap-4">
        <Link className='text-base font-medium text-gray-500' href="/Dashboard/Tables">
          Tables
        </Link>
        <Link className='text-base font-medium text-gray-500' href="/Dashboard/Product">        
        Product
        </Link>
        <Link className='text-base font-medium text-gray-500' href="/Dashboard/Blog">
          Blog
        </Link>
        <Link className='text-base font-medium text-gray-500' href="/Dashboard/Billing">      
        Billing
        </Link>
      </div>
    </div>
  )
}

export default Footer
