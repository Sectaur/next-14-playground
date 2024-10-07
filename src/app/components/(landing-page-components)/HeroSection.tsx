"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import MuxPlayer from "@mux/mux-player-react";

interface HeroSectionProps {
  title: string;
  description: string;
  ctaText: string;
  backgroundImage: string;
  videoPlaybackId: string;
  onCtaClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  title, 
  description, 
  ctaText, 
  backgroundImage, 
  videoPlaybackId,
  onCtaClick
}) => {
  return (
    <section
      className="bg-[#272727] bg-cover bg-center relative w-full min-h-[30vh] transition-all duration-500 ease-in-out"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 flex flex-col md:flex-row items-center justify-center relative z-10 h-full w-full max-w-none">
        <div className="w-full md:w-1/2 lg:w-2/5 mb-4 md:mb-0 md:pr-6">
          <div className="bg-[#272727] bg-opacity-75 p-3 md:p-4 rounded-lg">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-3">{title}</h2>
            <p className="text-sm md:text-base mb-3 md:mb-4 text-white font-semibold">{description}</p>
            <Button 
              className="bg-[#23AAC9] text-[#272727] hover:bg-[#272727] hover:text-[#23AAC9] rounded-full transition-colors duration-300 px-4 py-1 text-xs md:text-sm"
              onClick={onCtaClick}
            >
              {ctaText}
            </Button>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-3/5 max-w-xl">
          <MuxPlayer
            streamType="on-demand"
            playbackId={videoPlaybackId}
            metadata={{ video_id: `video-id-1` }}
            className="w-full aspect-video rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;