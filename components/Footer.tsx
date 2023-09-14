import {
  CopyrightIcon,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
// import Logo from "./Logo";

const Footer = () => {
  return (
    <div className="px-5 py-5 flex-box flex-col bg-slate-800 scroll-smooth text-center absolute bottom-0 left-0 right-0">
      <div className="w-full pt-4 flex-box justify-around flex-col md:flex-row flex-end">
        {/* <Logo /> */}
        <div className="py-5 text-white text-base font-normal flex-box">
          <CopyrightIcon />
          2023 BrightCoder - All Right Reserved
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
