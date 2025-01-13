import * as React from 'react';
import Stack from '@mui/material/Stack';
import Image from 'next/image';
import { Typography } from '@mui/material';
import { Tech } from '@/app/types/progTypes';


interface SkillInterface {
  prog: Tech[];
  text: string
}
const SkillSet: React.FC<SkillInterface> = ({ prog, text }) => {

    return (

      <div>
        <Typography 
          variant="h4" 
          gutterBottom
          className="font-semibold text-2xl text-gray-800 italic mb-6 text-center md:text-left"
        >
          {text}
      </Typography>
        <div>
        <Stack
            direction={{ xs: 'row', sm: 'row', md: 'row' }}
            spacing={{ xs: 2, sm: 2, md: 4 }}
            justifyContent={{ xs: 'center', sm: 'start', md: 'start' }} // Centers on small screens
            >
            {prog.map((tech, index) => (
                <div key={index} className="flex flex-col items-center group">
                <Image
                    className="w-10 h-10 object-contain transition-transform duration-300 transform group-hover:scale-110"
                    src={tech.image}
                    alt={`${tech.name} logo`}
                    width={700}
                    height={700}
                    style={{ borderRadius: '50%' }}
                />
                <span className="mt-2 text-sm">{tech.name}</span>
                </div>
            ))}
            </Stack>
        </div>
      </div>
    );
}
export default SkillSet;