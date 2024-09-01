import React from "react";
import { Button } from "@/components/ui/button";
import MuxPlayer from "@mux/mux-player-react";

interface HeroSectionProps {
  title: string;
  description: string;
  ctaText: string;
  backgroundImage: string;
  videoPlaybackId: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
  ctaText,
  backgroundImage,
  videoPlaybackId,
}) => {
  return (
    <section
      className="bg-[#272727] p-4 md:p-8 mb-12 bg-cover bg-center relative w-full"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
        <div className="max-w-lg mb-8 md:mb-0">
          <div className="bg-[#272727] bg-opacity-75 p-4 md:p-6 rounded-lg">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">{title}</h2>
            <p className="text-lg md:text-xl mb-6 text-white font-semibold">{description}</p>
            <Button className="bg-[#23AAC9] text-[#272727] hover:bg-[#272727] hover:text-[#23AAC9] rounded-full transition-colors duration-300 w-full md:w-auto">
              {ctaText}
            </Button>
          </div>
        </div>
        <div className="w-full md:w-1/3">
          <MuxPlayer
            streamType="on-demand"
            playbackId={videoPlaybackId}
            metadata={{ video_id: "video-id-12345" }}
            className="w-full aspect-video rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;