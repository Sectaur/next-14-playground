import React from "react";
import LandingPage from "./src/app/components/LandingPage";
import { Play, FileQuestion, Activity } from "lucide-react";

const ExamplePage: React.FC = () => {
  return (
    <LandingPage
      headerLogo="/ResectaurLearningLogo.svg"
      heroTitle="Master Radiology with Interactive Learning"
      heroDescription="Join our upcoming webinar: 'Advanced Techniques in CT Interpretation'"
      heroCtaText="Sign Up for Webinar"
      heroBackgroundImage="/neck-us.png"
      heroVideoPlaybackId="YOUR_MUX_PLAYBACK_ID"
      featuresTitle="Explore Our Features"
      features={[
        {
          icon: <Play size={24} />,
          title: "Interactive Videos",
          description: "Watch educational content alongside medical images for hands-on learning.",
          imageSrc: "/parotid.png",
        },
        {
          icon: <FileQuestion size={24} />,
          title: "Interactive Quizzes",
          description: "Test your knowledge with our comprehensive quiz system.",
          imageSrc: "/neck-us.png",
        },
        {
          icon: <Activity size={24} />,
          title: "TI-RADS Practice Cases",
          description: "Improve your skills with Thyroid Imaging Reporting and Data System cases.",
          imageSrc: "/parotid.png",
        },
      ]}
      ctaTitle="Ready to Enhance Your Radiology Skills?"
      ctaDescription="Join our Learning platform today and take your expertise to the next level."
      ctaButtonText="Get Started for Free"
      footerText="© 2024 Learning Platform. All rights reserved."
    />
  );
};

export default ExamplePage;