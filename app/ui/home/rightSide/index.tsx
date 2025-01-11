'use client';
import React from 'react';
import Image from 'next/image';

const RightSide = () => {
    return (
        <div className="flex flex-grow">
            <Image 
                  src={'/profile.jpeg'}
                  alt={'profile'}
                  width={600} 
                  height={100} 
                  className="square-full shadow-lg transition-transform duration-300 opacity-100"

                />
        </div>
    );
};

export default RightSide;