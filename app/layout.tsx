import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Navbar from "./components/navbar/Navbar";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Myles Smith",
  description: "Myles Smith's Portfolio Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} text-main-gray pt-8 px-12 xl:px-24 bg-bgPurple h-screen xl:flex flex-col justify-center`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
