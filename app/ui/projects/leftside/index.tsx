'use client';
import React from 'react';
import FilterList from './filterList/filterListComp';

const LeftSide = React.memo(() => {
    const filters = ["Filter 1", "Filter 2", "Filter 3", "Filter 4"];
    const handleFilterSelect = (filter: string) => {
        console.log("Selected Filter:", filter);
      };

    return (
        <div className="flex flex-grow">
            <div className="w-full">
            <FilterList filters={filters} onFilterSelect={handleFilterSelect}/>
            </div>
            
        </div>
    );
});

LeftSide.displayName = 'LeftSide';

export default LeftSide;
