'use client';
import React from 'react';
import ProjectsGrid from './projectsList/projects';
import { Project } from '../../../types/projectTypes'
import projectData from "../../../../data/projectData.json"

const RightSide = React.memo(() => {

    return (
        <div className="flex flex-grow">
            <div>
            <ProjectsGrid projects={projectData as Project[]}/>
            </div>
        </div>
    );
});

RightSide.displayName = 'RightSide';

export default RightSide;

