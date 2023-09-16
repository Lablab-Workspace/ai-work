import Modal from "@/components/Modal";
import "./globals.css";
import type { Metadata } from "next";
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "AI WORK",
  description: "Created by BrightCoder",
  // manifest: "favicon.ico",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <body className={inter.className}>{children}</body> */}
      <body className="bg-[#F5F6FB]">
        {children}
        <Modal />
      </body>
    </html>
  );
}
