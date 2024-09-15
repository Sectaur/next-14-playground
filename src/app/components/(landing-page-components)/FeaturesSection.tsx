import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  imageSrc: string;
  id: number;
  action?: () => void;
}

interface FeatureCardProps extends Feature {
  onClick: (id: number) => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  imageSrc,
  id,
  onClick,
}) => (
  <Card 
    className="bg-[#272727] border-[#393939] transition-all duration-300 ease-in-out hover:scale-[1.02] hover:bg-[#323232] hover:shadow-lg transform scale-70 h-full flex flex-col"
    onClick={() => onClick(id)}
  >
    <CardContent className="p-6 flex flex-col h-full">
      <div className="text-[#23AAC9] mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-3 text-white hover:text-[#23AAC9] transition-colors duration-300 ease-in-out">
        {title}
      </h3>
      <p className="text-sm text-[#838383] mb-4 hover:text-white transition-colors duration-300 ease-in-out flex-grow">
        {description}
      </p>
      <div className="mt-auto">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-40 object-cover rounded-md transition-all duration-300 ease-in-out hover:opacity-90"
        />
      </div>
    </CardContent>
  </Card>
);

interface FeaturesSectionProps {
  title: string;
  features: Feature[];
  onCardClick: (id: number) => void;
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({
  title,
  features,
  onCardClick,
}) => {
  return (
    <section className="w-full bg-black py-12 md:py-16 lg:py-20">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 max-w-8xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-12 text-center text-white">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
          {features.map((feature) => (
            <div key={feature.id} className="w-full h-full">
              <FeatureCard {...feature} onClick={onCardClick} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;