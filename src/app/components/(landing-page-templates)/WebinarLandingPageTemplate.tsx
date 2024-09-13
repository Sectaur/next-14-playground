import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { User } from 'lucide-react';
import MuxPlayer from "@mux/mux-player-react";
import Header from "../(landing-page-components)/Header";
import EventDateModal from '../(landing-page-components)/EventDateModal';

export interface HostData {
  name: string;
  qualifications: string;
  specialty: string;
  bio: string;
  imageUrl?: string; // Add this line
}

export interface Benefit {
  title: string;
  description: string;
  image: string;
}

export interface WebinarData {
  title: string;
  description: string;
  benefits: Benefit[];
}

export interface WebinarLandingPageProps {
  email?: string;
  webinarDate: number;
  backgroundImageUrl: string;
  hostData: HostData;
  webinarData: WebinarData;
  headerLogo: string; // Add this line
  registrationForm: {
    fields: Array<{
      name: string;
      label: string;
      type: string;
      required: boolean;
    }>;
  };
}

const WebinarLandingPageTemplate: React.FC<WebinarLandingPageProps> = ({ 
  email, 
  webinarDate, 
  backgroundImageUrl, 
  hostData, 
  webinarData,
  headerLogo,
}) => {
  const [isRegistered, setIsRegistered] = useState<boolean>(false);
  const [countdown, setCountdown] = useState<string>('');
  const [isDateModalOpen, setIsDateModalOpen] = useState(false);

  useEffect(() => {
    if (email) {
      setIsRegistered(true);
    }
  }, [email]);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = Date.now();
      const distance = webinarDate - now;

      if (distance < 0) {
        clearInterval(timer);
        setCountdown('Webinar is live!');
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [webinarDate]);

  const handleRegisterClick = () => {
    setIsDateModalOpen(true);
  };

  const handleDateSelect = (selectedDate: number) => {
    setIsDateModalOpen(false);
    // Log the selected date
    console.log('Selected event date:', new Date(selectedDate).toLocaleString());
    // Update webinarDate with the selected date
    webinarDate = selectedDate;
    setIsRegistered(true);
  };

  // Add this mock data for event dates
  const mockEventDates = [
    new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).getTime(), // 7 days from now
    new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).getTime() // 14 days from now
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#272727] text-white font-inter w-full">
      <Header logo={headerLogo} /> 
      <div 
        className="relative h-[50vh] bg-cover bg-center flex items-center justify-center w-full"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <div className="bg-black bg-opacity-70 p-6 rounded-lg backdrop-blur-sm">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">{webinarData.title}</h1>
              <p className="text-lg md:text-xl mb-6">{webinarData.description}</p>
              {isRegistered ? (
                <>
                  <p className="text-xl mb-2">You're registered ! Webinar starts in:</p>
                  <div className="text-3xl font-bold mb-4 text-[#23AAC9]">{countdown}</div>
                  {countdown === 'Webinar is live!' && (
                    <Button 
                      size="lg" 
                      className="bg-[#23AAC9] hover:bg-[#1C89A2] text-white rounded-full px-8 py-3"
                    >
                      Join Webinar
                    </Button>
                  )}
                </>
              ) : (
                <Button 
                  size="lg" 
                  className="bg-[#23AAC9] hover:bg-[#1C89A2] text-white rounded-full px-8 py-3"
                  onClick={handleRegisterClick}
                >
                  Select Event Date
                </Button>
              )}
            </div>
          </div>
          <div className="w-full md:w-1/2 max-w-lg">
            <MuxPlayer
              streamType="on-demand"
              playbackId="YOUR_MUX_PLAYBACK_ID"
              metadata={{
                video_id: "video-id-1234",
                video_title: "Webinar Promo",
                viewer_user_id: "user-id-abc123",
              }}
              className="w-full aspect-video rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Host Details */}
      <div className="bg-[#F5F5F5] py-16 w-full">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#23AAC9]">Meet Your Host</h2>
          <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8">
            <div className="w-48 h-48 mb-4 md:mb-0 rounded-full overflow-hidden flex-shrink-0">
              {hostData.imageUrl ? (
                <img 
                  src={hostData.imageUrl} 
                  alt={hostData.name} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-[#E0E0E0] flex items-center justify-center">
                  <User size={64} className="text-[#23AAC9]" />
                </div>
              )}
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-semibold text-[#1A1A1A]">{hostData.name}</h3>
              <p className="text-lg text-[#1A1A1A]">{hostData.qualifications}</p>
              <p className="text-lg text-[#4A4A4A]">{hostData.specialty}</p>
              <p className="mt-2 text-sm text-[#1A1A1A]">{hostData.bio}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-[#272727] py-16 w-full">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">What You'll Learn</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {webinarData.benefits.map((benefit, index) => (
              <div key={index} className="bg-[#393939] rounded-lg p-6 transform transition-all hover:scale-105">
                <img src={benefit.image} alt={benefit.title} className="w-full h-40 object-cover rounded-lg mb-4" />
                <h3 className="text-2xl font-semibold mb-2 text-[#23AAC9]">{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Registration Form */}
      {!isRegistered ? (
        <div className="bg-[#F5F5F5] py-16 w-full">
          <div className="max-w-md mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8 text-[#23AAC9]">Register Now</h2>
            <Button 
              size="lg" 
              className="bg-[#23AAC9] hover:bg-[#1C89A2] text-white rounded-full px-8 py-3"
              onClick={handleRegisterClick}
            >
              Select Event Date
            </Button>
          </div>
        </div>
      ) : (
        <div className="bg-[#F5F5F5] py-16 w-full">
          <div className="max-w-md mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4 text-[#23AAC9]">You're Registered!</h2>
            <p className="text-xl mb-4 text-[#1A1A1A]">Webinar starts in:</p>
            <div className="text-4xl font-bold mb-8 text-[#23AAC9]">{countdown}</div>
            {countdown === 'Webinar is live!' && (
              <Button size="lg" className="bg-[#23AAC9] hover:bg-[#1C89A2] text-white rounded-full px-8 py-3">Join Webinar</Button>
            )}
          </div>
        </div>
      )}

      <EventDateModal
        isOpen={isDateModalOpen}
        onClose={() => setIsDateModalOpen(false)}
        onDateSelect={handleDateSelect}
        dates={mockEventDates}
      />
    </div>
  );
};

export default WebinarLandingPageTemplate;