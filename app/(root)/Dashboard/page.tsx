"use client"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Bell, ChartNoAxesCombined, ChevronsLeftRight, CreditCard, Gpu, HardDrive, KeyRound, Laptop, ShoppingCart, User } from "lucide-react"
import { WebsiteViewsCard } from "@/components/WebsiteViewsCard/WebsiteViewsCard"
import { DailySalesCard } from "@/components/DailySalesCard/DailySalesCard"
import { CompletedTasksCard } from "@/components/CompletedTasksCard/CompletedTasksCard"
import { redirect, useRouter } from "next/navigation"
import { useEffect } from "react"

const cards = [
  {
    id: "1",
    total: "Today's Money",
    price: "$53k",
    number: "+55%",
    textcolor: "text-green-600",
    dates: "than last week",
    completed: true,
    icon: <HardDrive className="w-5 h-5" />,
  },
  {
    id: "2",
    total: "Today's Users",
    price: "2300",
    number: "+3%",
    textcolor: "text-green-600",
    dates: "than last month",
    completed: true,
    icon: <User className="w-5 h-5" />,
  },
  {
    id: "3",
    total: "Ads Views",
    price: "3,462",
    number: "-2%",
    textcolor: "text-red-600",
    dates: "than yesterday",
    completed: false,
    icon: <ChartNoAxesCombined className="w-5 h-5" />,
  },
  {
    id: "4",
    total: "Sales",
    price: "$103,430",
    number: "+5%",
    textcolor: "text-green-600",
    dates: "than yesterday",
    completed: true,
    icon: <Laptop className="w-5 h-5" />,
  }
]

