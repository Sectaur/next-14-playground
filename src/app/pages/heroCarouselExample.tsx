import React from "react";
import LandingPageCarouselTemplate from "../components/(landing-page-templates)/LandingPageCarouselTemplate";
import {
  Play,
  FileQuestion,
  Activity,
  Book,
  Users,
  Award,
  BarChart,
  Zap,
  Headphones,
} from "lucide-react";



const HeroCarouselExample: React.FC = () => {
  return (
    <LandingPageCarouselTemplate
      headerLogo="/resectaur-learning-logo.svg"
      heroSections={{
        heroSections: [
          {
            title: "Master Radiology with Interactive Learning",
            description:
              "Join our upcoming webinar: 'Advanced Techniques in CT Interpretation'",
            ctaText: "Learn more",
            backgroundImage: "/neck-us.png",
            videoPlaybackId: "YOUR_MUX_PLAYBACK_ID_1",
          },
          {
            title: "Enhance Your MRI Interpretation Skills",
            description:
              "Explore our new course: 'MRI Mastery: From Basics to Advanced Applications'",
            ctaText: "Enroll Now",
            backgroundImage: "/mri-brain.png",
            videoPlaybackId: "YOUR_MUX_PLAYBACK_ID_2",
          },
        ]
      }}
      featuresTitle="Explore Our Features"
      features={[
        {
          icon: <Play size={24} />,
          title: "Case Tutorials",
          description:
            "Watch educational content alongside medical images for hands-on learning.",
          imageSrc: "/parotid.png",
        },
        {
          icon: <FileQuestion size={24} />,
          title: "Interactive Quizzes",
          description:
            "Test your knowledge with our comprehensive quiz system.",
          imageSrc: "/neck-us.png",
        },
        {
          icon: <Activity size={24} />,
          title: "TI-RADS Practice Cases",
          description:
            "Improve your skills with Thyroid Imaging Reporting and Data System cases.",
          imageSrc: "/parotid.png",
        },
        {
          icon: <Book size={24} />,
          title: "Comprehensive Library",
          description:
            "Access a vast collection of radiology resources and case studies.",
          imageSrc: "/parotid.png",
        },
        {
          icon: <Users size={24} />,
          title: "Community Forums",
          description:
            "Engage with peers and experts in our active discussion forums.",
          imageSrc: "/neck-us.png",
        },
        {
          icon: <Award size={24} />,
          title: "Certification Prep",
          description:
            "Prepare for radiology certifications with targeted study materials.",
          imageSrc: "/parotid.png",
        },
        {
          icon: <BarChart size={24} />,
          title: "Progress Tracking",
          description:
            "Monitor your learning progress with detailed analytics and insights.",
          imageSrc: "/neck-us.png",
        },
        {
          icon: <Zap size={24} />,
          title: "Live Webinars",
          description:
            "Participate in live webinars led by renowned radiology experts.",
          imageSrc: "/parotid.png",
        },
        {
          icon: <Headphones size={24} />,
          title: "Audio Lectures",
          description:
            "Listen to radiology lectures on-the-go for flexible learning.",
          imageSrc: "/neck-us.png",
        },
      ]}
      ctaTitle="Ready to Enhance Your Radiology Skills?"
      ctaDescription="Join our Learning platform today and take your expertise to the next level."
      ctaButtonText="Get Started for Free"
      footerText="© 2024 Resectaur. All rights reserved."
    />
  );
};

export default HeroCarouselExample;
