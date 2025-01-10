import React from "react";
import Link from "next/link";
import MenuIcon from '@mui/icons-material/Menu';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { useState, useEffect } from "react";


const Navbar = ({ isOpen, toggle }: { isOpen: boolean; toggle: () => void }) => {
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
                        <PermIdentityIcon
                            className={`text-gray-500 hover:text-black transition-colors duration-300 text-3xl ${
                                isMobile ? "ml-6" : ""
                            }`}
                        />
                    </Link>

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
                    <li>
                    <Link
                        href="/work"
                        >
                        <p className="cursor-pointer hover:text-black transition duration-200">
                            Work
                        </p>
                        </Link>
                    </li>
                    <li>
                    <Link
                        href="/projects"
                        >
                        <p className="cursor-pointer hover:text-black transition duration-200">
                            Projects
                        </p>
                    </Link>
                    </li>
                    <li>
                    <Link
                        href="/blogs"
                        >
                        <p className="cursor-pointer hover:text-black transition duration-200">
                            Blogs
                        </p>
                    </Link>
                    </li>
                    <li>
                    <Link
                        href="/contact"
                        >
                        <p className="cursor-pointer hover:text-black transition duration-200">
                            Contact
                        </p>
                    </Link>
                    </li>
                    </ul>
                </div>
            </div>
      </div>
    </nav>
  );
};

export default Navbar;
