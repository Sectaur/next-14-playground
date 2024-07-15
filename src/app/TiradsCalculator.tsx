import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Feature = {
  name: string;
  points: number;
};

type Category = {
  name: string;
  features: Feature[];
  allowMultiple?: boolean;
};

const categories: Category[] = [
  {
    name: "Composition",
    features: [
      { name: "Cystic or almost completely cystic", points: 0 },
      { name: "Spongiform", points: 0 },
      { name: "Mixed cystic and solid", points: 1 },
      { name: "Solid or almost completely solid", points: 2 },
    ],
  },
  {
    name: "Echogenicity",
    features: [
      { name: "Anechoic", points: 0 },
      { name: "Hyperechoic or isoechoic", points: 1 },
      { name: "Hypoechoic", points: 2 },
      { name: "Very hypoechoic", points: 3 },
    ],
  },
  {
    name: "Shape",
    features: [
      { name: "Wider-than-tall", points: 0 },
      { name: "Taller-than-wide", points: 3 },
    ],
  },
  {
    name: "Margin",
    features: [
      { name: "Smooth", points: 0 },
      { name: "Ill-defined", points: 0 },
      { name: "Lobulated or irregular", points: 2 },
      { name: "Extra-thyroidal extension", points: 3 },
    ],
  },
  {
    name: "Echogenic Foci",
    features: [
      { name: "None or large comet-tail artifacts", points: 0 },
      { name: "Macrocalcifications", points: 1 },
      { name: "Peripheral (rim) calcifications", points: 2 },
      { name: "Punctate echogenic foci", points: 3 },
    ],
    allowMultiple: true,
  },
];

const TIRADSCalculator: React.FC = () => {
  const [selectedFeatures, setSelectedFeatures] = useState<{
    [key: string]: string[];
  }>({});
  const [totalScore, setTotalScore] = useState(0);
  const [tiRadsLevel, setTiRadsLevel] = useState("");
  const [recommendation, setRecommendation] = useState("");

  const handleFeatureChange = (category: string, feature: string) => {
    setSelectedFeatures((prev) => {
      const updatedCategory = prev[category] || [];
      if (categories.find((c) => c.name === category)?.allowMultiple) {
        if (updatedCategory.includes(feature)) {
          return {
            ...prev,
            [category]: updatedCategory.filter((f) => f !== feature),
          };
        } else {
          return { ...prev, [category]: [...updatedCategory, feature] };
        }
      } else {
        return { ...prev, [category]: [feature] };
      }
    });
  };

  const calculateScore = () => {
    let score = 0;
    categories.forEach((category) => {
      const selectedCategoryFeatures = selectedFeatures[category.name] || [];
      category.features.forEach((feature) => {
        if (selectedCategoryFeatures.includes(feature.name)) {
          score += feature.points;
        }
      });
    });
    setTotalScore(score);
    const level = getTIRADSLevel(score);
    setTiRadsLevel(level);
    setRecommendation(getRecommendation(level));
  };

  const getTIRADSLevel = (score: number) => {
    if (score === 0) return "TR1";
    if (score === 2) return "TR2";
    if (score === 3) return "TR3";
    if (score >= 4 && score <= 6) return "TR4";
    if (score >= 7) return "TR5";
    return "Unknown";
  };

  const getRecommendation = (level: string) => {
    switch (level) {
      case "TR1":
        return "No FNA";
      case "TR2":
        return "No FNA";
      case "TR3":
        return "FNA if ≥ 2.5 cm; Follow if ≥ 1.5 cm";
      case "TR4":
        return "FNA if ≥ 1.5 cm; Follow if ≥ 1 cm";
      case "TR5":
        return "FNA if ≥ 1 cm; Follow if ≥ 0.5 cm";
      default:
        return "Unknown";
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-[#272727] text-[rgb(244,244,245)]">
      <h1 className="text-2xl font-bold mb-6 text-center">
        ACR TI-RADS Calculator
      </h1>
      {categories.map((category) => (
        <Card
          key={category.name}
          className="mb-4 bg-[#272727] border-[#23aac9]"
        >
          <CardHeader>
            <CardTitle className="text-[rgb(244,244,245)]">
              {category.name}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-2">
              {category.features.map((feature) => (
                <Button
                  key={feature.name}
                  onClick={() =>
                    handleFeatureChange(category.name, feature.name)
                  }
                  className={`w-full justify-start text-left px-4 py-2 rounded-lg ${
                    selectedFeatures[category.name]?.includes(feature.name)
                      ? "bg-[#23aac9] text-[rgb(244,244,245)]"
                      : "bg-zinc-400 text-[#272727] hover:bg-[#23aac9] hover:text-[rgb(244,244,245)]"
                  }`}
                >
                  {feature.name} ({feature.points} points)
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
      <Button
        onClick={calculateScore}
        className="w-full mt-4 bg-[#23aac9] text-[rgb(244,244,245)] hover:bg-opacity-80 rounded-lg py-2"
      >
        Calculate TI-RADS Score
      </Button>
      {totalScore > 0 && (
        <Card className="mt-6 bg-[#272727] border-[#23aac9]">
          <CardHeader>
            <CardTitle className="text-[rgb(244,244,245)]">Results</CardTitle>
          </CardHeader>
          <CardContent className="text-[rgb(244,244,245)]">
            <p className="mb-2">Total Score: {totalScore}</p>
            <p className="mb-2">TI-RADS Level: {tiRadsLevel}</p>
            <p className="mb-2">Recommendation: {recommendation}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default TIRADSCalculator;
