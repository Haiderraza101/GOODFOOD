import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/SideBar";
import Navbar from "@/components/Navbar";

// Font configurations
const inter = Inter({
  variable: "--font-inter",
  weight: ["400", "500", "700"], 
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GOODFOOD", 
  description: "Food order dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SideBar/>
        <div className="lg:ml-72 md:ml-6 sm:ml-6  ">
                  <Navbar />
        {children}
        </div>
      </body>
    </html>
  );
}