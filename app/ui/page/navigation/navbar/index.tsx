import React from "react";
import Link from "next/link";
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import { useState, useEffect } from "react";
import { Links,Social } from "@/app/types";

import NavLink from "../pageLinks";
import SocialLink from "../socials";

interface NavBarProps {
    links: Links;
    socials: Social[];
    isOpen: boolean;
    toggle: () => void;
  }
const Navbar: React.FC<NavBarProps> = ({ links, socials, isOpen, toggle }) => {
    const [isMobile, setIsMobile] = useState(false);

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
                        <HomeIcon
                            className={`text-gray-500 hover:text-black transition-colors duration-300 text-3xl ${
                                isMobile ? "ml-6" : ""
                            }`}
                        />
                    </Link>

                    <ul className="hidden md:flex gap-x-16 text-gray-400 text-xl">
                        {links.links.map((link) => (
                            <NavLink key={link} link={link} />
                        ))}
                        </ul>
                    <ul className={`${isOpen ? "hidden" : "hidden md:flex"} gap-x-8 ml-6 text-gray-400 mr-10`}>
                        {socials.map((social, index) => (
                            <li key={index}>
                            <SocialLink 
                                link={social.link} 
                                name={social.name} 
                                image={social.image} 
                                fontSize={40} 
                            />
                            </li>
                        ))}
                    </ul>

                    {/* Hamburger Menu*/}
                    {isMobile && (
                        <MenuIcon
                        className="inline-flex items-center md:hidden mr-10"
                        fontSize="large"
                        onClick={toggle}
                        style={{ cursor: 'pointer' }}
                        />
                    )}
                </div>
            </div>
      </div>
    </nav>
  );
};

export default Navbar;
