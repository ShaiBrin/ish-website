import React from "react";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import CardContent from "@mui/joy/CardContent";

interface BasicCardProps {
  title: string;
  subtitle: string;
  description: string;
  logo: string;
}

const BasicCard: React.FC<BasicCardProps> = ({
  title,
  subtitle,
  description,
  logo,
}) => {
  return (
    <Card variant="outlined" sx={{ maxWidth: 275, margin: "auto", borderRadius: "lg", boxShadow: "sm", "&:hover": { boxShadow: "md", },
        overflow: "hidden",
      }}
    >
      <img
        src={logo}
        alt={`${title} logo`}
        style={{
          height: 100,
          objectFit: "contain",
          display: "block",
          margin: "auto",
        }}
      />
      <CardContent>
        <Typography level="h2" fontSize="lg" sx={{ mb: 0.5 }}>
          {title}
        </Typography>
        <Typography>
          {subtitle}
        </Typography>
        <Typography sx={{ mt: 1.5 }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BasicCard;
