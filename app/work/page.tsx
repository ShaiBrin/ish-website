import React from "react";
import WorkExpTimeline from "../ui/work/timeline";
import jobData from "../../data/jobData.json"
import { Job } from "../types/jobTypes";
import WorkGrid from "../ui/work/mobile/workCard";


export default function Work() {
  return (
    <div >
      <div className="block md:hidden">
        <div className="flex flex-grow pr-20 pl-20">
          <WorkGrid workExp={jobData as Job[]} />
        </div>
      </div>
      <div className="hidden md:block">
        <WorkExpTimeline jobData={jobData as Job[]} />
      </div>
    </div>
  );
}