import React from "react";
import Link from "next/link";
import Image from "next/image";
import Email from "@mui/icons-material/Email";

interface SocialLinkProps {
  link: string;
  name: string;
  image?: string; 
  fontSize?: number; 
}

const SocialLink: React.FC<SocialLinkProps> = ({ link, name, image, fontSize = 40 }) => {
  return (
    <Link
      href={link}
      passHref
      target={name === "Mail" ? undefined : "_blank"}
      rel={name === "Mail" ? undefined : "noopener noreferrer"}
    >
      <div className="hover:scale-110 hover:opacity-100 transition-transform transition-opacity duration-200 opacity-70 flex items-center">
        {name === "Mail" ? (
          <Email
            className="text-gray-700 hover:text-red-500"
            style={{ fontSize }}
          />
        ) : (
          image && (
            <Image
              src={image}
              alt={name}
              width={fontSize}
              height={fontSize}
              style={{ borderRadius: "50%" }}
              className="grayscale hover:filter-none transition-all duration-200"
            />
          )
        )}
      </div>
    </Link>
  );
};

export default SocialLink;
