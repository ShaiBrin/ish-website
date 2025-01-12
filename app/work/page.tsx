import React from "react";
import WorkExpTimeline from "../ui/work/timeline";
import jobData from "../../data/jobData.json"
import { Job } from "../types/jobTypes";

export default function Work() {
  return (
    <div >
      <WorkExpTimeline jobData={jobData as Job[]} />
    </div>
  );
}