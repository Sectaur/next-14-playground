import React from 'react';
import WebinarLandingPageTemplate, { WebinarLandingPageProps } from '../components/(landing-page-templates)/WebinarLandingPageTemplate';

const WebinarExample: React.FC = () => {
  // Create a date 30 seconds from now
  const futureDate = new Date(Date.now() + 50000);
  
  const webinarProps: WebinarLandingPageProps = {
    headerLogo: "/ResectaurLearningLogo.svg", // Add this line
    email: "", // Added email
    webinarDate: futureDate.getTime(), // Unix timestamp for 30 seconds from now
    backgroundImageUrl: "/neck-us.png",
    hostData: {
      name: "Dr. Hament Pandya",
      qualifications: "MD, FRCR, FRANZCR",
      specialty: "Consultant Radiologist, Specializing in Head and Neck Imaging",
      bio: "Dr. Pandya is a renowned Head and Neck radiologist with over 15 years of experience. He is passionate about advancing radiological education and has authored numerous publications in the field.",
      imageUrl: "/hp-photo.png"
    },
    webinarData: {
      title: "Advanced Techniques in Head and Neck MRI",
      description: "Join us for an in-depth exploration of cutting-edge MRI interpretation techniques in head and neck imaging.",
      benefits: [
        {
          title: "Enhanced Diagnostic Accuracy",
          description: "Learn advanced techniques to improve your diagnostic accuracy in complex Head and Neck cases.",
          image: "/parotid.png" // Replace with actual image path
        },
        {
          title: "Efficient Workflow Strategies",
          description: "Discover methods to streamline your radiology workflow without compromising on quality.",
          image: "/parotid.png" // Replace with actual image path
        },
        {
          title: "Latest Research Insights",
          description: "Stay updated with the most recent developments and research in Head and Neck Imaging.",
          image: "/parotid.png" // Replace with actual image path
        }
      ]
    },
    registrationForm: {
      fields: [
        { name: 'firstName', label: 'First Name', type: 'text', required: true },
        { name: 'surname', label: 'Surname', type: 'text', required: true },
        { name: 'email', label: 'Email', type: 'email', required: true },
        { name: 'country', label: 'Country', type: 'text', required: true },
        { name: 'occupation', label: 'Occupation', type: 'text', required: true }
      ]
    }
  };

  return (<WebinarLandingPageTemplate {...webinarProps} />);
};

export default WebinarExample;