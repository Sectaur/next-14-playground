import React from 'react';
import { Award } from 'lucide-react';

const CMERecognition: React.FC = () => {
  return (
    <section className="bg-[#272727] py-12">
      <div className="container mx-auto px-4 text-center">
        <Award className="text-[#23AAC9] w-16 h-16 mx-auto mb-4" />
        <h2 className="text-3xl font-bold mb-4 text-white">CME | CPD Recognition</h2>
        <p className="text-xl text-[#B0B0B0]">
          This course is recognized for 4 hours of CME | CPD activity.
        </p>
      </div>
    </section>
  );
};

export default CMERecognition;