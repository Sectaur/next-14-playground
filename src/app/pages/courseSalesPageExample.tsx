import React from 'react';
import CourseSalesPageTemplate from '../components/(landing-page-templates)/CourseSalesPageTemplate';

const CourseSalesPageExample: React.FC = () => {
  const mockData = {
    headerLogo: "/resectaur-learning-logo.svg",
    heroProps: {
      backgroundImage: "/neck-us.png",
      subtitle: "Radiology Course",
      title: "Master Radiology: Comprehensive Online Training",
      description: "A step-by-step interactive online course with ultrasound correlation designed to build confidence in neck ultrasound examinations",
      buttonText: "Create your Free Account",
      buttonAction: () => console.log("Enroll button clicked"),
      registrationText: "Register to try free modules before unlocking the full course for $USD499!",
      videoPlaybackId: "29f4fzjwl901f1iu"
    },
    keyBenefitsProps: {
      title: "Optimise your approach to head and neck ultrasound...",
      benefits: [
        { title: "Understand Neck Anatomy", description: "Deconstruct complex anatomy into fundamental building blocks for a deep understanding, moving beyond rote learning." },
            { title: "Optimise Scanning Technique", description: "Learn hidden techniques to quickly and accurately identify normal structures, enabling efficient scanning." },
            { title: "Interactive Scan Library", description: "Access our library of neck ultrasound scans with integrated video tutorials. Follow along for comprehensive learning and quick reference on-the-go." }
      ],
      brandmarkImage: "/resectaur-brandmark.svg"
    },
    agitateSolutionProps: {
      videoPlaybackId: "29f4fzjwl901f1iu",
      title: "Mastering Neck Ultrasound Anatomy: From Uncertainty to Confidence",
      paragraphs: [
        "Practitioners often struggle with a lack of confidence when performing neck ultrasound scans.",
        "This uncertainty stems from the <span className='text-[#23AAC9]'>complex anatomy</span> of the neck region, infrequent scanning opportunities, and the absence of a systematic approach. As a result, <span className='text-[#23AAC9]'>diagnostic accuracy</span> and efficiency may suffer.",
        "Our comprehensive Neck Ultrasound Anatomy & Scanning Technique Fundamentals Course offers the key to unlocking your confidence."
      ],
      buttonText: "Access Free Modules",
      buttonAction: () => console.log("CTA button clicked"),
      registrationText: "Register to try free modules before unlocking the full course for $USD499!"
    },
    courseCurriculumProps: {
      title: "Course Curriculum",
      curriculum: [
        {
          title: "PART I - HOW TO TAKE THIS COURSE",
          units: [
            "1.1 Course Overview",
            "1.2 Using the Interactive Platform",
            "1.3 Setting Learning Goals"
          ]
        },
        {
          title: "PART II - PREPARATION AND OPTIMISATION",
          units: [
            "2.1 Patient Positioning",
            "2.2 Ultrasound Machine Settings",
            "2.3 Probe Selection and Handling"
          ]
        },
        {
          title: "PART III - NECK ANATOMY WITH ULTRASOUND CORRELATION",
          units: [
            "3.1 Superficial Neck Structures",
            "3.2 Deep Neck Spaces",
            "3.3 Vascular Structures",
            "3.4 Lymph Node Levels"
          ]
        },
        {
          title: "PART IV - IMAGING BASED NODAL CLASSIFICATION",
          units: [
            "4.1 Normal vs Abnormal Lymph Nodes",
            "4.2 Benign Lymphadenopathy",
            "4.3 Malignant Lymphadenopathy"
          ]
        },
        {
          title: "PART V - ULTRASOUND NECK STRATEGY, CHECKLISTS & KEY IMAGES",
          units: [
            "5.1 Systematic Scanning Approach",
            "5.2 Key Anatomical Landmarks",
            "5.3 Documenting Findings"
          ]
        },
        {
          title: "PART VI - INTERACTIVE QUIZZES",
          units: [
            "6.1 Anatomy Recognition Quiz",
            "6.2 Pathology Identification Quiz",
            "6.3 Scanning Technique Assessment"
          ]
        }
      ]
    },
    cmeCpdProps: {
      title: "CME | CPD Certificate",
      description: "Over 4 hours of content, including quizzes",
      certificationInfo: "*RANZCR - 4 Points Awarded",
      imageUrl: "/cpd-certificate-icon.svg"
    },
    instructorBioProps: {
      name: "Dr. Hament Pandya",
      title: "FRANZCR",
      bio: "Dr. Pandya is a UK-trained radiologist with over 18 years of experience in head and neck imaging, who co-founded New Zealand's foremost one-stop neck lump clinic.",
      buttonText: "About Resectaur",
      buttonAction: () => console.log("About Resectaur button clicked"),
      imageUrl: "/hp-photo.png"
    },
    testimonialsProps: {
      title: "What Our Students Say",
      testimonials: [
        { name: "Heidi, Sonographer", comment: "Really well explained and demonstrated. I finally feel that I understand neck anatomy! A 'must do' course, I'll be recommending it to all of my colleagues." },
        { name: "Lisa, Pathologist", comment: "Fantastic for a pathologist to have the opportunity to learn about head and neck ultrasound, while recapping anatomy of this region." },
        { name: "Laura, Sonographer", comment: "This was exceptionally well presented. I appreciated the detailed explanations, clear and concise instructions and lovely US imaging. Thank you and look forward to your next course!" }
      ]
    },
    callToActionProps: {
      title: "Register now for free access to course modules.",
      description: "Try before you buy - unlock the full course for just $USD499!",
      buttonText: "Access Free Modules",
      buttonAction: () => console.log("CTA button clicked")
    },
    footerText: "© 2024 Master Radiology Course. All rights reserved."
  };

  return <CourseSalesPageTemplate {...mockData} />;
};

export default CourseSalesPageExample;