import React from 'react';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Image from 'next/image';

interface Benefit {
  title: string;
  description: string;
}

interface KeyBenefitsSectionProps {
  title: string;
  benefits: Benefit[];
  brandmarkImage: string;
}

const CourseSalesPageBenefitsSection: React.FC<KeyBenefitsSectionProps> = ({ title, benefits, brandmarkImage }) => {
  return (
    <section className="py-16 px-4">
      <h2 className="text-2xl font-bold text-black text-center mb-8">{title}</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <Card key={index} className="bg-white shadow-lg">
            <CardHeader>
              <div className="flex justify-center items-center mb-4">
                <Image src={brandmarkImage} alt="Resectaur Brandmark" width={150} height={150} />
              </div>
              <h3 className="text-xl font-semibold">{benefit.title}</h3>
            </CardHeader>
            <CardContent>
              <p>{benefit.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default CourseSalesPageBenefitsSection;