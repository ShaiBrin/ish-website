import React from "react";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import CardContent from "@mui/joy/CardContent";
import Link from "next/link";

interface BasicCardProps {
  name: string;
  logo: string;
  tech: string[];
  description: string;
  link: string;
}

const BasicCard: React.FC<BasicCardProps> = ({
  name,
  logo,
  tech,
  description,
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
        <img
          src={logo}
          alt={`${name} logo`}
          style={{
            height: 70,
            objectFit: "contain",
            display: "block",
            margin: "auto",
          }}
        />
        <CardContent>
          <Typography level="h3" sx={{ textAlign: "center" }}>
            {name}
          </Typography>
          <Typography sx={{ mt: 1, fontWeight: "bold" }}>
            {tech.join(" • ")}
          </Typography>
          <Typography sx={{ mt: 1 }}>
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BasicCard;
