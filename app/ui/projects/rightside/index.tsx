'use client';
import React from 'react';
import ProjectsGrid from './projectsList/projects';
import projectData from "../../../../data/projectData.json"
import { Project } from '../../../types/projectTypes'

const RightSide = () => {
    return (
        <div className="flex flex-grow">
            <div>
            <ProjectsGrid projects={projectData as Project[]}/>
            </div>
        </div>
    );
};

RightSide.displayName = 'RightSide';

export default RightSide;

