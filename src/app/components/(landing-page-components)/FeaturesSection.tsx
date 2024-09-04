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
    className="bg-[#272727] border-[#393939] transition-all duration-300 ease-in-out hover:scale-[1.02] hover:bg-[#323232] hover:shadow-lg transform scale-70"
    onClick={() => onClick(id)}
  >
    <CardContent className="p-4">
      <div className="text-[#23AAC9] mb-3">{icon}</div>
      <h3 className="text-base font-semibold mb-2 text-white hover:text-[#23AAC9] transition-colors duration-300 ease-in-out">
        {title}
      </h3>
      <p className="text-sm text-[#838383] mb-3 hover:text-white transition-colors duration-300 ease-in-out">
        {description}
      </p>
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-36 object-cover rounded-md transition-all duration-300 ease-in-out hover:opacity-90"
      />
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
    <section className="w-full bg-[#070707]">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-none">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center py-8 text-white">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {features.map((feature) => (
            <FeatureCard key={feature.id} {...feature} onClick={onCardClick} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;