import * as React from 'react';
import { Timeline, TimelineItem, TimelineOppositeContent, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';

import Typography from '@mui/material/Typography';
import { Job } from '@/app/types/jobTypes';
import Image from 'next/image';
import Link from 'next/link';

interface WorkExpTimelineProps {
  jobData: Job[]; 
}

const WorkExpTimeline: React.FC<WorkExpTimelineProps> = ({ jobData }) => {
  return (
    <Timeline position="left">
      {jobData.map((job, index) => (
        
        <TimelineItem 
        key={index} 
        sx={{
          m: 'auto 0',
          pr: index === 0 ? 4.9 : 0,
          '@media (min-width: 1418px)': {
            pl: index === 0 ? '368px' : 0,
          },
        }}
      
      >
            <TimelineOppositeContent key ={index}
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="text.secondary"
          >
           {job.functions.map((desc, index) => (
            <Typography key={index}>
              • {desc}
            </Typography>
          ))}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
                <TimelineDot className="timeline-dot">
                <Link href={job.link} passHref  target="_blank">
                  <Image 
                    src={job.logo_path} 
                    alt={`${job.company} logo`} 
                    width={700} 
                    height={700} 
                    className="timeline-dot-img"
                  />
                  </Link>
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