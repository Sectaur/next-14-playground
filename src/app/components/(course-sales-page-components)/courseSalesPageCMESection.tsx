import React from 'react';
import Image from 'next/image';

interface CMECPDSectionProps {
  title: string;
  description: string;
  certificationInfo: string;
  imageUrl: string;
}

const CMECPDSection: React.FC<CMECPDSectionProps> = ({ title, description, certificationInfo, imageUrl }) => {
  return (
    <section className="bg-[#272727] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h3 className="text-2xl font-bold mb-4">{title}</h3>
          <p className="mb-4">{description}</p>
          <p className="font-bold">{certificationInfo}</p>
        </div>
        <div className="md:w-1/2">
          <Image
            src={imageUrl}
            alt="CME/CPD Certificate"
            width={500}
            height={300}
          />
        </div>
      </div>
    </section>
  );
};

export default CMECPDSection;