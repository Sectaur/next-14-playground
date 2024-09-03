import React, { useState } from 'react';
import Image from 'next/image';
import LearningLabLandingTemplate from '../components/(landing-page-templates)/LearningLabLandingTemplate';
import SubscriptionFormModal from '../components/subscriptionFormModal';
// The Card components are not being used in this component, so they can be removed

interface SubscriptionData {
  name: string;
  email: string;
  specialty: string;
}

const ThyroidImagingLabExample: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubscribe = (data: SubscriptionData) => {
    // TODO: Implement actual subscription logic
    console.log('Subscription data:', data);
    setIsModalOpen(false);
  };

  const mockOwnerData = {
    name: "Dr. Hament Pandya",
    title: "Head of Radiology, City General Hospital",
    bio: "Dr. Pandya is a renowned expert in thyroid imaging with over 15 years of experience. She has published numerous papers on advanced ultrasound techniques and is passionate about educating the next generation of radiologists.",
    imageSrc: "/hp-photo.png" // Image from public folder
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <LearningLabLandingTemplate onSubscribe={() => setIsModalOpen(true)} />
      
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="mt-12 bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Meet Your Instructor</h3>
            <div className="mt-4 flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Image
                  src={mockOwnerData.imageSrc}
                  alt={mockOwnerData.name}
                  width={150}
                  height={150}
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-lg font-semibold">{mockOwnerData.name}</h4>
                <p className="text-sm text-gray-500">{mockOwnerData.title}</p>
                <p className="mt-2 text-sm text-gray-600">{mockOwnerData.bio}</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <SubscriptionFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubscribe}
      />
    </div>
  );
};

export default ThyroidImagingLabExample;