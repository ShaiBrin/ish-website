import React from "react";
import Link from "next/link";
import MenuIcon from '@mui/icons-material/Menu';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Links } from "@/app/types/linkTypes";
import { Social } from '@/app/types/socialTypes';
import { Email } from '@mui/icons-material';

import Image from "next/image";

interface NavBarProps {
    links: Links;
    socials: Social[];
    isOpen: boolean;
    toggle: () => void;
  }
const Navbar: React.FC<NavBarProps> = ({ links, socials, isOpen, toggle }) => {
    const [isMobile, setIsMobile] = useState(false);
    const pathname = usePathname();

    // Effect hook to handle screen resizing
    useEffect(() => {
        const handleResize = () => {
        setIsMobile(window.innerWidth < 768); // Check if window width is less than 768px
        };

        // Initial check on component mount
        handleResize();

        // Add event listener for resize
        window.addEventListener("resize", handleResize);

        // Cleanup on component unmount
        return () => {
        window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <nav
        className={`navbar-container fixed w-full z-20 transition-opacity duration-300 ${
          isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.9)", 
        }}
      >
      
        
    <div className="w-full h-20 text-black sticky top-0 font-sans ">
        <div className="max-w-7xl mx-auto px-500 h-full">
                <div className="flex justify-between items-center h-full">
                    
                    {/* Home Page Button */}
                    <Link href="/">
                        <PermIdentityIcon
                            className={`text-gray-500 hover:text-black transition-colors duration-300 text-3xl ${
                                isMobile ? "ml-6" : ""
                            }`}
                        />
                    </Link>

                    <ul className="hidden md:flex gap-x-8 ml-6 text-gray-400">
                    {socials.map((social, index) => (
                        <li key={index}>
                        <Link
                            href={social.link}
                            passHref
                            target={social.name === "Mail" ? undefined : "_blank"}
                            rel={social.name === "Mail" ? undefined : "noopener noreferrer"}
                        >
                            <div className="hover:scale-110 hover:opacity-100 transition-transform transition-opacity duration-200 opacity-70 flex items-center">
                            {social.name === "Mail" ? (
                                <Email
                                className="text-gray-700 hover:text-blue-500"
                                style={{ fontSize: 40 }}
                                />
                            ) : (
                                <Image
                                src={social.image}
                                alt={social.name}
                                width={40}
                                height={40}
                                style={{ borderRadius: '50%' }}
                                className="filter grayscale hover:filter-none transition-all duration-200"
                                />
                            )}
                            </div>
                        </Link>
                        </li>
                    ))}
                    </ul>

                    {/* Hamburger Menu*/}
                    {isMobile && (
                        <MenuIcon
                        className="inline-flex items-center md:hidden mr-6"
                        fontSize="large"
                        onClick={toggle}
                        style={{ cursor: 'pointer' }}
                        />
                    )}
                    
                    {/* Navbar Links */}
                    <ul className="hidden md:flex gap-x-16 text-gray-400">
                    {links.links.map((link) => {
                    const text = link.replace("/", "").charAt(0).toUpperCase() + link.slice(2);
                        return (
                            <li key={link}>
                                <Link href={link}>
                                <p
                                    className={`cursor-pointer transition duration-200 ${
                                        pathname === link ? "text-black font-bold" : "hover:text-black"
                                    }`}
                                    >
                                    {text}
                                </p>
                                </Link>
                            </li>
                        );
                     })}  
                    </ul>
                </div>
            </div>
      </div>
    </nav>
  );
};

export default Navbar;
