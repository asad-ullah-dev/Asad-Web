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
  ChartNoAxesCombined,
  Database,
  Fuel,
  LayoutDashboard,
  LogOut,
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
        <Link
          className="text-lg font-semibold gap-2 flex items-center pb-3 border-b border-gray-200"
          href="/Dashboard"
        >
          <Boxes className="w-5 h-5" />
          ASAD WEB
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup className="space-y-1">
          <Link href="/" className={linkClasses("/Dashboard")}>
            <LayoutDashboard className="w-4 h-4" />
            Dashboard
          </Link>
          <Link href="/Dashboard/About-us" className={linkClasses("/Dashboard/About-us")}>
            <ChartNoAxesCombined className="w-4 h-4" />
            About Us
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
