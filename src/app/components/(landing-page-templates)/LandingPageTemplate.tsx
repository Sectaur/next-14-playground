import React from "react";
import { useRouter } from 'next/navigation';
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

interface LandingPageTemplateProps {
  headerLogo: string;
  heroSection: HeroSectionProps;
  featuresTitle: string;
  features: Array<{
    icon: React.ReactNode;
    title: string;
    description: string;
    imageSrc: string;
  }>;
  ctaTitle: string;
  ctaDescription: string;
  ctaButtonText: string;
  footerText: string;
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
}) => {
  const router = useRouter();

  const handleCtaClick = () => {
    router.push('/webinar');
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#070707] text-white w-full">
      <Header logo={headerLogo} />
      <HeroSection {...heroSection} onCtaClick={handleCtaClick} />
      <div className="flex-grow w-full">
        <FeaturesSection title={featuresTitle} features={features} />
        <CTASection
          title={ctaTitle}
          description={ctaDescription}
          buttonText={ctaButtonText}
        />
      </div>
      <Footer text={footerText} />
    </div>
  );
};

export default LandingPageTemplate;
