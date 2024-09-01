import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  imageSrc: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  imageSrc,
}) => (
  <Card className="bg-[#272727] border-[#393939] transition-all duration-300 ease-in-out hover:scale-[1.02] hover:bg-[#323232] hover:shadow-lg">
    <CardContent className="p-6">
      <div className="text-[#23AAC9] mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2 text-white hover:text-[#23AAC9] transition-colors duration-300 ease-in-out">
        {title}
      </h3>
      <p className="text-[#838383] mb-4 hover:text-white transition-colors duration-300 ease-in-out">
        {description}
      </p>
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-48 object-cover rounded-md transition-all duration-300 ease-in-out hover:opacity-90"
      />
    </CardContent>
  </Card>
);

interface FeaturesSectionProps {
  title: string;
  features: Array<FeatureCardProps>;
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({
  title,
  features,
}) => {
  return (
    <section className="mb-12 w-full bg-[#070707]">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">{title}</h2>
        <div className="max-h-[600px] overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;