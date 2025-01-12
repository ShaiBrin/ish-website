'use client';
import React from 'react';
import ProjectsGrid from './projectsList/projectCards';
import projectData from "../../../data/projectData.json"
import { Project } from '../../types/projectTypes'

const Projects = () => {
    return (
        <div className="flex flex-grow">
            <div>
            <ProjectsGrid projects={projectData as Project[]}/>
            </div>
        </div>
    );
};

Projects.displayName = 'RightSide';

export default Projects;

