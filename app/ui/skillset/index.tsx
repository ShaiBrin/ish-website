import * as React from 'react';
import Image from 'next/image';
import { Typography } from '@mui/material';
import { Tech } from '@/app/types';

interface SkillInterface {
  prog: Tech[];  
  text: string;  
}

const Skillset: React.FC<SkillInterface> = ({ prog, text }) => {
  return (
    <div>
      <Typography
        variant="h4"
        gutterBottom
        className="font-semibold text-2xl text-gray-800 italic mb-6 text-center underline"
      >
        {text} 
      </Typography>
      <div className="custom-grid">
        {prog.map((tech, index) => (
          <div key={index} className="flex flex-col items-center group">
            <Image
              className="w-10 h-10 object-contain transition-transform duration-300 transform group-hover:scale-110"
              src={tech.image}
              alt={`${tech.tech} logo`}
              width={700}
              height={700}
              style={{ borderRadius: '50%' }}
            />
            <span className="mt-2 text-sm">{tech.tech}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skillset;
