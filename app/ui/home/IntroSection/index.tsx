'use client';
import React from 'react';
import { Profile } from "@/app/types/profileType";
import HighlightText from '@/app/functions/highlights';


interface ProfileProps {
  profile: Profile;
}

const introSideTerms = ['Software', 'Engineer', 'Test', 'iOS', 'Android', 'DevOps', 'Developer', 'Jupyter', 'Tensorflow'];

const IntroSide: React.FC<ProfileProps> = ({ profile }) => {
  return (
    <div className="flex flex-grow">
      <div className="w-full">
        <div className="mb-8 bg-white rounded-xl w-full max-w-4xl">
          <h1 className="text-4xl font-bold text-center sm:mb-4">
            {profile.name}
          </h1>
          <p className="text-lg text-center">
            <HighlightText text={profile.description} highlightTerms={introSideTerms} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntroSide;
