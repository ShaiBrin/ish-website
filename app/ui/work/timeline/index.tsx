import React from 'react';
import { Timeline, TimelineItem, TimelineOppositeContent, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import Typography from '@mui/material/Typography';
import { Job } from '@/app/types/jobTypes';
import Image from 'next/image';
import Link from 'next/link';
import HighlightText from '@/app/functions/highlights';

interface WorkExpTimelineProps {
  jobData: Job[];
}

const workExpTerms = ['Gatsby', 'Typescript', 'Kotlin', 'SQL', 'GraphQL', 'Hubspot API', 'Python', 'TDD', 'Pytest', 'AWS', 'Swift', 'Agile', 'CI/CD', 'PowerShell', 'X++', 'OWASP', 'DAO', 'API'];

const WorkExpTimeline: React.FC<WorkExpTimelineProps> = ({ jobData }) => {
  return (
    <Timeline position="alternate">
      {jobData.map((job, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2" color="text.secondary">
            {job.functions.map((desc, index) => (
              <Typography key={index}>
                • <HighlightText text={desc} highlightTerms={workExpTerms} />
              </Typography>
            ))}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot className="timeline-dot">
              <Link href={job.link} passHref target="_blank">
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
};

export default WorkExpTimeline;
