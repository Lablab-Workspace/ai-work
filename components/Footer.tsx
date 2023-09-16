"use client";
import {
  CopyrightIcon,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="mt-20 px-5 py-5 flex-box flex-col bg-slate-800 scroll-smooth text-center flex-end">
      <div className="w-full pt-4 flex-box justify-around flex-col md:flex-row flex-end">
      <Image
            src="/logo.png"
            alt="logo"
            width={300}
            height={100}
            className="w-44 md:w-56 object-contain pb-10 md:pb-0"
          />
        <div className="py-5 text-white text-base font-normal flex-box">
          <CopyrightIcon />
          2023 AKHMIM ABDELILAH - All Right Reserved
        </div>
        <div className="py-3">
          <div className="flex-box text-white">
            <div className="border cursor-pointer p-2 m-1 rounded-full ">
              <Facebook size={24} strokeWidth={2} />
            </div>
            <div className="border cursor-pointer p-2 m-1 rounded-full">
              <Instagram size={24} strokeWidth={2} />
            </div>
            <div className="border cursor-pointer p-2 m-1 rounded-full">
              <Linkedin size={24} strokeWidth={2} />
            </div>
            <div className="border cursor-pointer p-2 m-1 rounded-full">
              <Twitter size={24} strokeWidth={2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
