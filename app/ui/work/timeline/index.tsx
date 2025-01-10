import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import { Job } from '@/app/types/jobTypes';
import Image from 'next/image';

interface WorkExpTimelineProps {
  jobData: Job[]; 
}

const WorkExpTimeline: React.FC<WorkExpTimelineProps> = ({ jobData }) => {
  return (
    <Timeline position="alternate">
      {jobData.map((job, index) => (
        <TimelineItem key={index}>
          <TimelineSeparator>
            <TimelineConnector />
              <TimelineDot className="timeline-dot">
                <Image 
                  src={job.logo_path} 
                  alt={`${job.company} logo`} 
                  width={70} 
                  height={70} 
                  className="timeline-dot-img"
                />
              </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ px: 2 }}>
            <Typography variant="h6" component="span">
              {job.job_title}
            </Typography>
            <Typography>{job.company}</Typography>
            <Typography variant="body2">{job.dates}</Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}

export default WorkExpTimeline;