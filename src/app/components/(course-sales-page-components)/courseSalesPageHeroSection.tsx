import React from 'react';
import { Button } from "@/components/ui/button";
import MuxPlayer from '@mux/mux-player-react';

interface HeroSectionProps {
  backgroundImage: string;
  subtitle: string;
  title: string;
  description: string;
  buttonText: string;
  buttonAction: () => void;
  registrationText: string;
  videoPlaybackId: string;
}

const CourseSalesPageHeroSection: React.FC<HeroSectionProps> = ({
  backgroundImage,
  subtitle,
  title,
  description,
  buttonText,
  buttonAction,
  registrationText,
  videoPlaybackId
}) => {
  return (
    <section className="relative bg-cover bg-center py-8 md:py-24 flex flex-col" style={{backgroundImage: `url(${backgroundImage})`}}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="container mx-auto relative z-10 flex-grow">
        <div className="flex flex-col md:flex-row items-center md:space-x-8">
          <div className="md:w-1/2 text-white px-4 md:pr-8 mb-8 md:mb-0 bg-black bg-opacity-60 rounded-lg p-6">
            <h6 className="text-sm uppercase tracking-wider mb-2">{subtitle}</h6>
            <h1 className="text-2xl md:text-5xl font-bold mb-2 md:mb-4">{title}</h1>
            <p className="text-base md:text-lg mb-4 md:mb-6">{description}</p>
            <Button className="bg-[#23AAC9] hover:bg-[#1D8BA3] text-white hover:text-white rounded-full" onClick={buttonAction}>{buttonText}</Button>
            <p className="text-xs mt-2">{registrationText}</p>
          </div>
          <div className="md:w-1/2">
            <div className="aspect-w-16 aspect-h-9">
              <MuxPlayer
                streamType="on-demand"
                playbackId={videoPlaybackId}
                metadata={{
                  video_id: "video-id-123456",
                  video_title: "Course Introduction Video",
                  viewer_user_id: "user-id-abc123"
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-10 text-center mt-2 md:hidden">
        <div className="w-16 h-16 mx-auto bg-white bg-opacity-20 rounded-full flex items-center justify-center animate-fadeIn">
          <svg className="w-10 h-10 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default CourseSalesPageHeroSection;