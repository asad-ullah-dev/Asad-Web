"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { authService } from "@/lib/api/authService";
import {
  Eye,
  EyeOff,
  KeyRound,
  Lock,
  Mail,
  UserRound,
  UserRoundPlus,
} from "lucide-react";

// ✅ Yup Validation Schema
const schema = yup.object().shape({
  email: yup.string().email("Valid email likho").required("Fill Your Email"),
  password: yup
    .string()
    .min(6, "Kam az kam 6 characters ka password")
    .required("Password required hai"),
});

type FormData = yup.InferType<typeof schema>;

const Page = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

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
      const res = await authService.login(data);

      // ✅ Fix: Only use res.data if it exists
      if (res.status === "success" && res.data?.token) {
        localStorage.setItem("token", res.data.token);
        router.push("/Dashboard");
      } else {
        alert(res.message || "Login failed");
      }
    } catch (error: any) {
      alert(error?.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center sm:px-0 px-5 py-5">
      <div className="max-w-lg mx-auto w-full p-5 shadow rounded-lg">
        <div className="flex justify-center mx-auto mb-3 bg-gray-900 p-3 rounded-full w-fit">
          <UserRound className="w-16 h-16 text-white" />
        </div>

        <h2 className="text-3xl font-bold text-center bg-gradient-to-l from-blue-500 via-teal-500 to-green-500 text-transparent bg-clip-text">
          Login
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-6">
          {/* Email */}
          <div className="relative">
            <Label className="text-sm" htmlFor="email">
              Email
            </Label>
            <Mail className="absolute bottom-3 text-gray-500 start-2.5 w-4 h-4" />
            <Input
              className="h-10 mt-1.5 pl-8 text-sm"
              type="email"
              id="email"
              placeholder="Enter Your Email"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1 absolute">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div className="relative">
            <Label className="text-sm" htmlFor="password">
              Password
            </Label>
            <KeyRound className="absolute bottom-3 text-gray-500 start-2.5 w-4 h-4" />
            <Input
              className="h-10 mt-1.5 pl-8 text-sm"
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Enter Your Password"
              {...register("password")}
            />
            <button
              type="button"
              className="absolute top-10 end-2 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                setShowPassword(!showPassword);
              }}
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1 absolute">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Remember me & Forget password */}
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm"
              />
              <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900">
                Remember me
              </label>
            </div>
            <div>
              <Link
                className="text-sm font-medium text-gray-900"
                href="/auth/forget-password"
              >
                Forget Password
              </Link>
            </div>
          </div>

          {/* Submit Button */}
          <Button
            className="cursor-pointer flex items-center gap-2 w-full py-3"
            type="submit"
            disabled={loading}
          >
            <Lock className="w-3 h-3" />
            {loading ? "Logging in..." : "Login"}
          </Button>

          {/* Create Account */}
          <Link
            className="text-sm font-medium justify-center flex items-center gap-1"
            href="/auth/sign-up"
          >
            <UserRoundPlus className="w-4 h-4" />
            Create an Account
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Page;
