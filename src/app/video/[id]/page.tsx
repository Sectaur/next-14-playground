"use client";

import React from 'react';
import { useParams } from 'next/navigation';

const VideoPage: React.FC = () => {
  const params = useParams();
  const { id } = params;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#070707] text-white">
      <h1 className="text-4xl font-bold mb-4">Video Page</h1>
      <p className="text-2xl">Video ID: {id}</p>
    </div>
  );
};

export default VideoPage;