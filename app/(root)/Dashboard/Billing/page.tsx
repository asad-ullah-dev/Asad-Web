import { CircleCheck } from 'lucide-react'
import React from 'react'

const product = [
    {
        id: "1",
        plan: "Started Plan",
        price: "$10.00",
        month: "/month",
        btn: "Current Plan",
        btnbg: "bg-gray-200 dark:bg-gray-400",
        bg: "bg-white dark:bg-gray-200",
        icon: <CircleCheck className='w-4 h-4' />,
        line1: "Manage up to 1000 Contacts",
        line2: "Manage up to 1000 Contacts",
        line3: "Manage up to 1000 Contacts",
        line4: "Manage up to 1000 Contacts",
        line5: "Manage up to 1000 Contacts",
        textcolor: "text-black",
    },
    {
        id: "2",
        plan: "Growth Plan",
        price: "$79.00",
        month: "/month",
        btn: "Upgrate Plan",
        btnbg: "bg-white",
        bg: "bg-gray-800",
        icon: <CircleCheck className='w-4 h-4' />,
        line1: "Manage up to 1000 Contacts",
        line2: "Manage up to 1000 Contacts",
        line3: "Manage up to 1000 Contacts",
        line4: "Manage up to 1000 Contacts",
        line5: "Manage up to 1000 Contacts",
        textcolor: "text-white",
    },
    {
        id: "3",
        plan: "Enterprice Plan",
        price: "Custom",
        month: "/month",
        btn: "Contact Us",
        btnbg: "bg-gray-200 dark:bg-gray-400",
        bg: "bg-white dark:bg-gray-200",
        icon: <CircleCheck className='w-4 h-4' />,
        line1: "Manage up to 1000 Contacts",
        line2: "Manage up to 1000 Contacts",
        line3: "Manage up to 1000 Contacts",
        line4: "Manage up to 1000 Contacts",
        line5: "Manage up to 1000 Contacts",
        textcolor: "text-black",
    },
]

const page = () => {
  return (
    <div className='pt-12'>
      <h3 className='text-xl font-semibold dark:text-black'>Billing & Subscription</h3>
      <p className='text-sm font-normal text-gray-500 pt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, doloribus?</p>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4 py-8">
            {product.map((item) => (
                <div key={item.id} className={`${item.bg} px-4 py-7 shadow border rounded-md border-gray-200`}>
                    <h3 className={`${item.textcolor} sm:text-2xl text-xl font-semibold`}>{item.plan}</h3>
                        <div className='pt-7'>
                            <h1 className={`${item.textcolor} sm:text-3xl text-2xl font-bold flex items-center gap-1`}>{item.price}
                                <span className='sm:text-xl text-lg font-normal'>{item.month}</span>
                            </h1>
                            <div className='pt-7'>
                                <button className={`${item.btnbg} p-2.5 w-full cursor-pointer rounded font-medium text-black`}>{item.btn}</button>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-4 py-7">
                            <div className='flex items-center gap-2'>
                                <p className={`${item.textcolor}`}>{item.icon}</p>
                                <p className='text-sm font-normal text-gray-500'>{item.line1}</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <p className={`${item.textcolor}`}>{item.icon}</p>
                                <p className='text-sm font-normal text-gray-500'>{item.line2}</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <p className={`${item.textcolor}`}>{item.icon}</p>
                                <p className='text-sm font-normal text-gray-500'>{item.line3}</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <p className={`${item.textcolor}`}>{item.icon}</p>
                                <p className='text-sm font-normal text-gray-500'>{item.line4}</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <p className={`${item.textcolor}`}>{item.icon}</p>
                                <p className='text-sm font-normal text-gray-500'>{item.line5}</p>
                            </div>
                        </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default page
