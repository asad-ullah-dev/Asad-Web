"use client";

import React, { useState } from "react";
import { Star } from "lucide-react";
import Products from "@/api/product.json";
import { useRouter } from "next/navigation";

const ProductCard = ({ data }: any) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleCheckout = () => {
    router.push(`/checkout?name=${encodeURIComponent(data.title)}&price=${data.price}`);
  };

  return (

      <div className="h-full border-2 border-gray-200 border-opacity-60 dark:bg-gray-200 rounded-lg overflow-hidden">
        <img
          className="h-[373px] w-full object-cover object-center"
          src={data.image}
          alt={data.title}
        />
        <div className="px-3 py-6">
          <h2 className="text-xs font-medium text-gray-400 mb-1 uppercase">{data.category}</h2>
          <h1 className="text-lg font-medium text-gray-900 mb-3 line-clamp-2">{data.title}</h1>
          <p className="leading-relaxed mb-2 line-clamp-4">{data.description}</p>
          <div className="flex items-center justify-between space-x-2 pb-3">
          <span className="text-gray-500 font-semibold flex items-center gap-1">{data.rating.rate} 
            <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />
            <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />
            <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />
          </span>
        <span className="text-gray-500 text-sm">({data.rating.count} reviews)</span>
        </div>
            <button
              onClick={handleCheckout}
              className="w-full cursor-pointer text-white bg-blue-500 font-medium border-0 py-2 px-6 hover:bg-blue-600 rounded"
            >
              {loading ? "Loading..." : `Pay `}
              ${data.price}
            </button>
        </div>
      </div>
  );
};

const page = () => {
  return (
    <section className="mx-auto py-10">
        <h2 className="text-2xl font-bold mb-3 uppercase dark:text-black">Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-600 body-font">
          {Products.map((product, i) => (
            <ProductCard data={product} key={i} />
          ))}
        </div>
    </section>
  );
};

export default page;
