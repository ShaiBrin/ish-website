import React from "react";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import CardContent from "@mui/joy/CardContent";
import Link from "next/link";

interface WorkCardProps {
    job_title:string;
    company: string;
    dates: string;
    location: string;
    functions: string[];
    tech_stack: string[];
    logo: string
}

const BasicWorkCard: React.FC<WorkCardProps> = ({
    job_title,
    company,
    dates,
    location,
    functions,
    tech_stack,
    logo: logo_path
}) => {
  return (
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
          src={logo_path}
          alt={`${name} logo`}
          style={{
            height: 70,
            objectFit: "contain",
            display: "block",
            margin: "auto",
          }}
        />
        <CardContent>
            {/* Job Title */}
            <Typography 
                level="h3" 
                sx={{ 
                textAlign: "center", 
                fontWeight: "bold", 
                fontSize: "1.5rem", 
                marginBottom: "0.5rem" 
                }}
            >
                {job_title}
            </Typography>
            
            {/* Company Name */}
            <Typography 
                sx={{ 
                textAlign: "center", 
                fontWeight: "medium", 
                fontSize: "1.2rem", 
                color: "text.secondary", 
                marginBottom: "0.25rem" 
                }}
            >
                {company}
            </Typography>
            
            {/* Location */}
            <Typography 
                sx={{ 
                textAlign: "center", 
                fontWeight: "regular", 
                fontSize: "1rem", 
                color: "text.secondary", 
                marginBottom: "0.25rem" 
                }}
            >
                {location}
            </Typography>
            
            {/* Dates */}
            <Typography 
                sx={{ 
                textAlign: "center", 
                fontWeight: "light", 
                fontSize: "0.9rem", 
                color: "text.secondary", 
                marginBottom: "1rem" 
                }}
            >
                {dates}
            </Typography>
            
            {/* Tech Stack */}
            <Typography 
                sx={{ 
                mt: 1, 
                fontWeight: "bold", 
                textAlign: "center", 
                fontSize: "1rem" 
                }}
            >
                {tech_stack.join(" • ")}
            </Typography>

            {/* Functions */}
            <Typography 
                sx={{ 
                mt: 1, 
                fontSize: "0.9rem", 
                color: "text.primary" 
                }}
            >
                {functions.join(" • ")}
            </Typography>
        </CardContent>
      </Card>
  );
};

export default BasicWorkCard;
