"use client";

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { User } from 'lucide-react';

// Define types for our data structures
interface HostData {
  name: string;
  qualifications: string;
  specialty: string;
  bio: string;
}

interface Benefit {
  title: string;
  description: string;
  image: string;
}

interface WebinarData {
  title: string;
  description: string;
  benefits: Benefit[];
}

interface FormData {
  fullName: string;
  country: string;
  occupation: string;
}

// Define props for the component
interface WebinarLandingPageProps {
  email?: string;
  webinarDate: string;
  backgroundImageUrl: string;
}

const WebinarLandingPage: React.FC<WebinarLandingPageProps> = ({ email, webinarDate, backgroundImageUrl }) => {
  const [isRegistered, setIsRegistered] = useState<boolean>(false);
  const [countdown, setCountdown] = useState<string>('');
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    country: '',
    occupation: '',
  });

  // Dummy data for Dr. Hament Pandya
  const hostData: HostData = {
    name: "Dr. Hament Pandya",
    qualifications: "MD, FRCR, FRANZCR",
    specialty: "Consultant Radiologist, Specializing in Head and Neck Imaging",
    bio: "Dr. Pandya is a renowned thoracic radiologist with over 15 years of experience. He is passionate about advancing radiological education and has authored numerous publications in the field."
  };

  // Dummy data for webinar details
  const webinarData: WebinarData = {
    title: "Advanced Techniques in Thoracic CT Interpretation",
    description: "Join us for an in-depth exploration of cutting-edge CT interpretation techniques in Head and Neck Imaging.",
    benefits: [
      {
        title: "Enhanced Diagnostic Accuracy",
        description: "Learn advanced techniques to improve your diagnostic accuracy in complex thoracic cases.",
        image: "/api/placeholder/400/300" // Replace with actual image path
      },
      {
        title: "Efficient Workflow Strategies",
        description: "Discover methods to streamline your radiology workflow without compromising on quality.",
        image: "/api/placeholder/400/300" // Replace with actual image path
      },
      {
        title: "Latest Research Insights",
        description: "Stay updated with the most recent developments and research in Head and Neck Imaging.",
        image: "/api/placeholder/400/300" // Replace with actual image path
      }
    ]
  };

  useEffect(() => {
    if (email) {
      setIsRegistered(true);
    }
  }, [email]);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date(webinarDate).getTime() - now;

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

  return (
    <div className="flex flex-col min-h-screen bg-[#272727] text-white font-inter">
      {/* Hero Section */}
      <div 
        className="relative h-[70vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-white text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{webinarData.title}</h1>
          <p className="text-xl mb-8">{webinarData.description}</p>
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

      {/* Host Details */}
      <div className="bg-[#393939] py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#23AAC9]">Meet Your Host</h2>
          <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8">
            <div className="w-32 h-32 bg-[#525252] rounded-full flex items-center justify-center mb-4 md:mb-0">
              <User size={64} className="text-[#23AAC9]" />
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
      <div className="bg-[#272727] py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#23AAC9]">What You'll Learn</h2>
          {webinarData.benefits.map((benefit, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center mb-16 last:mb-0`}>
              <div className="w-full md:w-1/2 mb-6 md:mb-0">
                <img src={benefit.image} alt={benefit.title} className="rounded-lg shadow-lg" />
              </div>
              <div className="w-full md:w-1/2 md:px-8">
                <h3 className="text-2xl font-semibold mb-4 text-[#23AAC9]">{benefit.title}</h3>
                <p className="text-lg">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Registration Form */}
      {!isRegistered ? (
        <div id="registration" className="bg-[#393939] py-16">
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
        <div className="bg-[#393939] py-16">
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

export default WebinarLandingPage;