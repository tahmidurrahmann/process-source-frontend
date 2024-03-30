"use client";
import { useEffect, useRef, useState } from "react";
import Drawer from "./Drawer";
import "./styles.css";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import logooo from "../../assets/logooo.png"
import Image from "next/image";
import { CgMenuRightAlt } from "react-icons/cg";
import { FaAngleDown } from "react-icons/fa6";

export default function App() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [openMenuIndex, setOpenMenuIndex] = useState(null);
    const [open, setOpen] = useState(false);
    const dropDownRef = useRef(null);

    const toggleMenu = (index) => {
        setOpenMenuIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const menuItems = [
        { label: 'Services', links: [{ label: 'Contact Centre', link: '/contactCentre' }, { label: 'Back Office', link: '/backOffice' }, { label: 'Automation & AI', link: '/automation' }] },
        { label: 'Models', links: [{ label: 'Comprehensive', link: '/comprehensive' }, { label: 'Co-Sourcing', link: '/coSourcing' }, { label: 'PROCESS@HOME', link: '/process' }, { label: 'WORKSPACES', link: '/workspaces' }] }
    ];

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

    useEffect(() => {
        const close = (e) => {
            if (dropDownRef.current && !dropDownRef.current.contains(e.target)) setOpen(false)
        };
        document.addEventListener('mousedown', close);
        return () => document.removeEventListener('mousedown', close)
    }, []);

    const navItems = (
        <div className="flex flex-col items-center lg:justify-center gap-2 lg:flex-row lg:gap-2 py-12 lg:py-0 xl:gap-6 text-sm lg:text-xs">
            <div className="w-full">
                <Link onClick={() => setIsOpen(false)} className="text-white hover:text-[#0C71C3] font-medium" href="/">
                    Home
                </Link>
            </div>
            <div className="hidden lg:inline-block"><div className="dropDone">
                <button><Link href="/services" tabIndex={0} className="text-white hover:text-[#0C71C3] font-medium flex items-center gap-1">Services <FaAngleDown /></Link></button>
                <div className="dropdown-content rounded">
                    <Link onClick={() => setIsOpen(false)} className={`text-black ${open ? 'duration-500 hover:text-[#0C71C3] mt-4' : 'duration-200 mt-4 hover:text-[#0C71C3]'}`} href="/contactCentre">
                        Contact Centre
                    </Link>
                    <Link onClick={() => setIsOpen(false)} className={`text-black ${open ? 'duration-500 hover:text-[#0C71C3]' : 'duration-200 hover:text-[#0C71C3]'}`} href="/backOffice">
                        Back Office
                    </Link>
                    <Link onClick={() => setIsOpen(false)} className={`text-black ${open ? 'duration-500 hover:text-[#0C71C3] mb-4' : 'duration-200 hover:text-[#0C71C3] mb-4'}`} href="/automation">
                        Automation & AI
                    </Link>
                </div>
            </div></div>
            <div className="hidden lg:inline-block"><div className="dropDone">
                <button><Link href="/models" tabIndex={0} role="button" className="text-white hover:text-[#0C71C3] font-medium flex items-center gap-1">Models <FaAngleDown /></Link></button>
                <div className="dropdown-content rounded">
                    <Link onClick={() => setIsOpen(false)} className={`text-black ${open ? 'duration-500 hover:text-[#0C71C3] mt-4' : 'duration-200 mt-4 hover:text-[#0C71C3]'}`} href="/comprehensive">
                        Comprehensive
                    </Link>
                    <Link onClick={() => setIsOpen(false)} className={`text-black ${open ? 'duration-500 hover:text-[#0C71C3]' : 'duration-200 hover:text-[#0C71C3]'}`} href="/coSourcing">
                        Co-Sourcing
                    </Link>
                    <Link onClick={() => setIsOpen(false)} className={`text-black ${open ? 'duration-500 hover:text-[#0C71C3]' : 'duration-200 hover:text-[#0C71C3]'}`} href="/process">
                        PROCESS@HOME
                    </Link>
                    <Link onClick={() => setIsOpen(false)} className={`text-black ${open ? 'duration-500 hover:text-[#0C71C3] mb-4' : 'duration-200 hover:text-[#0C71C3] mb-4'}`} href="/workspaces">
                        WORKSPACES
                    </Link>
                </div>
            </div></div>
            <div className="text-white inline-block lg:hidden w-full">
                {menuItems.map((menuItem, index) => (
                    <div className="py-4" key={index}>
                        <div className="flex items-center justify-between" onClick={() => toggleMenu(index)}>
                            <span>{menuItem.label}</span>
                            <div>{openMenuIndex === index ? <FaAngleDown /> : <FaAngleDown />}</div>
                        </div>
                        {openMenuIndex === index && (
                            <div>
                                <ul>
                                    {menuItem.links.map((item, subIndex) => (
                                        <li className="pt-6" key={subIndex}>
                                            <Link className="text-white hover:text-[#0C71C3] font-medium" onClick={() => setIsOpen(false)} href={item.link}>{item.label}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <div className={`fixed z-10 px-4 w-full ${scrolled ? "bg-[#1515154D]" : "bg-[#1515154D]"}`}>
            <div className="flex justify-between items-center max-w-screen-xl mx-auto">
                <Link href="/"><Image src={logooo} alt="logo" width={70} /></Link>
                <div className="hidden lg:inline-block">
                    {navItems}
                </div>
                <button className="lg:hidden flex" type="button" onClick={() => setIsOpen(!isOpen)}>
                    <CgMenuRightAlt className="text-white" size={32} />
                </button>
                <Drawer
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    position="left"
                >
                    <div className="w-full demo-content">
                        <div className="flex justify-between gap-40">
                            <Image src={logooo} alt="logooo" width={80} />
                            <div className="hover:scale-105"
                                onClick={() => setIsOpen(false)}>
                                <IoMdClose className="text-white -mt-1" size={24} />
                            </div>
                        </div>
                        {navItems}
                    </div>
                </Drawer>
            </div>
        </div>
    );
}