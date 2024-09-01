import React from 'react';
import WebinarLandingPageTemplate, { WebinarLandingPageProps } from '../components/(landing-page-templates)/WebinarLandingPageTemplate';

const WebinarExample: React.FC = () => {
  // Create a date 10 days from now at 2:00 PM UTC
  const futureDate = new Date();
  futureDate.setDate(futureDate.getDate() + 10);
  futureDate.setUTCHours(14, 0, 0, 0);
  
  const webinarProps: WebinarLandingPageProps = {
    email: undefined, // or user's email if logged in
    webinarDate: futureDate.getTime(), // Unix timestamp for the future date
    backgroundImageUrl: "/neck-us.png",
    hostData: {
      name: "Dr. Hament Pandya",
      qualifications: "MD, FRCR, FRANZCR",
      specialty: "Consultant Radiologist, Specializing in Thoracic Imaging",
      bio: "Dr. Pandya is a renowned thoracic radiologist with over 15 years of experience. He is passionate about advancing radiological education and has authored numerous publications in the field.",
      imageUrl: "/hp-photo.png"
    },
    webinarData: {
      title: "Advanced Techniques in Thoracic CT Interpretation",
      description: "Join us for an in-depth exploration of cutting-edge CT interpretation techniques in thoracic imaging.",
      benefits: [
        {
          title: "Enhanced Diagnostic Accuracy",
          description: "Learn advanced techniques to improve your diagnostic accuracy in complex thoracic cases.",
          image: "/parotid.png" // Replace with actual image path
        },
        {
          title: "Efficient Workflow Strategies",
          description: "Discover methods to streamline your radiology workflow without compromising on quality.",
          image: "/parotid.png" // Replace with actual image path
        },
        {
          title: "Latest Research Insights",
          description: "Stay updated with the most recent developments and research in thoracic imaging.",
          image: "/parotid.png" // Replace with actual image path
        }
      ]
    }
  };

  return <WebinarLandingPageTemplate {...webinarProps} />;
};

export default WebinarExample;