import React from 'react';
import { Button } from "@/components/ui/button";

interface InstructorBioSectionProps {
  name: string;
  title: string;
  bio: string;
  buttonText: string;
  buttonAction: () => void;
  imageUrl: string;
}

const InstructorBioSection: React.FC<InstructorBioSectionProps> = ({
  name,
  title,
  bio,
  buttonText,
  buttonAction,
  imageUrl
}) => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-2/3 mb-8 md:mb-0">
          <h3 className="text-2xl font-bold mb-4">Meet your Instructor</h3>
          <h4 className="text-xl font-semibold mb-2">{name}</h4>
          <p className="mb-4">{bio}</p>
          <Button variant="outline" className="rounded-full text-white hover:text-white bg-[#23AAC9] hover:bg-[#1D8BA3]" onClick={buttonAction}>
            {buttonText}
          </Button>
        </div>
        <div className="md:w-1/3">
          <img src={imageUrl} alt={name} className="rounded-full w-48 h-48 object-cover mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default InstructorBioSection;