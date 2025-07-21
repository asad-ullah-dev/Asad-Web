"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { ArrowLeft, ChevronLeft, Mail, ShieldAlert } from "lucide-react";

const schema = yup.object().shape({
  email: yup.string().email("Valid email likho").required("Fill Your Email"),
  password: yup.string().min(6, "Kam az kam 6 characters ka password").required("Password required hai"),
});

type FormData = yup.InferType<typeof schema>;

const page = () => {
  const [loading, setLoading] = useState(false);
     const [showPassword, setShowPassword] = useState(false)
  
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<FormData>({
      resolver: yupResolver(schema),
    });
  
    const onSubmit = async (data: FormData) => {
      setLoading(true);
      try {
        console.log("Form Data:", data);

      } catch (error) {
        console.error("Login error:", error);
      } finally {
        setLoading(false);
      }
    };


  return (
      <div className='min-h-screen flex flex-col justify-center items-center sm:px-0 px-5 py-5'>
      <div className='max-w-lg mx-auto w-full p-5 shadow rounded-lg'>
      <div className="flex justify-center mx-auto mb-3 bg-gray-900 p-3 rounded-full w-fit">
        <ShieldAlert className="w-16 h-16 text-white" />
      </div>
      <h2 className='text-3xl font-bold text-center bg-gradient-to-l from-blue-500 via-teal-500 to-green-500 text-transparent bg-clip-text'>Forget Password</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-6">
      <div className="relative">
        <Label className="text-sm" htmlFor="email">Email</Label>
        <Mail className="absolute bottom-3 text-gray-500 start-2.5 w-4 h-4" />
        <Input
          className="h-10 mt-1.5 pl-8 text-sm focus:outline-none focus:shadow-none"
          type="email"
          id="email"
          placeholder="Enter Your Email"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1 absolute">{errors.email.message}</p>
        )}
      </div>

      <Button className="cursor-pointer w-full py-3" type="submit" disabled={loading}>
        {loading ? "Submiting..." : "Submit"}
      </Button>
      <div className="flex justify-center">
        <Link className="text-sm font-medium flex items-center gap-2 text-gray-600" href="/auth/login">
           <ChevronLeft className="" /> Back To Login
        </Link>
      </div>
    </form>
      </div>
      </div>
  )
}

export default page