import React from 'react';
import { Check } from 'lucide-react';

interface TargetAudienceProps {
  audiences: string[];
}

const TargetAudience: React.FC<TargetAudienceProps> = ({ audiences }) => {
  return (
    <section className="bg-[#1E1E1E] py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-white text-center">Who This Course Is For</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {audiences.map((audience, index) => (
            <div key={index} className="flex items-start space-x-4">
              <Check className="text-[#23AAC9] flex-shrink-0 mt-1" />
              <p className="text-[#B0B0B0]">{audience}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;