import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import DescriptionIcon from '@mui/icons-material/Description';
import Link from "next/link";
import { usePathname } from "next/navigation";


interface NavLinkProps {
  link: string;
  toggle?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ link, toggle }) => {
  const pathname = usePathname();
  const text = link.replace("/", "").charAt(0).toUpperCase() + link.slice(2);

  // Function to get the appropriate icon with color based on the pathname
  const getIcon = (link: string) => {
    // const iconProps = {
    //   fontSize: "24px", 
    // };

    switch (link) {
      case "/work":
        return <WorkIcon style={{ color: pathname === link ? "brown": "inherit"}}/>;
      case "/projects":
        return <CodeIcon style={{ color: pathname === link ? "blue": "inherit"}}/>;
      case "/resume":
        return <DescriptionIcon style={{ color: pathname === link ? "gray": "inherit"}}/>;
      default:
        return null;
    }
  };

  return (
    <li>
      <Link href={link} onClick={toggle ? () => toggle() : undefined}>
        <div className="flex items-center gap-x-2">
          {/* Render the icon with the correct color */}
          {getIcon(link)}
          <p
            className={`cursor-pointer transition duration-200 ${
              pathname === link ? "text-black font-bold" : "hover:text-black"
            }`}
          >
            {text}
          </p>
        </div>
      </Link>
    </li>
  );
};

export default NavLink;
