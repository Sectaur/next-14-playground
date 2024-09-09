"use client"
import React from 'react';
import { Button } from "@/components/ui/button";

interface FinalCTAProps {
  onCtaClick: () => void;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ onCtaClick }) => {
  return (
    <section className="bg-[#1E1E1E] py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6 text-white">Ready to Advance Your Radiology Skills?</h2>
        <p className="text-xl mb-8 text-[#B0B0B0]">Join our comprehensive online course today and transform your practice.</p>
        <Button 
          onClick={onCtaClick}
          className="bg-[#23AAC9] text-white hover:bg-[#1C89A2] rounded-full px-8 py-3 text-lg font-semibold"
        >
          Enroll Now
        </Button>
      </div>
    </section>
  );
};

export default FinalCTA;