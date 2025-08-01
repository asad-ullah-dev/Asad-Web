"use client";

import { Button } from '@/components/ui/button'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { Boxes, LogOut } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
// import Mode from ""
import { useRouter } from 'next/navigation'
import Mode from '@/components/LightDark/Mode';
import { toast } from 'sonner'


const page = () => {
  const router = useRouter()

  const handleLogout = () => {
  // 🔴 Remove token
  localStorage.removeItem("token");

  // ✅ Show toast
  toast.success("Logout successful!");

  // 🔁 Redirect to login
  router.push("/auth/login");
};

  return (
    <div className='flex items-center justify-between gap-2 px-3 py-2 bg-white dark:bg-gray-700 rounded sticky top-2 w-full shadow z-50'>
      <Link className="text-lg font-semibold gap-1 flex items-center" href="/Dashboard">
         <img className='w-10 h-10 filter dark:brightness-105 dark:invert' src="/image/logo.png" alt="" />
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
