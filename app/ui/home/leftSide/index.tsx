'use client';
import React from 'react';
import { Profile } from "@/app/types/profileType"

interface ProfileProps {
    profile: Profile;
}

const LeftSide : React.FC<ProfileProps> = ({ profile }) => {
    return (
        <div className="flex flex-grow">
            <div className="w-full">
                <div className="min-h-screen">
                    <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-4xl">
                        <h1 className="text-4xl font-bold text-center mb-6">{profile.name}</h1>
                            <p className="text-lg text-center">
                                {profile.description}
                            </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftSide;
