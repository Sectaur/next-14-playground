import React from 'react';
import Header from '../(landing-page-components)/Header';
import Footer from '../(landing-page-components)/Footer';
import HeroSection from '../(course-sales-page-components)/courseSalesPageHeroSection';
import KeyBenefitsSection from '../(course-sales-page-components)/courseSalesPageBenefitsSection';
import AgitateSolutionSection from '../(course-sales-page-components)/courseSalesPageAgitateSolutionSection';
import CourseCurriculumSection from '../(course-sales-page-components)/courseSalesPageCurriculumSection';
import CMECPDSection from '../(course-sales-page-components)/courseSalesPageCMESection';
import InstructorBioSection from '../(course-sales-page-components)/courseSalesPageInstructorBioSection';
import TestimonialsSection from '../(course-sales-page-components)/courseSalesPageTestimonials';
import CallToActionSection from '../(course-sales-page-components)/courseSalesPageFinalCTA';

interface CourseTemplateProps {
  headerLogo: string;
  heroProps: React.ComponentProps<typeof HeroSection>;
  keyBenefitsProps: React.ComponentProps<typeof KeyBenefitsSection>;
  agitateSolutionProps: React.ComponentProps<typeof AgitateSolutionSection>;
  courseCurriculumProps: React.ComponentProps<typeof CourseCurriculumSection>;
  cmeCpdProps: React.ComponentProps<typeof CMECPDSection>;
  instructorBioProps: React.ComponentProps<typeof InstructorBioSection>;
  testimonialsProps: React.ComponentProps<typeof TestimonialsSection>;
  callToActionProps: React.ComponentProps<typeof CallToActionSection>;
  footerText: string;
}

const CourseTemplate: React.FC<CourseTemplateProps> = ({
  headerLogo,
  heroProps,
  keyBenefitsProps,
  agitateSolutionProps,
  courseCurriculumProps,
  cmeCpdProps,
  instructorBioProps,
  testimonialsProps,
  callToActionProps,
  footerText
}) => {
  return (
    <div className="font-inter text-[#393939] w-full">
      <Header logo={headerLogo} />
      <HeroSection {...heroProps} />
      <KeyBenefitsSection {...keyBenefitsProps} />
      <AgitateSolutionSection {...agitateSolutionProps} />
      <CourseCurriculumSection {...courseCurriculumProps} />
      <CMECPDSection {...cmeCpdProps} />
      <InstructorBioSection {...instructorBioProps} />
      <TestimonialsSection {...testimonialsProps} />
      <CallToActionSection {...callToActionProps} />
      <Footer text={footerText} />
    </div>
  );
};

export default CourseTemplate;