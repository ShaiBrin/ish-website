import CloseIcon from '@mui/icons-material/Close';
import Grid from '@mui/material/Grid2'
import { Links, Social } from "@/app/types";
import SocialLink from "../socials";
import NavLink from "../pageLinks";
interface SidebarProps {
  links: Links;
  socials: Social[];
  isOpen: boolean;
  toggle: () => void;
}
const Sidebar: React.FC<SidebarProps> = ({ links, socials, isOpen, toggle }) => {

  return (
  
      <div
        className="sidebar-container bg-white-100 fixed w-full h-full overflow-hidden flex flex-col items-center right-0 z-10 transition-transform duration-300 pt-40"
        style={{
          transform: `${isOpen ? "translateX(0)" : "translateX(100%)"}`,
          backgroundColor: "white",
          opacity: 1,
        }}
      >
        <CloseIcon
          className="absolute top-5 left-5 cursor-pointer text-current text-[50px]"
          onClick={toggle}
        />

        <ul className="sidebar-nav text-center leading-relaxed text-xl space-y-12 text-gray-400 mb-20">

        {links.links.map((link) => (
          <NavLink key={link} link={link} toggle={toggle} />
        ))}
        </ul>
        
        <div className="w-full px-5">
        <Grid container rowSpacing={0} columnSpacing={{ xs: 3, sm: 2, md: 3 }} justifyContent="center">
          {socials.map((social, index) => (
            <Grid key={index}>
              <SocialLink 
                link={social.link} 
                name={social.name} 
                image={social.image} 
                fontSize={50} 
              />
            </Grid>
          ))}
        </Grid>
        </div>
      </div>
    
  );
};

export default Sidebar;
