import Link from "next/link";
import { JSX } from "react";
import CloseIcon from '@mui/icons-material/Close';

const Sidebar = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}): JSX.Element => {
  return (
  
      <div
        className="sidebar-container bg-white-100 fixed w-full h-full overflow-hidden flex flex-col justify-center items-center right-0 z-10 transition-transform duration-300"
        style={{
          transform: `${isOpen ? "translateX(0)" : "translateX(100%)"}`,
          backgroundColor: "white", // Ensures solid white background
          opacity: 1,
        }}
      >
        <CloseIcon 
            className="absolute top-5 left-5 p-2 text-current cursor-pointer" 
            style={{ fontSize: "59px" }} 
            onClick={toggle} 
            />

        <ul className="sidebar-nav text-center leading-relaxed text-xl space-y-12  text-gray-400">
          <li>
            <Link href="/work" onClick={toggle}>
                <p className="cursor-pointer hover:text-black transition duration-200">Work</p>
            </Link>
          </li>
          <li>
            <Link href="/projects" onClick={toggle}>
                <p className="cursor-pointer hover:text-black transition duration-200">Projects</p>
            </Link>
          </li>
          <li>
            <Link href="/blogs" onClick={toggle}>
                <p className="cursor-pointer hover:text-black transition duration-200">Blogs</p>
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={toggle}>
                <p className="cursor-pointer hover:text-black transition duration-200">Contact</p>
            </Link>
          </li>
        </ul>
      </div>
    
  );
};

export default Sidebar;
