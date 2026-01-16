import React from 'react';
import Typography from '@mui/material/Typography';
import { Job } from '@/app/types';
import Image from 'next/image';
import HighlightText from '@/app/functions/highlights';
import Link from "next/link";

interface WorkExpTimelineProps {
  jobData: Job[];
}

const workExpTerms = ['Gatsby', 'Typescript', 'Kotlin', 'SQL', 'GraphQL', 'Hubspot API', 'Python', 'TDD', 'Pytest', 'AWS', 'Swift', 'Agile', 'CI/CD', 'PowerShell', 'X++', 'OWASP', 'DAO', 'API'];

const WorkExpTimeline: React.FC<WorkExpTimelineProps> = ({ jobData }) => {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-300 dark:bg-gray-700"></div>
      
      <div className="space-y-12">
        {jobData.map((job, index) => {
          const isEven = index % 2 === 0;
          return (
            <div key={index} className="relative flex items-center">
              {/* Content - alternates left and right */}
              <div className={`w-1/2 ${isEven ? 'pr-8 text-right' : 'ml-auto pl-8 text-left'}`}>
                <div className="mb-4">
                  {isEven ? (
                    <div className="space-y-1">
                      {job.functions.map((desc, idx) => (
                        <Typography key={idx} variant="body2" className="text-gray-600 dark:text-gray-400 text-left pl-8">
                          • <HighlightText text={desc} highlightTerms={workExpTerms} />
                        </Typography>
                      ))}
                    </div>
                  ) : (
                    <div>
                      <Typography variant="h6" component="span" className="font-semibold">
                        {job.job_title}
                      </Typography>
                      <Typography className="text-gray-700 dark:text-gray-300">{job.company}</Typography>
                      <Typography variant="body2" className="text-gray-500 dark:text-gray-400">{job.dates}</Typography>
                    </div>
                  )}
                </div>
              </div>

              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                <div className="w-16 h-16 rounded-full bg-white  flex items-center justify-center shadow-lg timeline-dot">
                  <Link href={job.link} passHref target="_blank" className="block">
                    <Image
                      src={job.logo_path}
                      alt={`${job.company} logo`}
                      width={48}
                      height={48}
                      className="timeline-dot-img rounded-full object-contain"
                    />
                  </Link>
                </div>
              </div>

              {/* Content - alternates left and right */}
              <div className={`w-1/2 ${isEven ? 'ml-auto pl-8 text-left' : 'pr-8 text-right'}`}>
                <div className="mb-4">
                  {isEven ? (
                    <div>
                      <Typography variant="h6" component="span" className="font-semibold">
                        {job.job_title}
                      </Typography>
                      <Typography className="text-gray-700 dark:text-gray-300">{job.company}</Typography>
                      <Typography variant="body2" className="text-gray-500 dark:text-gray-400">{job.dates}</Typography>
                    </div>
                  ) : (
                    <div className="space-y-1">
                      {job.functions.map((desc, idx) => (
                        <Typography key={idx} variant="body2" className="text-gray-600 dark:text-gray-400">
                          • <HighlightText text={desc} highlightTerms={workExpTerms} />
                        </Typography>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkExpTimeline;
