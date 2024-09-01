import React from "react";
import Header from "./(landing-page-components)/Header";
import HeroSectionCarousel from "./(landing-page-components)/HeroSectionCarousel";
import FeaturesSection from "./(landing-page-components)/FeaturesSection";
import CTASection from "./(landing-page-components)/CTASection";
import Footer from "./(landing-page-components)/Footer";

interface HeroSectionProps {
  title: string;
  description: string;
  ctaText: string;
  backgroundImage: string;
  videoPlaybackId: string;
}

interface HeroCarouselProps {
  heroSections: HeroSectionProps[];
}

interface LandingPageCarouselProps {
  headerLogo: string;
  heroSections: HeroCarouselProps;
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

const LandingPageCarouselTemplate: React.FC<LandingPageCarouselProps> = ({
  headerLogo,
  heroSections,
  featuresTitle,
  features,
  ctaTitle,
  ctaDescription,
  ctaButtonText,
  footerText,
}) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#070707] text-white w-full">
      <Header logo={headerLogo} />
      <HeroSectionCarousel {...heroSections} />
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

export default LandingPageCarouselTemplate;
