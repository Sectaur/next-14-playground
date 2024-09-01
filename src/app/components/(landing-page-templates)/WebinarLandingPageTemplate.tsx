import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { User } from 'lucide-react';
import MuxPlayer from "@mux/mux-player-react";

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

interface FormData {
  fullName: string;
  country: string;
  occupation: string;
}

export interface WebinarLandingPageProps {
  email?: string;
  webinarDate: number;
  backgroundImageUrl: string;
  hostData: HostData;
  webinarData: WebinarData;
}

const WebinarLandingPageTemplate: React.FC<WebinarLandingPageProps> = ({ 
  email, 
  webinarDate, 
  backgroundImageUrl, 
  hostData, 
  webinarData 
}) => {
  const [isRegistered, setIsRegistered] = useState<boolean>(false);
  const [countdown, setCountdown] = useState<string>('');
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    country: '',
    occupation: '',
  });

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    setIsRegistered(true);
  };

  const formatWebinarDate = (timestamp: number): string => {
    const date = new Date(timestamp);
    return date.toLocaleString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric', 
      hour: '2-digit', 
      minute: '2-digit',
      timeZoneName: 'short'
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#272727] text-white font-inter w-full">
      {/* Hero Section */}
      <div 
        className="relative h-[50vh] bg-cover bg-center flex items-center justify-center w-full"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <div className="bg-black bg-opacity-50 p-6 rounded-lg">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">{webinarData.title}</h1>
              <p className="text-lg md:text-xl mb-6">{webinarData.description}</p>
              {!isRegistered && (
                <Button 
                  size="lg" 
                  className="bg-[#23AAC9] hover:bg-[#1C89A2] text-white rounded-full px-8 py-3"
                  onClick={() => document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Register Now
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
      <div className="bg-[#393939] py-16 w-full">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#23AAC9]">Meet Your Host</h2>
          <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8">
            <div className="w-48 h-48 mb-4 md:mb-0">
              {hostData.imageUrl ? (
                <img 
                  src={hostData.imageUrl} 
                  alt={hostData.name} 
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                <div className="w-full h-full bg-[#525252] rounded-full flex items-center justify-center">
                  <User size={64} className="text-[#23AAC9]" />
                </div>
              )}
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-semibold">{hostData.name}</h3>
              <p className="text-lg text-[#23AAC9]">{hostData.qualifications}</p>
              <p className="text-lg text-[#838383]">{hostData.specialty}</p>
              <p className="mt-2 text-sm">{hostData.bio}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-[#272727] py-16 w-full">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#23AAC9]">What You'll Learn</h2>
          {webinarData.benefits.map((benefit, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center mb-16 last:mb-0`}>
              <div className="w-full md:w-1/3 mb-6 md:mb-0">
                <img src={benefit.image} alt={benefit.title} className="rounded-lg shadow-lg w-full max-w-[200px] mx-auto" />
              </div>
              <div className="w-full md:w-2/3 md:px-8">
                <h3 className="text-2xl font-semibold mb-4 text-[#23AAC9]">{benefit.title}</h3>
                <p className="text-lg">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Registration Form */}
      {!isRegistered ? (
        <div id="registration" className="bg-[#393939] py-16 w-full">
          <div className="max-w-md mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-[#23AAC9]">Register Now</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="fullName" className="text-white">Full Name</Label>
                <Input 
                  id="fullName" 
                  name="fullName" 
                  value={formData.fullName} 
                  onChange={handleInputChange} 
                  required 
                  className="bg-[#525252] border-none text-white"
                />
              </div>
              <div>
                <Label htmlFor="country" className="text-white">Country</Label>
                <Select 
                  name="country" 
                  onValueChange={(value) => setFormData(prev => ({ ...prev, country: value }))} 
                  required
                >
                  <SelectTrigger className="bg-[#525252] border-none text-white">
                    <SelectValue placeholder="Select your country" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#525252] text-white">
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="ca">Canada</SelectItem>
                    {/* Add more countries as needed */}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="occupation" className="text-white">Occupation</Label>
                <Input 
                  id="occupation" 
                  name="occupation" 
                  value={formData.occupation} 
                  onChange={handleInputChange} 
                  required 
                  className="bg-[#525252] border-none text-white"
                />
              </div>
              <Button type="submit" className="w-full bg-[#23AAC9] hover:bg-[#1C89A2] text-white rounded-full">Register</Button>
            </form>
          </div>
        </div>
      ) : (
        <div className="bg-[#393939] py-16 w-full">
          <div className="max-w-md mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4 text-[#23AAC9]">You're Registered!</h2>
            <p className="text-xl mb-4">Webinar starts in:</p>
            <div className="text-4xl font-bold mb-8 text-[#23AAC9]">{countdown}</div>
            {countdown === 'Webinar is live!' && (
              <Button size="lg" className="bg-[#23AAC9] hover:bg-[#1C89A2] text-white rounded-full px-8 py-3">Join Webinar</Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default WebinarLandingPageTemplate;