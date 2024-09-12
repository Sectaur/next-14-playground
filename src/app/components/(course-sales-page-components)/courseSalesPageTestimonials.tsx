import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface Testimonial {
  name: string;
  comment: string;
}

interface TestimonialsSectionProps {
  title: string;
  testimonials: Testimonial[];
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ title, testimonials }) => {
  return (
    <section className="bg-[#1E1E1E] py-16 px-4 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-[#3A3A3A] shadow-lg">
              <CardContent className="pt-6">
                <p className="mb-4 text-gray-200">"{testimonial.comment}"</p>
                <div className="flex items-center">
                  <div className="text-[#23aac9] mr-2">★★★★★</div>
                  <p className="font-semibold text-gray-200">{testimonial.name}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;