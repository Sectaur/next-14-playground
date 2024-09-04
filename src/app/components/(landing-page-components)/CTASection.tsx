import React from "react";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  onCtaClick: () => void;
}

const CTASection: React.FC<CTASectionProps> = ({
  title,
  description,
  buttonText,
  onCtaClick,
}) => {
  return (
    <section className="text-center w-full bg-[#070707] py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-none">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
        <p className="text-lg md:text-xl mb-6 text-[#838383]">{description}</p>
        <Button 
          className="bg-[#23AAC9] text-[#272727] hover:bg-[#272727] hover:text-[#23AAC9] rounded-full transition-colors duration-300 w-full sm:w-auto px-8 py-3"
          onClick={onCtaClick}
        >
          {buttonText}
        </Button>
      </div>
    </section>
  );
};

export default CTASection;