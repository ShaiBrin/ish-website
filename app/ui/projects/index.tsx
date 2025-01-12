'use client';
import React from 'react';
import ProjectsGrid from './projectsList/projectCards';
import projectData from "../../../data/projectData.json"
import { Project } from '../../types/projectTypes'

const ProjectsList = () => {
    return (
        <div className="flex flex-grow">
            <div>
            <ProjectsGrid projects={projectData as Project[]}/>
            </div>
        </div>
    );
};

ProjectsList.displayName = 'RightSide';

export default ProjectsList;

