import React from "react";
import Header from "../(landing-page-components)/Header";
import HeroSection from "../(landing-page-components)/HeroSection";
import FeaturesSection from "../(landing-page-components)/FeaturesSection";
import CTASection from "../(landing-page-components)/CTASection";
import Footer from "../(landing-page-components)/Footer";

interface HeroSectionProps {
  title: string;
  description: string;
  ctaText: string;
  backgroundImage: string;
  videoPlaybackId: string;
}

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  imageSrc: string;
  id: number;
  action?: () => void; // Add this line
}

interface LandingPageTemplateProps {
  headerLogo: string;
  heroSection: HeroSectionProps;
  featuresTitle: string;
  features: Feature[];
  ctaTitle: string;
  ctaDescription: string;
  ctaButtonText: string;
  footerText: string;
  showHeroSection?: boolean;
  onCtaClick: () => void; // Add this line
}

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  onCtaClick: () => void; // Changed from onClick to onCtaClick
}

const LandingPageTemplate: React.FC<LandingPageTemplateProps> = ({
  headerLogo,
  heroSection,
  featuresTitle,
  features,
  ctaTitle,
  ctaDescription,
  ctaButtonText,
  footerText,
  onCtaClick, // Add this line
  showHeroSection = true,
}) => {
  const handleCardClick = (id: number) => {
    const feature = features.find(f => f.id === id);
    if (feature?.action) {
      feature.action();
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#070707] text-white w-full">
      <Header logo={headerLogo} />
      {showHeroSection && <HeroSection {...heroSection} onCtaClick={onCtaClick} />}
      <div className="flex-grow w-full">
        <FeaturesSection title={featuresTitle} features={features} onCardClick={handleCardClick} />
        <CTASection
          title={ctaTitle}
          description={ctaDescription}
          buttonText={ctaButtonText}
          onCtaClick={onCtaClick} // Changed from onClick to onCtaClick
        />
      </div>
      <Footer text={footerText} />
    </div>
  );
};

export default LandingPageTemplate;
