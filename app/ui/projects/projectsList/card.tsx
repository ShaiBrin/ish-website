import React from "react";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import CardContent from "@mui/joy/CardContent";
import Link from "next/link";
import Image from "next/image";
interface BasicCardProps {
  name: string;
  logo: string;
  tech: string[];
  premise: string;
  description: string;
  link: string;
}

const BasicCard: React.FC<BasicCardProps> = ({
  name,
  logo,
  tech,
  description,
  premise,
  link
}) => {
  return (
    <Link href={link} passHref  target="_blank">
      <Card
        variant="outlined"
        sx={{
          maxWidth: 275,
          margin: "auto",
          borderRadius: "lg",
          boxShadow: "sm",
          "&:hover": {
            boxShadow: "md",
            cursor: "pointer", 
          },
          overflow: "hidden",
        }}
      >
        <Image
          src={logo}
          alt={`${name} logo`}
          width={70} 
          height={70}
          style={{
            objectFit: "contain",
            display: "block",
            margin: "auto",
          }}
        />
        <CardContent>
          <Typography level="h3" sx={{ textAlign: "center" }}>
            {name}
          </Typography>
          <Typography sx={{ mt: 1, fontWeight: "bold", textAlign: 'center' }}>
            {tech.join(" • ")}
          </Typography>
          <Typography sx={{ mt: 1, fontStyle: 'italic' }}>
            {premise}
          </Typography>
          <Typography sx={{ mt: 1, fontWeight: 'bold' }}>
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BasicCard;
