import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import CTASection from "./CTASection";
import Footer from "./Footer";

interface LandingPageProps {
  headerLogo: string;
  heroTitle: string;
  heroDescription: string;
  heroCtaText: string;
  heroBackgroundImage: string;
  heroVideoPlaybackId: string;
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

const LandingPage: React.FC<LandingPageProps> = ({
  headerLogo,
  heroTitle,
  heroDescription,
  heroCtaText,
  heroBackgroundImage,
  heroVideoPlaybackId,
  featuresTitle,
  features,
  ctaTitle,
  ctaDescription,
  ctaButtonText,
  footerText,
}) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#070707] text-white">
      <Header logo={headerLogo} />
      <main className="flex-grow">
        <HeroSection
          title={heroTitle}
          description={heroDescription}
          ctaText={heroCtaText}
          backgroundImage={heroBackgroundImage}
          videoPlaybackId={heroVideoPlaybackId}
        />
        <FeaturesSection title={featuresTitle} features={features} />
        <CTASection
          title={ctaTitle}
          description={ctaDescription}
          buttonText={ctaButtonText}
        />
      </main>
      <Footer text={footerText} />
    </div>
  );
};

export default LandingPage;