const page = () => {
  return (
    <div className="pt-8">
    <h2 className="text-2xl font-bold dark:text-black">Dashboard</h2>
    <p className="text-base font-normal text-gray-500">Check the sales, value and bounce rate by country.</p>
    <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-4 mt-8">
      {cards.map((item) => (
        <div key={item.id} className="p-2.5 shadow rounded bg-white dark:bg-gray-700">
            <div className="flex justify-between pb-2.5">
              <div>
                <h3 className="text-lg font-medium text-gray-600 dark:text-white">{item.total}</h3>
                <p className="text-2xl font-bold">{item.price}</p>
              </div>
              <div>
                <div className="bg-black text-white px-3.5 py-3 rounded-lg shadow">
                  {item.icon}
                </div>
              </div>
            </div>
            <div className="border-t border-gray-200 py-1.5">
              <div className="flex items-center gap-1 text-sm font-bold">
                <span className={`${item.textcolor}`}>{item.number}</span>
                <p className="text-gray-600 font-normal dark:text-white">{item.dates}</p>   
                </div>
            </div>
        </div>
      ))}
    </div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 py-8">
  <WebsiteViewsCard />
  <DailySalesCard />
  <CompletedTasksCard />
    </div>
    <div className="grid md:grid-cols-12 grid-cols-1 gap-4 pt-4">
    <div className="lg:col-span-8 md:col-span-7">
    <Table>
  <TableHeader>
    <TableRow>
      <TableHead className="text-sm font-semibold text-gray-600 dark:text-white">Companies</TableHead>
      <TableHead className="text-sm font-semibold text-gray-600 dark:text-white">Members</TableHead>
      <TableHead className="text-sm font-semibold text-gray-600 dark:text-white">Budget</TableHead>
      <TableHead className="text-sm font-semibold text-gray-600 dark:text-white">Completion</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody >
    <TableRow>
      <TableCell className="font-medium">Material XD Version</TableCell>
      <TableCell>
        <div className="flex items-center">
        <img className="w-5 h-5 rounded-full relative left-1.5" alt="tableimg 1" src="https://demos.creative-tim.com/material-dashboard/assets/img/team-1.jpg" />
        <img className="w-5 h-5 rounded-full" alt="tableimg 2" src="https://demos.creative-tim.com/material-dashboard/assets/img/team-1.jpg" />
        <img className="w-5 h-5 rounded-full relative right-1.5" alt="tableimg 2" src="https://demos.creative-tim.com/material-dashboard/assets/img/team-1.jpg" />
        </div>
      </TableCell>
      <TableCell className="font-medium text-gray-500 dark:text-white">$14,000</TableCell>
      <TableCell className="font-medium text-gray-600 dark:text-white">60%</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">Add Progress Track</TableCell>
      <TableCell>
        <div className="flex items-center">
        <img className="w-5 h-5 rounded-full relative left-1.5" alt="tableimg 1" src="https://demos.creative-tim.com/material-dashboard/assets/img/team-1.jpg" />
        <img className="w-5 h-5 rounded-full" alt="tableimg 2" src="https://demos.creative-tim.com/material-dashboard/assets/img/team-1.jpg" />
        <img className="w-5 h-5 rounded-full relative right-1.5" alt="tableimg 2" src="https://demos.creative-tim.com/material-dashboard/assets/img/team-1.jpg" />
        </div>
        </TableCell>
       <TableCell className="font-medium text-gray-500 dark:text-white">$3,000</TableCell>
      <TableCell className="font-medium text-gray-600 dark:text-white">10%</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">Fix Platform Errors</TableCell>
      <TableCell>
         <div className="flex items-center">
        <img className="w-5 h-5 rounded-full relative left-1.5" alt="tableimg 1" src="https://demos.creative-tim.com/material-dashboard/assets/img/team-1.jpg" />
        <img className="w-5 h-5 rounded-full" alt="tableimg 2" src="https://demos.creative-tim.com/material-dashboard/assets/img/team-1.jpg" />
        <img className="w-5 h-5 rounded-full relative right-1.5" alt="tableimg 2" src="https://demos.creative-tim.com/material-dashboard/assets/img/team-1.jpg" />
        </div>
      </TableCell>
       <TableCell className="font-medium text-gray-500 dark:text-white">Not set</TableCell>
      <TableCell className="font-medium text-gray-600 dark:text-white">100%</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">Launch our Mobile App</TableCell>
      <TableCell>
        <div className="flex items-center">
        <img className="w-5 h-5 rounded-full relative left-1.5" alt="tableimg 1" src="https://demos.creative-tim.com/material-dashboard/assets/img/team-1.jpg" />
        <img className="w-5 h-5 rounded-full" alt="tableimg 2" src="https://demos.creative-tim.com/material-dashboard/assets/img/team-1.jpg" />
        <img className="w-5 h-5 rounded-full relative right-1.5" alt="tableimg 2" src="https://demos.creative-tim.com/material-dashboard/assets/img/team-1.jpg" />
        </div>
      </TableCell>
      <TableCell className="font-medium text-gray-500 dark:text-white">$20,500</TableCell>
      <TableCell className="font-medium text-gray-600 dark:text-white">100%</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">Add the New Pricing Page</TableCell>
      <TableCell>
         <div className="flex items-center">
        <img className="w-5 h-5 rounded-full relative left-1.5" alt="tableimg 1" src="https://demos.creative-tim.com/material-dashboard/assets/img/team-1.jpg" />
        <img className="w-5 h-5 rounded-full" alt="tableimg 2" src="https://demos.creative-tim.com/material-dashboard/assets/img/team-1.jpg" />
        <img className="w-5 h-5 rounded-full relative right-1.5" alt="tableimg 2" src="https://demos.creative-tim.com/material-dashboard/assets/img/team-1.jpg" />
        </div>
      </TableCell>
       <TableCell className="font-medium text-gray-500 dark:text-white">$500</TableCell>
      <TableCell className="font-medium text-gray-600 dark:text-white">25%</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">Redesign New Online Shop</TableCell>
      <TableCell>
        <div className="flex items-center">
        <img className="w-5 h-5 rounded-full relative left-1.5" alt="tableimg 1" src="https://demos.creative-tim.com/material-dashboard/assets/img/team-1.jpg" />
        <img className="w-5 h-5 rounded-full" alt="tableimg 2" src="https://demos.creative-tim.com/material-dashboard/assets/img/team-1.jpg" />
        <img className="w-5 h-5 rounded-full relative right-1.5" alt="tableimg 2" src="https://demos.creative-tim.com/material-dashboard/assets/img/team-1.jpg" />
        </div>
      </TableCell>
       <TableCell className="font-medium text-gray-500 dark:text-white">$2,000</TableCell>
      <TableCell className="font-medium text-gray-600 dark:text-white">40%</TableCell>
    </TableRow>
  </TableBody>
      </Table>
    </div>
    <div className="lg:col-span-4 md:col-span-5">
        <div className="bg-white dark:bg-gray-700 px-6 py-5 shadow rounded-md">
            <h4 className="text-xl font-medium">Orders overview</h4>
            <p className="text-sm font-normal text-gray-600 dark:text-white"><span className="font-semibold">24%</span> this month</p>   
        <ol className="relative border-s border-gray-300 dark:border-gray-500 mt-5">                  
        <li className="mb-3 ms-6">
        <Bell className="absolute w-4 h-4 -start-2 text-green-500 bg-white dark:bg-gray-700" />
        <h3 className="text-base font-semibold text-gray-900 dark:text-white">$2400, Design changes</h3>
        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">22 DEC 7:20 PM</p>
      </li>
      <li className="mb-3 ms-6">
        <ChevronsLeftRight className="absolute w-5 h-5 -start-2 text-red-500 bg-white dark:bg-gray-700" />
        <h3 className="text-base font-semibold text-gray-900 dark:text-white">New order #1832412</h3>
        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">21 DEC 11 PM</p>
      </li>
      <li className="mb-3 ms-6">
      <ShoppingCart className="absolute w-4 h-4 -start-2 text-blue-500 bg-white dark:bg-gray-700" />
     <h3 className="text-base font-semibold text-gray-900 dark:text-white">Server payments for April</h3>
      <p className="text-sm font-medium text-gray-600 dark:text-gray-400">21 DEC 9:34 PM</p>
      </li>
      <li className="mb-3 ms-6">
      <CreditCard className="absolute w-4 h-4 -start-2 text-orange-500 bg-white dark:bg-gray-700" />
      <h3 className="text-base font-semibold text-gray-900 dark:text-white">New card added for order #4395133</h3>
      <p className="text-sm font-medium text-gray-600 dark:text-gray-400">20 DEC 2:20 AM</p>
    </li>
    <li className="mb-3 ms-6">
    <KeyRound className="absolute w-4 h-4 -start-2 text-red-600 bg-white dark:bg-gray-700" />
     <h3 className="text-base font-semibold text-gray-900 dark:text-white">Unlock packages for development</h3>
    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">18 DEC 4:54 AM</p>
    </li>
    <li className="ms-6">
    <Gpu className="absolute w-4 h-4 -start-2 text-black dark:text-white bg-white dark:bg-gray-700" />
     <h3 className="text-base font-semibold text-gray-900 dark:text-white">New order #9583120</h3>
    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">17 DEC</p>
    </li>
    </ol>
    </div>
    </div>
    </div>
    </div>
  )
}

export default page
