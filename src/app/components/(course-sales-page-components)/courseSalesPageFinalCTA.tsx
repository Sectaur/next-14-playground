import React from 'react';
import { Button } from "@/components/ui/button";

interface CallToActionSectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonAction: () => void;
}

const CourseSalesPageFinalCTA: React.FC<CallToActionSectionProps> = ({
  title,
  description,
  buttonText,
  buttonAction
}) => {
  return (
    <section className="py-16 px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="mb-8">{description}</p>
      <Button className="bg-[#23AAC9] hover:bg-[#1D8BA3] text-white hover:text-white rounded-full" onClick={buttonAction}>
        {buttonText}
      </Button>
    </section>
  );
};

export default CourseSalesPageFinalCTA;