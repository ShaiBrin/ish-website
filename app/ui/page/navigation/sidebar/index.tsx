import Link from "next/link";
import CloseIcon from '@mui/icons-material/Close';
import Grid from '@mui/material/Grid2'
import { Social } from "@/app/types/socialTypes";
import Image from "next/image";
import { Links } from "@/app/types/linkTypes";
import { Email } from '@mui/icons-material';

interface SidebarProps {
  links: Links;
  socials: Social[];
  isOpen: boolean;
  toggle: () => void;
}
const Sidebar: React.FC<SidebarProps> = ({ links, socials, isOpen, toggle }) => {
  return (
  
      <div
        className="sidebar-container bg-white-100 fixed w-full h-full overflow-hidden flex flex-col justify-center items-center right-0 z-10 transition-transform duration-300"
        style={{
          transform: `${isOpen ? "translateX(0)" : "translateX(100%)"}`,
          backgroundColor: "white",
          opacity: 1,
        }}
      >
        <CloseIcon 
            className="absolute top-5 left-5 p-2 text-current cursor-pointer" 
            style={{ fontSize: "59px" }} 
            onClick={toggle} 
            />

        <ul className="sidebar-nav text-center leading-relaxed text-xl space-y-12 text-gray-400 pb mb-20">

        {links.links.map((link) => {
            const text = link.replace("/", "").charAt(0).toUpperCase() + link.slice(2);
                return (
                    <li key={link}>
                        <Link href={link} onClick={toggle}>
                        <p className="cursor-pointer hover:text-black transition duration-200">{text}</p>
                        </Link>
                    </li>
                );
              })} 
        </ul>
        
        <div className="w-full pl-5 pr-5">
          <Grid container rowSpacing={0} columnSpacing={{ xs: 3, sm: 2, md: 3 }} justifyContent="center">
            {socials.map((social, index) => (
              <Grid  key={index}>
                <Link
                    href={social.link}
                    passHref
                    target={social.name === "Mail" ? undefined : "_blank"}
                    rel={social.name === "Mail" ? undefined : "noopener noreferrer"}
                >
                <div className="hover:scale-110 hover:opacity-100 transition-transform transition-opacity duration-200 opacity-70">
                {social.name === "Mail" ? (
                                <Email
                                className="text-gray-700 hover:text-red-500"
                                style={{ fontSize: 50 }}
                                />
                            ) : (
                <Image
                      src={social.image}
                      alt={social.name}
                      width={50}
                      height={50}
                      style={{ borderRadius: "50%" }}
                    />)}
                  </div>
                </Link>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    
  );
};

export default Sidebar;
