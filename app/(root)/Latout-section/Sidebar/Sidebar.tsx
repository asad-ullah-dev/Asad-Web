"use client"

import { usePathname, useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"
import {
  Bell,
  Boxes,
  Database,
  Fuel,
  LayoutDashboard,
  LogOut,
  ShoppingCart,
  TableColumnsSplit,
} from "lucide-react"

const Page = () => {
  const router = useRouter()

  const handleLogout = () => {
    // 🔴 Remove token
    localStorage.removeItem("token")

    // 🔁 Redirect to login
    router.push("/auth/login")
  }
  const pathname = usePathname()

  const isActive = (href: string) => pathname === href

  const linkClasses = (href: string) =>
    `text-sm font-medium flex gap-1.5 items-center px-1.5 py-2 rounded 
    ${isActive(href)
      ? "bg-gray-200 dark:bg-gray-900 text-black dark:text-white"
      : "hover:bg-gray-100 dark:hover:text-black text-gray-700 dark:text-gray-300"}`

  return (
    <Sidebar>
      <SidebarHeader>
         <Link className="text-lg font-semibold gap-1 flex items-center" href="/Dashboard">
         <img className='w-10 h-10 filter dark:brightness-105 dark:invert' src="https://sdmntprwestus.oaiusercontent.com/files/00000000-aebc-6230-a286-f2048ff98525/raw?se=2025-07-29T06%3A30%3A03Z&sp=r&sv=2024-08-04&sr=b&scid=2d22a9fc-385b-5706-811f-21ed5539e2b1&skoid=61180a4f-34a9-42b7-b76d-9ca47d89946d&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-28T19%3A09%3A22Z&ske=2025-07-29T19%3A09%3A22Z&sks=b&skv=2024-08-04&sig=g9dfEYGnT00/fgguJwKTJXq5Gx8vs%2BWDDu2U5WJU89Q%3D" alt="" />
         ASAD WEB
      </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup className="space-y-1">
          <Link href="/Dashboard" className={linkClasses("/Dashboard")}>
            <LayoutDashboard className="w-4 h-4" />
            Dashboard
          </Link>
          <Link href="/Dashboard/Product" className={linkClasses("/Dashboard/Product")}>
            <ShoppingCart className="w-4 h-4" />
            Product
          </Link>
          <Link href="/Dashboard/Blog" className={linkClasses("/Dashboard/Blog")}>
            <Database className="w-4 h-4" />
            Blog
          </Link>
          <Link href="/Dashboard/Tables" className={linkClasses("/Dashboard/Tables")}>
            <TableColumnsSplit className="w-4 h-4" />
            Tables
          </Link>
          <Link href="/Dashboard/Billing" className={linkClasses("/Dashboard/Billing")}>
            <Fuel className="w-4 h-4" />
            Billing
          </Link>
          <Link href="/Dashboard/Notifications" className={linkClasses("/Dashboard/Notifications")}>
            <Bell className="w-4 h-4" />
            Notifications
          </Link>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <div className="flex-col flex space-y-2.5">
            <Button className="w-full flex items-center gap-2 rounded cursor-pointer dark:bg-red-500 dark:text-white"
            onClick={handleLogout}
            >
              <LogOut className="w-3 h-3" />
              Logout
            </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}

export default Page
