import type { Metadata } from "next";
import "../../app/globals.css";
import { Toaster } from "sonner";


export const metadata: Metadata = {
  title: "Asad Website Auth",
  description: "An advanced web dashboard for managing users, data, and analytics using modern technologies.",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
         <Toaster richColors position="top-right" />
        {children}
      </body>
    </html>
  );
}