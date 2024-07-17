import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  CartesianGrid,
} from "recharts";

type Feature = {
  name: string;
  points: number;
};

type Category = {
  name: string;
  features: Feature[];
  allowMultiple?: boolean;
};

type SelectedFeatures = {
  [category: string]: string[];
};

type AggregatedResults = {
  [category: string]: {
    [feature: string]: number;
  };
};

type ExpertChoices = {
  [category: string]: string[];
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

const mockExpertChoices: ExpertChoices = {
  Composition: ["Solid or almost completely solid"],
  Echogenicity: ["Hypoechoic"],
  Shape: ["Wider-than-tall"],
  Margin: ["Lobulated or irregular"],
  "Echogenic Foci": ["Macrocalcifications", "Punctate echogenic foci"],
};

const mockAggregatedResults: AggregatedResults = {
  Composition: {
    "Cystic or almost completely cystic": 10,
    Spongiform: 5,
    "Mixed cystic and solid": 30,
    "Solid or almost completely solid": 55,
  },
  Echogenicity: {
    Anechoic: 15,
    "Hyperechoic or isoechoic": 25,
    Hypoechoic: 40,
    "Very hypoechoic": 20,
  },
  Shape: {
    "Wider-than-tall": 70,
    "Taller-than-wide": 30,
  },
  Margin: {
    Smooth: 40,
    "Ill-defined": 20,
    "Lobulated or irregular": 30,
    "Extra-thyroidal extension": 10,
  },
  "Echogenic Foci": {
    "None or large comet-tail artifacts": 30,
    Macrocalcifications: 25,
    "Peripheral (rim) calcifications": 20,
    "Punctate echogenic foci": 25,
  },
};

const MockedTIRADSCalculator: React.FC = () => {
  const [selectedFeatures, setSelectedFeatures] = useState<SelectedFeatures>(
    {}
  );
  const [totalScore, setTotalScore] = useState(0);
  const [tiRadsLevel, setTiRadsLevel] = useState("");
  const [recommendation, setRecommendation] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [aggregateData, setAggregateData] = useState<AggregatedResults>(
    mockAggregatedResults
  );
  const [expertChoices, setExpertChoices] =
    useState<ExpertChoices>(mockExpertChoices);

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

  const getTIRADSLevel = (score: number): string => {
    if (score === 0) return "TR1";
    if (score === 2) return "TR2";
    if (score === 3) return "TR3";
    if (score >= 4 && score <= 6) return "TR4";
    if (score >= 7) return "TR5";
    return "Unknown";
  };

  const getRecommendation = (level: string): string => {
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

  const handleSubmit = () => {
    calculateScore();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setSelectedFeatures({});
    setTotalScore(0);
    setTiRadsLevel("");
    setRecommendation("");
    setIsSubmitted(false);
  };

  const renderBarChart = (category: string) => {
    const data = Object.entries(aggregateData[category] || {}).map(
      ([name, value]) => ({
        name,
        "Other Users": value,
        "Your Choice": selectedFeatures[category]?.includes(name) ? 100 : 0,
        "Expert Choice": expertChoices[category]?.includes(name) ? 100 : 0,
      })
    );

    return (
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" domain={[0, 100]} hide />
          <YAxis
            dataKey="name"
            type="category"
            width={120}
            tick={{ fill: "rgb(244, 244, 245)", fontSize: 10 }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#272727",
              color: "rgb(244, 244, 245)",
            }}
            formatter={(value: number) => `${value}%`}
          />
          <Legend
            verticalAlign="top"
            height={36}
            wrapperStyle={{ color: "rgb(244, 244, 245)", fontSize: 12 }}
          />
          <Bar dataKey="Other Users" fill="#23aac9" />
          <Bar dataKey="Your Choice" fill="#ff7f50" />
          <Bar dataKey="Expert Choice" fill="#50C878" />
        </BarChart>
      </ResponsiveContainer>
    );
  };

  return (
    <div className="w-full mx-auto bg-[#272727] text-[rgb(244,244,245)]">
      <h1 className="text-xl sm:text-2xl font-bold p-4 text-center">
        ACR TI-RADS Calculator (Mocked)
      </h1>
      <div className="grid grid-cols-1 gap-4">
        {categories.map((category) => (
          <Card
            key={category.name}
            className="bg-[#272727] border-[#23aac9] mx-2"
          >
            <CardHeader className="p-4">
              <CardTitle className="text-[rgb(244,244,245)] text-lg">
                {category.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="grid grid-cols-1 gap-2">
                {category.features.map((feature) => (
                  <Button
                    key={feature.name}
                    onClick={() =>
                      handleFeatureChange(category.name, feature.name)
                    }
                    className={`w-full justify-start text-left px-4 py-2 rounded-lg text-sm ${
                      selectedFeatures[category.name]?.includes(feature.name)
                        ? "bg-[#23aac9] text-[rgb(244,244,245)]"
                        : "bg-zinc-400 text-[#272727] hover:bg-[#23aac9] hover:text-[rgb(244,244,245)]"
                    }`}
                    disabled={isSubmitted}
                  >
                    <span className="truncate">{feature.name}</span>
                    <span className="ml-1 whitespace-nowrap">
                      ({feature.points} pts)
                    </span>
                  </Button>
                ))}
              </div>
              {isSubmitted && (
                <div className="mt-4">
                  <h3 className="text-base font-semibold mb-2 text-white">
                    Comparison
                  </h3>
                  {renderBarChart(category.name)}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex p-4">
        {!isSubmitted ? (
          <Button
            onClick={handleSubmit}
            className="w-full bg-[#23aac9] text-[rgb(244,244,245)] hover:bg-opacity-80 rounded-lg py-2 text-sm"
          >
            Submit and Compare
          </Button>
        ) : (
          <Button
            onClick={handleReset}
            className="w-full bg-[#ff7f50] text-[rgb(244,244,245)] hover:bg-opacity-80 rounded-lg py-2 text-sm"
          >
            Reset
          </Button>
        )}
      </div>
      {isSubmitted && (
        <Card className="mx-2 mb-4 bg-[#272727] border-[#23aac9]">
          <CardHeader className="p-4">
            <CardTitle className="text-[rgb(244,244,245)] text-lg">
              Results
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 text-sm text-zinc-300">
            <p className="mb-2">Total Score: {totalScore}</p>
            <p className="mb-2">TI-RADS Level: {tiRadsLevel}</p>
            <p className="mb-2">Recommendation: {recommendation}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default MockedTIRADSCalculator;
