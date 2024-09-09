"use client";

import React from 'react';
import HeroSection from '../components/(landing-page-components)/HeroSection';
import CourseCurriculum from '../components/(radiology-course-components)/courseCurriculum';
import TargetAudience from '../components/(radiology-course-components)/targetAudience';
import CMERecognition from '../components/(radiology-course-components)/CMERecognition';
import CourseOutcomes from '../components/(radiology-course-components)/courseOutcomes';
import Testimonials from '../components/(radiology-course-components)/testimonials';
import FinalCTA from '../components/(radiology-course-components)/finalCTA';

const RadiologyCoursePage: React.FC = () => {
  const handleCtaClick = () => {
    // Handle CTA click (e.g., scroll to registration form or open modal)
    console.log('CTA clicked');
  };

  const mockCurriculum = [
    {
      title: 'Section 1: Introduction to Advanced Radiology',
      units: [
        { title: 'Overview of the course', duration: '15 min' },
        { title: 'Latest trends in radiology', duration: '30 min' },
      ],
    },
    {
      title: 'Section 2: Advanced Imaging Techniques',
      units: [
        { title: 'MRI advancements', duration: '45 min' },
        { title: 'CT scan innovations', duration: '45 min' },
      ],
    },
    // Add more sections as needed
  ];

  const mockAudiences = [
    'Practicing radiologists looking to update their skills',
    'Radiology residents preparing for their board exams',
    'Medical professionals interested in expanding their imaging knowledge',
    'Healthcare administrators involved in radiology departments',
  ];

  const mockOutcomes = [
    'Master the latest advanced imaging techniques',
    'Interpret complex cases with greater accuracy and confidence',
    'Stay updated with the newest trends and technologies in radiology',
    'Enhance your diagnostic skills across various modalities',
    'Improve patient care through more precise and efficient diagnoses',
  ];

  const mockTestimonials = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Senior Radiologist',
      content: 'This course has significantly improved my diagnostic accuracy. The advanced techniques taught are invaluable.',
      avatar: '/avatar1.jpg',
    },
    {
      name: 'Dr. Michael Chen',
      role: 'Radiology Resident',
      content: "As a resident, this course gave me a huge advantage. It's like getting years of experience in just a few weeks.",
      avatar: '/avatar2.jpg',
    },
    {
      name: 'Dr. Emily Rodriguez',
      role: 'Head of Radiology Department',
      content: "I've recommended this course to my entire team. It's comprehensive, up-to-date, and incredibly practical.",
      avatar: '/avatar3.jpg',
    },
  ];

  return (
    <div className="bg-[#070707] text-white">
      <HeroSection
        title="Advanced Radiology Masterclass"
        description="Elevate your diagnostic skills with cutting-edge techniques and expert insights"
        ctaText="Enroll Now"
        backgroundImage="/radiology-hero.jpg"
        videoPlaybackId="YOUR_MUX_PLAYBACK_ID"
        onCtaClick={handleCtaClick}
      />
      <CourseCurriculum sections={mockCurriculum} />
      <TargetAudience audiences={mockAudiences} />
      <CMERecognition />
      <CourseOutcomes outcomes={mockOutcomes} />
      <Testimonials testimonials={mockTestimonials} />
      <FinalCTA onCtaClick={handleCtaClick} />
    </div>
  );
};

export default RadiologyCoursePage;