import React from "react";
import { useRouter } from 'next/navigation';
import LandingPageTemplate from "../components/(landing-page-templates)/LandingPageTemplate";
import { Play, FileQuestion, Activity, Book, Users, Award, BarChart, Zap, Headphones, Video } from "lucide-react";

const LandingPageExample: React.FC = () => {
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
        ctaText: "Learn More",
        backgroundImage: "/neck-us.png",
        videoPlaybackId: "YOUR_MUX_PLAYBACK_ID",
      }}
      featuresTitle="Explore Our Features"
      features={[
        {
          id: 1,
          icon: <Play size={24} />,
          title: "Interactive Videos",
          description: "Watch educational content alongside medical images for hands-on learning.",
          imageSrc: "/mri-brain.png",
          action: () => router.push('/videos'), // Direct to videosLandingPageExample
        },
        {
          id: 2,
          icon: <FileQuestion size={24} />,
          title: "Interactive Quizzes",
          description:
            "Test your knowledge with our comprehensive quiz system.",
          imageSrc: "/neck-us.png",
        },
        {
          id: 3,
          icon: <Award size={24} />,
          title: "TI-RADS Practice Cases",
          description:
            "Improve your skills with Thyroid Imaging Reporting and Data System cases.",
          imageSrc: "/parotid.png",
          action: () => router.push('/tiradsPractice'), // Direct to videosLandingPageExample
        },
        {
          id: 4,
          icon: <Video size={24} />,
          title: "Live Webinars",
          description: "Join our live webinars!",
          imageSrc: "/parotid.png",
          action: () => router.push('/webinar'), // Direct to videosLandingPageExample
        },
        {
          id: 5,
          icon: <Users size={24} />,
          title: "Community Forums",
          description:
            "Engage with peers and experts in our active discussion forums.",
          imageSrc: "/neck-us.png",
        },

        {
          id: 6,
          icon: <Book size={24} />,
          title: "Resources",
          description:
            "Access a library of resources including textbooks and research papers.",
          imageSrc: "/neck-us.png",
        },
      ]}
      ctaTitle="Ready to Enhance Your Radiology Skills?"
      ctaDescription="Join our Learning platform today and take your expertise to the next level."
      ctaButtonText="Get Started for Free"
      footerText="© 2024 Learning Platform. All rights reserved."
      onCtaClick={handleCtaClick}
    />
  );
};

export default LandingPageExample;
