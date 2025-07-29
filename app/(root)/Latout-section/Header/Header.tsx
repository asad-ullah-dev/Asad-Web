"use client";

import { Button } from '@/components/ui/button'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { Boxes, LogOut } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
// import Mode from ""
import { useRouter } from 'next/navigation'
import Mode from '@/components/LightDark/Mode';

const page = () => {
  const router = useRouter()

  const handleLogout = () => {
    // 🔴 Remove token
    localStorage.removeItem("token")

    // 🔁 Redirect to login
    router.push("/auth/login")
  }

  return (
    <div className='flex items-center justify-between gap-2 px-3 py-2 bg-white dark:bg-gray-700 rounded sticky top-2 w-full shadow z-50'>
      <Link className="text-lg font-semibold gap-1 flex items-center" href="/Dashboard">
         <img className='w-10 h-10 dark:brightness-105 dark:invert' src="https://sdmntprwestus.oaiusercontent.com/files/00000000-aebc-6230-a286-f2048ff98525/raw?se=2025-07-29T06%3A30%3A03Z&sp=r&sv=2024-08-04&sr=b&scid=2d22a9fc-385b-5706-811f-21ed5539e2b1&skoid=61180a4f-34a9-42b7-b76d-9ca47d89946d&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-28T19%3A09%3A22Z&ske=2025-07-29T19%3A09%3A22Z&sks=b&skv=2024-08-04&sig=g9dfEYGnT00/fgguJwKTJXq5Gx8vs%2BWDDu2U5WJU89Q%3D" alt="" />
         ASAD WEB
      </Link>
      <div className="flex items-center gap-2">
        <Mode />
        <Button className="rounded px-2 py-1 sm:text-sm text-xs cursor-pointer dark:bg-red-500 dark:text-white lg:hidden"
            onClick={handleLogout}
            >
              <LogOut className="w-3 h-3 max-sm:hidden" />
              Logout
            </Button>
        <SidebarTrigger className="lg:hidden bg-gray-100 p-4 cursor-pointer" />
      </div>
    </div>
  )
}

export default page
