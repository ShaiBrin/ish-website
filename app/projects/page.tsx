'use client';
import React from 'react';
import RightSide from '../ui/projects/rightside';
import LeftSide from '../ui/projects/leftside';

export default function ProjectsLayout(){

    return (
        <div className="flex flex-col h-screen">
            <div className="flex flex-grow">
                <div className={`flex-initial md:w-1/6 pt-10 pl-10 pr-5 hidden md:block`}>
                    <div className="w-full">
                        <LeftSide/>
                    </div>
                </div>
                <div className={`flex-initial md:w-5/6 pt-10 pr-10 pl-5`}>
                    <RightSide/>
                </div>
            </div>
        </div>
    );
}