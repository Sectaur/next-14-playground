import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";

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

const NewTIRADSCalculator: React.FC = () => {
  const [selectedFeatures, setSelectedFeatures] = useState<{
    [key: string]: string[];
  }>({});
  const [totalScore, setTotalScore] = useState(0);
  const [tiRadsLevel, setTiRadsLevel] = useState("");
  const [recommendation, setRecommendation] = useState("");

  const handleFeatureChange = (
    category: string,
    feature: string,
    checked: boolean
  ) => {
    setSelectedFeatures((prev) => {
      const updatedCategory = prev[category] || [];
      if (checked) {
        if (categories.find((c) => c.name === category)?.allowMultiple) {
          return { ...prev, [category]: [...updatedCategory, feature] };
        } else {
          return { ...prev, [category]: [feature] };
        }
      } else {
        return {
          ...prev,
          [category]: updatedCategory.filter((f) => f !== feature),
        };
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
            {category.allowMultiple ? (
              category.features.map((feature) => (
                <div
                  key={feature.name}
                  className="flex items-center space-x-2 mb-2"
                >
                  <Checkbox
                    id={`${category.name}-${feature.name}`}
                    checked={selectedFeatures[category.name]?.includes(
                      feature.name
                    )}
                    onCheckedChange={(checked) =>
                      handleFeatureChange(
                        category.name,
                        feature.name,
                        checked as boolean
                      )
                    }
                  />
                  <Label
                    htmlFor={`${category.name}-${feature.name}`}
                    className="text-[rgb(244,244,245)]"
                  >
                    {feature.name} ({feature.points} points)
                  </Label>
                </div>
              ))
            ) : (
              <RadioGroup
                onValueChange={(value) =>
                  handleFeatureChange(category.name, value, true)
                }
                value={selectedFeatures[category.name]?.[0] || ""}
              >
                {category.features.map((feature) => (
                  <div
                    key={feature.name}
                    className="flex items-center space-x-2 mb-2"
                  >
                    <RadioGroupItem
                      value={feature.name}
                      id={`${category.name}-${feature.name}`}
                    />
                    <Label
                      htmlFor={`${category.name}-${feature.name}`}
                      className="text-[rgb(244,244,245)]"
                    >
                      {feature.name} ({feature.points} points)
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            )}
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
          <CardContent>
            <p className="mb-2">Total Score: {totalScore}</p>
            <p className="mb-2">TI-RADS Level: {tiRadsLevel}</p>
            <p className="mb-2">Recommendation: {recommendation}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default NewTIRADSCalculator;
