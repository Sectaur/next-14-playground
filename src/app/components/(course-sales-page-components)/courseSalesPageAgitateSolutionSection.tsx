import React from 'react';
import { Button } from "@/components/ui/button";
import MuxPlayer from '@mux/mux-player-react';

interface AgitateSolutionSectionProps {
  videoPlaybackId: string;
  title: string;
  paragraphs: string[];
  buttonText: string;
  buttonAction: () => void;
  registrationText: string;
}

const CourseSalesPageAgitateSolutionSection: React.FC<AgitateSolutionSectionProps> = ({
  videoPlaybackId,
  title,
  paragraphs,
  buttonText,
  buttonAction,
  registrationText
}) => {
  return (
    <section className="bg-[#272727] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <div className="aspect-w-16 aspect-h-9 rounded-lg shadow-lg overflow-hidden">
            <MuxPlayer
              streamType="on-demand"
              playbackId={videoPlaybackId}
              metadata={{
                video_id: "video-id-123456",
                video_title: "Ultrasound Demonstration",
                viewer_user_id: "user-id-abc123"
              }}
            />
          </div>
        </div>
        <div className="md:w-1/2 md:pl-12">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="mb-4" dangerouslySetInnerHTML={{ __html: paragraph }} />
          ))}
          <Button className="bg-[#23AAC9] hover:bg-[#1D8BA3] text-white hover:text-white rounded-full" onClick={buttonAction}>{buttonText}</Button>
          <p className="text-sm mt-2">{registrationText}</p>
        </div>
      </div>
    </section>
  );
};

export default CourseSalesPageAgitateSolutionSection;