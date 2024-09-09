'use client'
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface Unit {
  title: string;
  duration: string;
}

interface Section {
  title: string;
  units: Unit[];
}

interface CourseCurriculumProps {
  sections: Section[];
}

const CourseCurriculum: React.FC<CourseCurriculumProps> = ({ sections }) => {
  const [openSections, setOpenSections] = useState<number[]>([]);

  const toggleSection = (index: number) => {
    setOpenSections(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="bg-[#272727] py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-white text-center">Course Curriculum</h2>
        <div className="space-y-4">
          {sections.map((section, index) => (
            <div key={index} className="border border-[#23AAC9] rounded-lg overflow-hidden">
              <button
                className="w-full p-4 text-left bg-[#1E1E1E] text-white flex justify-between items-center"
                onClick={() => toggleSection(index)}
              >
                <span className="font-semibold">{section.title}</span>
                {openSections.includes(index) ? <ChevronUp /> : <ChevronDown />}
              </button>
              {openSections.includes(index) && (
                <div className="p-4 bg-[#2A2A2A]">
                  {section.units.map((unit, unitIndex) => (
                    <div key={unitIndex} className="flex justify-between py-2 text-[#B0B0B0]">
                      <span>{unit.title}</span>
                      <span>{unit.duration}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseCurriculum;