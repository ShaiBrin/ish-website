import * as React from 'react';
import { Tech } from '@/app/types/progTypes';
import SkillSet from './stack';
import prog from "../../../../data/progData.json"
import tools from "../../../../data/toolsData.json"
import frameworks from "../../../../data/frameworksData.json"
import database from "../../../../data/databaseData.json"

const ResponsiveStack = () => {

  const skillSets = [
    { data: prog, label: "Languages" },
    { data: frameworks, label: "Frameworks & Libraries" },
    { data: database, label: "Database" },
    { data: tools, label: "Tools" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-8 pt-4">
      {skillSets.map((skill, index) => (
        <div key={index} className="flex flex-col">
          <SkillSet prog={skill.data as Tech[]} text={skill.label} />
        </div>
      ))}
    </div>
  );
}
export default ResponsiveStack;