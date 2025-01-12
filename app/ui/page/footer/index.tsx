import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { Social } from '@/app/types/socialTypes';


interface SocialsProps {
    socials: Social[]; 
}

const Footer:React.FC<SocialsProps> = ({ socials }) => {
  return (
    <BottomNavigation
    className="footer self-end dark:bg-white px-0 py-2"
    sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "flex-end",
        opacity: 0.7,
        gap: 1,
    }}
    >
      {socials.map((social, index) => (
        <BottomNavigationAction
         label={social.name}
         icon = {
         <Link key={index} href={social.link} passHref target="_blank" rel="noopener noreferrer">
          <div className="hover:scale-110 hover:opacity-100 transition-transform transition-opacity duration-200 opacity-70">
            <Image
              src={social.image}
              alt={social.name}
              width={40}
              height={40}
              style={{ borderRadius: "50%" }}
            />
          </div>
        </Link>}
        />
      ))}
    </BottomNavigation>
  );
};

export default Footer;
