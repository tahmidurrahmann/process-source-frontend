"use client";
import { useEffect, useState } from "react";
import Drawer from "./Drawer";
import "./styles.css";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import logo from "../../assets/logo1.png"
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MdMenu } from "react-icons/md";

export default function App() {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

    const navItems = (
        <div className="flex flex-col items-center justify-center gap-6 py-24 my-6 lg:flex-row lg:my-0 lg:gap-2 xl:gap-6 md:py-36 lg:py-0 text-sm">
            <Link onClick={() => setIsOpen(false)} className={`link ${pathname === '/' ? 'text-[#0C71C3] lg:bg-[#0C71C3] font-medium lg:text-white px-3 py-1 rounded-lg' : 'text-white hover:text-[#0C71C3]'}`} href="/">
                Home
            </Link>
            <Link onClick={() => setIsOpen(false)} className={`link ${pathname === '/about' ? 'text-[#0C71C3] lg:bg-[#0C71C3] font-medium lg:text-white px-3 py-1 rounded-lg' : 'text-white hover:text-[#0C71C3]'}`} href="/about">
                About
            </Link>
        </div>
    );

    return (
        <div className={`fixed z-10 w-full ${scrolled ? "bg-[#1515154D]" : "bg-[#1515154D]"}`}>
            <div className="flex justify-between items-center xl:px-12 lg:px-8 px-4 2xl:px-16">
                <Image src={logo} alt="logo" width={40} />
                <div className="hidden lg:inline-block">
                    {navItems}
                </div>
                <button className="inline-block lg:hidden" type="button" onClick={() => setIsOpen(!isOpen)}>
                    <MdMenu className="text-white" size={26} />
                </button>
                <Drawer
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    position="top"
                >
                    <div className="demo-content">
                        <span
                            type="button"
                            className="hover:scale-105 flex justify-end"
                            onClick={() => setIsOpen(false)}
                        >
                            <IoMdClose className="text-white" size={30} />
                        </span>
                        {navItems}
                    </div>
                </Drawer>
            </div>
        </div>
    );
}