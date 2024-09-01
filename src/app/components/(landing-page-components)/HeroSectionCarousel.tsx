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

const HeroSectionCarousel: React.FC<HeroCarouselProps> = ({ heroSections }) => {
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
      className="bg-[#272727] bg-cover bg-center relative w-full min-h-[50vh] transition-all duration-500 ease-in-out"
      style={{ backgroundImage: `url(${currentHero.backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 py-6 md:py-8 flex flex-col md:flex-row items-center justify-between relative z-10 h-full gap-8">
        {" "}
        {/* Added gap-8 */}
        <div className="w-full md:w-2/5">
          {" "}
          {/* Reduced width from 1/2 to 2/5 */}
          <div className="bg-[#272727] bg-opacity-75 p-3 rounded-lg">
            {" "}
            {/* Reduced padding */}
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">
              {currentHero.title}
            </h2>{" "}
            {/* Reduced font sizes */}
            <p className="text-sm md:text-base mb-3 text-white font-semibold">
              {currentHero.description}
            </p>{" "}
            {/* Reduced font sizes and margin */}
            <Button className="bg-[#23AAC9] text-[#272727] hover:bg-[#272727] hover:text-[#23AAC9] rounded-full transition-colors duration-300 text-sm py-1 px-3">
              {" "}
              {/* Adjusted button size */}
              {currentHero.ctaText}
            </Button>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <MuxPlayer
            streamType="on-demand"
            playbackId={currentHero.videoPlaybackId}
            metadata={{
              video_id: `video-${currentIndex}`,
              video_title: currentHero.title,
            }}
            className="w-full aspect-video rounded-lg"
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

export default HeroSectionCarousel;
