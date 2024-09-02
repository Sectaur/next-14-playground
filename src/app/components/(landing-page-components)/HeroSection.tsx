import React from "react";
import { Button } from "@/components/ui/button";
import MuxPlayer from "@mux/mux-player-react";
import { useRouter } from 'next/navigation';

interface HeroSectionProps {
  title: string;
  description: string;
  ctaText: string;
  backgroundImage: string;
  videoPlaybackId: string;
  onCtaClick: () => void; // Add this line
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  title, 
  description, 
  ctaText, 
  backgroundImage, 
  videoPlaybackId,
  onCtaClick // Add this line
}) => {
  return (
    <section
      className="bg-[#272727] bg-cover bg-center relative w-full min-h-[50vh] transition-all duration-500 ease-in-out"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 flex flex-col md:flex-row items-center justify-center relative z-10 h-full w-full max-w-none">
        <div className="w-full md:w-1/2 lg:w-2/5 mb-6 md:mb-0 md:pr-8">
          <div className="bg-[#272727] bg-opacity-75 p-4 md:p-6 rounded-lg">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">{title}</h2>
            <p className="text-base md:text-lg mb-4 md:mb-6 text-white font-semibold">{description}</p>
            <Button 
              className="bg-[#23AAC9] text-[#272727] hover:bg-[#272727] hover:text-[#23AAC9] rounded-full transition-colors duration-300 px-6 py-2 text-sm md:text-base"
              onClick={onCtaClick} // Add this line
            >
              {ctaText}
            </Button>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-3/5 max-w-2xl">
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