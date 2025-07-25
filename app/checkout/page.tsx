'use client';

import { useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useState } from 'react';

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email'),
});

type FormData = z.infer<typeof schema>;

export default function CheckoutPage() {
  const searchParams = useSearchParams();
  const defaultName = searchParams.get('name') || '';
  const price = Number(searchParams.get('price')) || 0;

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: defaultName,
      email: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      setLoading(true);
      const res = await axios.post('/api/checkout', {
        ...data,
        price,
      });
      window.location.href = res.data.url;
    } catch (err: any) {
      alert(err?.response?.data?.error || 'Checkout failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-800 text-center mb-8">
          Secure Checkout
        </h1>

        <div className="bg-white p-8 rounded-xl shadow-xl">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Name</label>
              <input
                {...register('name')}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
              <input
                {...register('email')}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Amount */}
            <div className="bg-gray-100 p-4 rounded-md flex justify-between items-center">
              <span className="text-lg font-medium text-gray-700">Total Amount:</span>
              <span className="text-2xl font-bold text-green-600">${price.toFixed(2)}</span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full cursor-pointer flex justify-center items-center gap-2 px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 transition duration-200 disabled:opacity-50"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8z"
                    ></path>
                  </svg>
                  Processing...
                </>
              ) : (
                <>Proceed to Pay</>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
