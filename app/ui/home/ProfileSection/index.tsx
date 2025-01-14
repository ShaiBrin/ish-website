'use client';
import React from 'react';
import Image from 'next/image';

const ProfileSide = () => {
    return (
        <div className="flex flex-grow">
            <Image 
                  src={'/profile.jpeg'}
                  alt={'profile'}
                  width={600} 
                  height={100} 
                  className="square-full duration-300 opacity-100"
                />
        </div>
    );
};

export default ProfileSide;