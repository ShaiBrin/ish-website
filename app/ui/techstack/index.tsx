import * as React from 'react';
import { Tech } from '@/app/types/';
import progData from "../../../data/progData.json";
import Skillset from '../skillset';

const Techstack = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-8 pt-4">
      {progData.map((category, index) => (
        <div key={index} className="flex flex-col">
          <Skillset prog={category.items as Tech[]} text={category.name}/>
        </div>
      ))}
    </div>
  );
};

export default Techstack;
