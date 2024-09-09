import React from 'react';
import { CheckCircle } from 'lucide-react';

interface CourseOutcomesProps {
  outcomes: string[];
}

const CourseOutcomes: React.FC<CourseOutcomesProps> = ({ outcomes }) => {
  return (
    <section className="bg-[#1E1E1E] py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-white text-center">
          By the End of This Course You Will...
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {outcomes.map((outcome, index) => (
            <div key={index} className="flex items-start space-x-4">
              <CheckCircle className="text-[#23AAC9] flex-shrink-0 mt-1" />
              <p className="text-[#B0B0B0]">{outcome}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseOutcomes;