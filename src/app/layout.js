import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ruchi Kumari - Full Stack Developer",
  description: "Portfolio of Ruchi Kumari, a Full Stack Developer specializing in React, Node.js, and Modern Web Design.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased text-gray-100 bg-slate-900 overflow-x-hidden w-full relative`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
