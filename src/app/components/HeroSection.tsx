import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import MuxPlayer from "@mux/mux-player-react";

interface HeroSectionProps {
  title: string;
  description: string;
  ctaText: string;
  backgroundImage: string;
  videoPlaybackId: string;
}

interface HeroCarouselProps {
  heroSections: HeroSectionProps[];
}

const HeroSection: React.FC<HeroCarouselProps> = ({ heroSections }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroSections.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroSections.length]);

  const currentHero = heroSections[currentIndex];

  return (
    <section
      className="bg-[#272727] bg-cover bg-center relative w-full min-h-[70vh] transition-all duration-500 ease-in-out"
      style={{ backgroundImage: `url(${currentHero.backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 py-12 md:py-24 flex flex-col md:flex-row items-center justify-between relative z-10 h-full">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <div className="bg-[#272727] bg-opacity-75 p-6 rounded-lg">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">{currentHero.title}</h2>
            <p className="text-lg md:text-xl mb-6 text-white font-semibold">{currentHero.description}</p>
            <Button className="bg-[#23AAC9] text-[#272727] hover:bg-[#272727] hover:text-[#23AAC9] rounded-full transition-colors duration-300 px-8 py-3 text-lg">
              {currentHero.ctaText}
            </Button>
          </div>
        </div>
        <div className="w-full md:w-1/2 max-w-2xl">
          <MuxPlayer
            streamType="on-demand"
            playbackId={currentHero.videoPlaybackId}
            metadata={{ video_id: `video-id-${currentIndex}` }}
            className="w-full aspect-video rounded-lg shadow-lg"
          />
        </div>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroSections.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-[#23AAC9]" : "bg-white bg-opacity-50"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;