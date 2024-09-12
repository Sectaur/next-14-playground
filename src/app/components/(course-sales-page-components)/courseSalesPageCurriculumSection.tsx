import React from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

interface CurriculumPart {
  title: string;
  units: string[];
}

interface CourseCurriculumSectionProps {
  title: string;
  curriculum: CurriculumPart[];
}

const CourseSalesPageCurriculumSection: React.FC<CourseCurriculumSectionProps> = ({ title, curriculum }) => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
        <Accordion type="single" collapsible>
          {curriculum.map((part, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{part.title}</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-6">
                  {part.units.map((unit, unitIndex) => (
                    <li key={unitIndex} className="mb-2 text-left">{unit}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default CourseSalesPageCurriculumSection;