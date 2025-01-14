import React from "react";
import { Card, CardContent } from "@mui/material";
import Typography from "@mui/joy/Typography";
import Image from 'next/image';
import Link from "next/link";

interface WorkCardProps {
    job_title:string;
    company: string;
    dates: string;
    location: string;
    functions: string[];
    tech_stack: string[];
    logo: string;
    link:string
}

const BasicWorkCard: React.FC<WorkCardProps> = ({
    job_title,
    company,
    dates,
    location,
    functions,
    tech_stack,
    logo,
    link
}) => {
  return (
    <Link href={link} passHref  target="_blank">
      <Card variant="outlined" className="card">
      <Image  
          src={logo}
          alt={`${company} logo`}
          width={70}
          height={70}
          style={{margin: "auto", "marginTop": "1rem"}}
        />        
        <CardContent>
            
            <Typography level="h3" sx={{textAlign: "center",}}>
              {job_title}
            </Typography>
            
            <Typography sx={{ textAlign: "center", fontWeight: "medium", fontSize: "1.2rem", marginBottom: "0.25rem" }}>
              {company}
            </Typography>
            
            <Typography sx={{ textAlign: "center"}}>
                {location}
            </Typography>

            <Typography sx={{ textAlign: "center", marginBottom:"0.25rem" }}>
                {dates}
            </Typography>

            <Typography 
                sx={{ fontWeight: "bold", textAlign: "center", }}>
                {tech_stack.join(" • ")}
            </Typography>

            <Typography sx={{ mt: 1 }}>
                {functions.join(" • ")}
            </Typography>
        </CardContent>
      </Card>
      </Link>
  );
};

export default BasicWorkCard;
