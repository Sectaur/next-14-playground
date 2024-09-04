import React from "react";
import { useRouter } from 'next/navigation';
import LandingPageTemplate from "../components/(landing-page-templates)/LandingPageTemplate";
import { Play } from "lucide-react";

const VideosLandingPageExample: React.FC = () => {
  const router = useRouter();

  const handleCtaClick = () => {
    router.push('/webinar');
  };

  return (
    <LandingPageTemplate
      headerLogo="/ResectaurLearningLogo.svg"
      heroSection={{
        title: "Master Radiology with Interactive Learning",
        description: "Join our upcoming webinar: 'Advanced Techniques in CT Interpretation'",
        ctaText: "Sign Up for Webinar",
        backgroundImage: "/neck-us.png",
        videoPlaybackId: "YOUR_MUX_PLAYBACK_ID",
      }}
      featuresTitle="Explore Interactive Videos"
      features={[
        {
          id: 1,
          icon: <Play size={24} />,
          title: "Learn about Neck Lumps",
          description: "Female aged 34 with right sided neck lump",
          imageSrc: "/mri-brain.png",
          action: () => router.push('/video/1'),
        },
        // ... other video features
      ]}
      ctaTitle="Ready to Enhance Your Radiology Skills?"
      ctaDescription="Join our Learning platform today and take your expertise to the next level."
      ctaButtonText="Get Started for Free"
      footerText="© 2024 Learning Platform. All rights reserved."
      onCtaClick={handleCtaClick}
    />
  );
};

export default VideosLandingPageExample;
