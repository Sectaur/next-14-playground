import React from "react";
import LandingPageTemplate from "../components/(landing-page-templates)/LandingPageTemplate";
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

const VideosLandingPageExample: React.FC = () => {
  return (
    <LandingPageTemplate
      headerLogo="/ResectaurLearningLogo.svg"
      heroSection={{
        title: "Master Radiology with Interactive Learning",
        description:
          "Join our upcoming webinar: 'Advanced Techniques in CT Interpretation'",
        ctaText: "Sign Up for Webinar",
        backgroundImage: "/neck-us.png",
        videoPlaybackId: "YOUR_MUX_PLAYBACK_ID",
      }}
      featuresTitle="Explore Interactive Videos"
      features={[
        {
          icon: <Play size={24} />,
          title: "Learn about Neck Lumps",
          description:
            "Female aged 34 with right sided neck lump",
          imageSrc: "/mri-brain.png", // Changed from parotid.png
        },
        {
          icon: <Play size={24} />,
          title: "Thyroid Nodule Evaluation",
          description:
            "Male aged 45 with suspicious thyroid nodule",
          imageSrc: "/parotid.png",
        },
        {
          icon: <Play size={24} />,
          title: "Salivary Gland Tumors",
          description:
            "Female aged 52 with parotid gland mass",
          imageSrc: "/mri-brain.png", // Changed from parotid.png
        },
        {
          icon: <Play size={24} />,
          title: "Cervical Lymphadenopathy",
          description:
            "Male aged 28 with enlarged cervical lymph nodes",
          imageSrc: "/parotid.png",
        },
        {
          icon: <Play size={24} />,
          title: "Laryngeal Cancer Imaging",
          description:
            "Female aged 61 with hoarseness and suspected laryngeal lesion",
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

export default VideosLandingPageExample;
