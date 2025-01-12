"use client";
import { Box } from "@mui/material";
import { Job } from "@/app/types/jobTypes";
import Grid from "@mui/material/Grid2";
import BasicWorkCard from "./card"

interface ExpProps {
  workExp: Job[];
}

const WorkGrid: React.FC<ExpProps> = ({ workExp }) => {
  return (
    <Box sx={{ width: "100%", padding: 0, display: 'flex', justifyContent: 'center' }}>
      <Grid
        container
        rowSpacing={{ xs: 8, md: 1, lg: 5 }}
        columnSpacing={{ xs: 3, sm: 6, md: 8 }}
      >
        {workExp.map((work, index) => (
          <Grid key={index} >
            <BasicWorkCard
                job_title = {work.job_title} 
                company  = {work.company} 
                dates  = {work.dates}
                location = {work.location}
                functions = {work.functions}
                tech_stack = {work.tech_stack}
                logo = {work.logo_path}
              />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WorkGrid;
