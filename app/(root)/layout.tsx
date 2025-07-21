import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../../app/globals.css";
import { SidebarProvider } from "@/components/ui/sidebar"
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Asad Website Dashboard",
  description: "An advanced web dashboard for managing users, data, and analytics using modern technologies.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SidebarProvider>
      <Sidebar />
      <main className="w-full px-4 bg-gray-100 dark:bg-white">
      <Header />
        {children}
      <Footer />
      </main>
    </SidebarProvider>
      </body>
    </html>
  );
}