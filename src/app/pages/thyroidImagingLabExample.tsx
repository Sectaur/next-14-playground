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
    <div className="min-h-screen bg-white">
      <LearningLabLandingTemplate 
        onSubscribe={() => setIsModalOpen(true)} 
        headerLogo={"/resectaur-learning-logo.svg"}
      />
      
      <main className="w-full px-4 sm:px-6 lg:px-8 py-6">
        <div className="mt-12 bg-gray-50 shadow-sm rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-xl leading-6 font-semibold text-gray-800">Meet Your Instructor</h3>
            <div className="mt-4 flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="flex-shrink-0">
                <div className="w-[140px] h-[140px] rounded-full overflow-hidden">
                  <Image
                    src={mockOwnerData.imageSrc}
                    alt={mockOwnerData.name}
                    width={140}
                    height={140}
                    className="object-cover w-full h-full shadow-md"
                  />
                </div>
              </div>
              <div className="text-center sm:text-left">
                <h4 className="text-lg font-semibold text-gray-800">{mockOwnerData.name}</h4>
                <p className="text-md text-gray-600">{mockOwnerData.title}</p>
                <p className="mt-2 text-gray-700">{mockOwnerData.bio}</p>
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