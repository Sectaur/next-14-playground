"use client";

import React from 'react';
import { useParams, useRouter } from 'next/navigation';

const VideoPage: React.FC = () => {
  const params = useParams();
  const router = useRouter();
  const { id } = params;

  const handleHomeClick = () => {
    router.push('/videos');
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#070707] text-white">
      <h1 className="text-4xl font-bold mb-4">Video Page</h1>
      <p className="text-2xl mb-6">Video ID: {id}</p>
      <button
        onClick={handleHomeClick}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Home
      </button>
    </div>
  );
};

export default VideoPage;