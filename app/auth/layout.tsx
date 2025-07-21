import type { Metadata } from "next";
import "../../app/globals.css";


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
        {children}
      </body>
    </html>
  );
}