'use client';
import React from 'react';
import { Profile } from "@/app/types/";
import HighlightText from '@/app/functions/highlights';

interface ProfileProps {
  profile: Profile;
}

const introSideTerms = ['AI','agent','open','ai','mission','critical','complex','problems','solving','Goal','Full','Stack','SEO','CI/CD','Software', 'Engineer', 'Test', 'iOS', 'Android', 'Amazon','DevOps', 'Developer', 'Jupyter', 'Tensorflow','Palantir', 'Foundry'];

const Introsection: React.FC<ProfileProps> = ({ profile }) => {
  return (
    <div className="flex flex-grow">
      <div className="w-full">
        <div className="mb-8 bg-white rounded-xl w-full max-w-4xl">
          <h1 className="text-4xl font-bold text-center">
            {profile.name}
          </h1>
          {profile.description.map((paragraph, index) => (
            <p key={index} className="text-lg text-left mb-4">
              <HighlightText text={paragraph} highlightTerms={introSideTerms} />
            </p>
          ))}
        </div>
      </div>
    </div>
  );
  
};

export default Introsection;
