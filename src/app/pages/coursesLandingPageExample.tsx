"use client";

import React from "react";
import { useRouter } from 'next/navigation';
import LandingPageTemplate from "../components/(landing-page-templates)/LandingPageTemplate";
import { BookOpen } from "lucide-react";

const CoursesLandingPageExample: React.FC = () => {
  const router = useRouter();

  const handleCtaClick = () => {
    router.push('/course-catalog');
  };

  return (
    <LandingPageTemplate
      headerLogo="/resectaur-learning-logo.svg"
      heroSection={{
        title: "Advance Your Radiology Knowledge",
        description: "Comprehensive online courses for radiologists at all levels",
        ctaText: "Explore Courses",
        backgroundImage: "/thyroid-nodule.jpg",
        videoPlaybackId: "YOUR_MUX_PLAYBACK_ID",
      }}
      featuresTitle="Explore Courses"
      features={[
        {
          id: 1,
          icon: <BookOpen size={24} />,
          title: "Course: Thyroid Ultrasound Mastery",
          description: "Learn to interpret thyroid nodules with confidence",
          imageSrc: "/thyroid-nodule.jpg",
          action: () => router.push('/course'),
        },
        {
          id: 2,
          icon: <BookOpen size={24} />,
          title: "Course: Advanced MRI Techniques",
          description: "Explore cutting-edge MRI protocols and interpretation",
          imageSrc: "/parotid.png",
          action: () => router.push('/course'),
        },
        {
          id: 3,
          icon: <BookOpen size={24} />,
          title: "Course: Pediatric Radiology Essentials",
          description: "Specialized imaging techniques for pediatric patients",
          imageSrc: "/thyroid-nodule.jpg",
          action: () => router.push('/course'),
        },
        {
          id: 4,
          icon: <BookOpen size={24} />,
          title: "Course: Interventional Radiology Fundamentals",
          description: "Core skills for minimally invasive procedures",
          imageSrc: "/parotid.png",
          action: () => router.push('/course'),
        },
        {
          id: 5,
          icon: <BookOpen size={24} />,
          title: "Course: Breast Imaging and Intervention",
          description: "Comprehensive approach to breast cancer detection",
          imageSrc: "/thyroid-nodule.jpg",
          action: () => router.push('/course'),
        },
        {
          id: 6,
          icon: <BookOpen size={24} />,
          title: "Course: Musculoskeletal Imaging",
          description: "Detailed analysis of bone and joint pathologies",
          imageSrc: "/parotid.png",
          action: () => router.push('/course'),
        },
      ]}
      ctaTitle="Ready to Elevate Your Radiology Career?"
      ctaDescription="Enroll in our courses today and stay at the forefront of medical imaging."
      ctaButtonText="Browse All Courses"
      footerText="© 2024 Resectaur Learning. All rights reserved."
      onCtaClick={handleCtaClick}
      showHeroSection={false}
    />
  );
};

export default CoursesLandingPageExample;
