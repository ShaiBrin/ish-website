import React, { useState } from "react";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

interface FilterListProps {
  filters: string[];
  onFilterSelect: (filter: string) => void;
}

const FilterList: React.FC<FilterListProps> = ({ filters, onFilterSelect }) => {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  const handleFilterClick = (filter: string) => {
    setSelectedFilter(filter);
    onFilterSelect(filter);
  };

  return (
    <Grid container spacing={2}>
      {filters.map((filter, index) => (
        <Grid key={index} size={6} >
          <Box
            p={2}
            sx={{
              border: "2px solid",
              borderColor: selectedFilter === filter ? "#007bff" : "#ccc",
              borderRadius: "10px",
              cursor: "pointer",
              backgroundColor: selectedFilter === filter ? "#e7f3ff" : "#fff",
              textAlign: "center",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                backgroundColor: "#f5f5f5",
              },
            }}
            onClick={() => handleFilterClick(filter)}
          >
            <Typography variant="body1" color="textPrimary">
              {filter}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default FilterList;
