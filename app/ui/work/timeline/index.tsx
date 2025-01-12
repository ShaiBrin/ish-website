import * as React from 'react';
import { Timeline, TimelineItem, TimelineOppositeContent, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';

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
        <TimelineItem 
        key={index} 
        sx={{
          m: 'auto 0',
          pr: index === 0 ? 4.9 : 0,
          '@media (min-width: 1418px)': {
            pr: index === 0 ? '349px' : 0,
          },
        }}
      
      >
            <TimelineOppositeContent key ={index}
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="text.secondary"
          >
            <Typography>{job.functions}</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
              <TimelineDot className="timeline-dot">
                <Image 
                  src={job.logo_path} 
                  alt={`${job.company} logo`} 
                  width={700} 
                  height={700} 
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