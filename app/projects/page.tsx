'use client';
import React from 'react';
import ProjectsList from '../ui/projects';
import AnimatedPage from '../ui/animation';

export default function Projects(){
    return (
      <AnimatedPage>
      <div className="pr-20 pl-20">
        <ProjectsList />
      </div>
    </AnimatedPage>
    );
}