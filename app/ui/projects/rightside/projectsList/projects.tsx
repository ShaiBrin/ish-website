"use client";
import { Box } from "@mui/material";
import { Project } from "@/app/types/projectTypes";
import Grid from "@mui/material/Grid2";
import BasicCard from "./card"; 

interface ProjectsProps {
  projects: Project[];
}

const ProjectsGrid: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <Box sx={{ width: "100%", padding: 0, display: 'flex', justifyContent: 'center' }}>
      <Grid
        container
        rowSpacing={{ xs: 8, md: 1, lg: 5 }}
        columnSpacing={{ xs: 3, sm: 6, md: 2 }}
      >
        {projects.map((project, index) => (
          <Grid key={index} >
            <BasicCard
              title={project.name}
              subtitle="Project Subtitle" 
              description={project.description}
              logo={project.logo}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProjectsGrid;
