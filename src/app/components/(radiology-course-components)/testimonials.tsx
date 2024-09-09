import React from 'react';
import Image from 'next/image';

interface Testimonial {
  name: string;
  role: string;
  content: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  return (
    <section className="bg-[#272727] py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-white text-center">What Our Students Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-[#1E1E1E] p-6 rounded-lg shadow-lg">
              <p className="text-[#B0B0B0] mb-4">&ldquo;{testimonial.content}&rdquo;</p>
              <div className="flex items-center">
                <Image
                  src="/hp-photo.png"
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-[#23AAC9]">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;