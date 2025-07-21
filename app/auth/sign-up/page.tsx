"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  CalendarIcon,
  Eye,
  EyeOff,
  KeyRound,
  LogIn,
  Mail,
  UsersRound,
} from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { authService } from "@/lib/api/authService";

function formatDate(date: Date | undefined) {
  if (!date) return "";
  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function isValidDate(date: Date | undefined) {
  return date && !isNaN(date.getTime());
}

const schema = yup.object().shape({
  email: yup.string().email("Valid email likho").required("Email is required"),
  firstname: yup.string().required("First name is required"),
  lastname: yup.string().required("Last name is required"),
  Phonenumber: yup.string().required("Phone Number is required"),
  date: yup.string().required("Date is required"),
  password: yup
    .string()
    .min(6, "Kam az kam 6 characters ka password")
    .required("Password is required"),
});

type FormData = yup.InferType<typeof schema>;

const Page = () => {
   const router = useRouter();
   
  const [date, setDate] = useState<Date | undefined>(new Date("2025-06-01"));
  const [month, setMonth] = useState<Date | undefined>(date);
  const [value, setValue] = useState(formatDate(date));
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    try {
      const response = await authService.register(data);
      alert(response.message);

      // ✅ Success hone ke baad login page par redirect
      router.push("/auth/login");
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-0 px-5 py-5">
    <div className="max-w-2xl mx-auto w-full p-5 shadow rounded-lg">
        <div className="flex justify-center mx-auto mb-3 bg-gray-900 p-3 rounded-full w-fit">
          <UsersRound className="w-16 h-16 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-center bg-gradient-to-l from-blue-500 via-teal-500 to-green-500 text-transparent bg-clip-text">
          Sign Up
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-6">
          <div className="grid sm:grid-cols-2 gap-x-3 gap-y-6">
            <div className="relative">
              <Label className="text-sm" htmlFor="firstname">First Name</Label>
              <Input className="h-10 mt-1.5 pl-4 text-sm" id="firstname" placeholder="Enter Your First Name" {...register("firstname")} />
              {errors.firstname && <p className="text-red-500 text-sm mt-1 absolute">{errors.firstname.message}</p>}
            </div>

            <div className="relative">
              <Label className="text-sm" htmlFor="lastname">Last Name</Label>
              <Input className="h-10 mt-1.5 pl-4 text-sm" id="lastname" placeholder="Enter Your Last Name" {...register("lastname")} />
              {errors.lastname && <p className="text-red-500 text-sm mt-1 absolute">{errors.lastname.message}</p>}
            </div>

            <div className="relative">
              <Label className="text-sm" htmlFor="Phonenumber">Phone Number</Label>
              <Input className="h-10 mt-1.5 pl-4 text-sm" id="Phonenumber" placeholder="+92" {...register("Phonenumber")} />
              {errors.Phonenumber && <p className="text-red-500 text-sm mt-1 absolute">{errors.Phonenumber.message}</p>}
            </div>

            <div className="flex flex-col gap-3">
              <Label htmlFor="date">Date</Label>
              <div className="relative flex gap-2">
                <Input
                  id="date"
                  value={value}
                  placeholder="June 01, 2025"
                  className="pr-10 h-10"
                  {...register("date")}
                  onChange={(e) => {
                    const date = new Date(e.target.value);
                    setValue(e.target.value);
                    if (isValidDate(date)) {
                      setDate(date);
                      setMonth(date);
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "ArrowDown") {
                      e.preventDefault();
                      setOpen(true);
                    }
                  }}
                />
                {errors.date && <p className="text-red-500 text-sm mt-1 absolute">{errors.date.message}</p>}
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button variant="ghost" className="absolute top-1/2 right-2 size-6 -translate-y-1/2">
                      <CalendarIcon className="size-3.5" />
                      <span className="sr-only">Select date</span>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto overflow-hidden p-0" align="end" alignOffset={-8} sideOffset={10}>
                    <Calendar
                      mode="single"
                      selected={date}
                      captionLayout="dropdown"
                      month={month}
                      onMonthChange={setMonth}
                      onSelect={(date) => {
                        setDate(date);
                        setValue(formatDate(date));
                        setOpen(false);
                      }}
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>

          <div>
            <Label className="text-sm font-semibold">Countries</Label>
            <Select onValueChange={(val) => setSelectedCountry(val)}>
              <SelectTrigger className="w-full mt-1.5">
                <SelectValue placeholder="Select a Country" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Countries</SelectLabel>
                  <SelectItem value="PAK">PAK</SelectItem>
                  <SelectItem value="UK">UK</SelectItem>
                  <SelectItem value="UAE">UAE</SelectItem>
                  <SelectItem value="USA">USA</SelectItem>
                  <SelectItem value="BR">BR</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="relative">
            <Label className="text-sm" htmlFor="email">Email</Label>
            <Mail className="absolute bottom-3 text-gray-500 start-2.5 w-4 h-4" />
            <Input className="h-10 mt-1.5 pl-8 text-sm" id="email" placeholder="Enter Your Email" {...register("email")} />
            {errors.email && <p className="text-red-500 text-sm mt-1 absolute">{errors.email.message}</p>}
          </div>

          <div className="relative">
            <Label className="text-sm" htmlFor="password">Password</Label>
            <KeyRound className="absolute bottom-3 text-gray-500 start-2.5 w-4 h-4" />
            <Input
              className="h-10 mt-1.5 pl-8 text-sm"
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Enter Your Password"
              {...register("password")}
            />
            <button type="button" className="absolute top-10 end-2" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
            {errors.password && <p className="text-red-500 text-sm mt-1 absolute">{errors.password.message}</p>}
          </div>

          <div className="flex items-center justify-center pt-2">
            <input id="checked-checkbox" type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded-sm" />
            <label htmlFor="checked-checkbox" className="ms-2 text-sm font-medium text-blue-600">
              I agree to the Terms of Services and Privacy Policy
            </label>
          </div>

          <Button className="w-full py-3 bg-blue-600 hover:bg-blue-500" type="submit" disabled={loading}>
            <LogIn className="w-3 h-3 mr-2" />
            {loading ? "Signing Up..." : "Sign Up"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Page;
