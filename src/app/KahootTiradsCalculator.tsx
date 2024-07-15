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

// Mock backend service
const mockBackendService = {
  submitChoices: (choices: { [key: string]: string[] }) => {
    console.log("Submitted choices:", choices);
    return Promise.resolve();
  },
  getAggregateData: () => {
    return Promise.resolve({
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
    });
  },
};

const KahootTIRADSCalculator: React.FC = () => {
  const [selectedFeatures, setSelectedFeatures] = useState<{
    [key: string]: string[];
  }>({});
  const [totalScore, setTotalScore] = useState(0);
  const [tiRadsLevel, setTiRadsLevel] = useState("");
  const [recommendation, setRecommendation] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [aggregateData, setAggregateData] = useState<{
    [key: string]: { [key: string]: number };
  }>({});

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

  const handleSubmit = async () => {
    calculateScore();
    await mockBackendService.submitChoices(selectedFeatures);
    const data = await mockBackendService.getAggregateData();
    setAggregateData(data);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setSelectedFeatures({});
    setTotalScore(0);
    setTiRadsLevel("");
    setRecommendation("");
    setIsSubmitted(false);
    setAggregateData({});
  };

  const renderBarChart = (category: string) => {
    const data = Object.entries(aggregateData[category] || {}).map(
      ([name, value]) => ({
        name,
        "Other Users": value,
        "Your Choice": selectedFeatures[category]?.includes(name) ? 100 : 0,
      })
    );

    return (
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 70 }}
        >
          <XAxis
            dataKey="name"
            interval={0}
            tick={{ fill: "rgb(244, 244, 245)", fontSize: 12 }}
            angle={-45}
            textAnchor="end"
            height={80}
          />
          <YAxis tick={{ fill: "rgb(244, 244, 245)" }} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#272727",
              color: "rgb(244, 244, 245)",
            }}
          />
          <Legend
            verticalAlign="top"
            height={36}
            wrapperStyle={{ color: "rgb(244, 244, 245)" }}
          />
          <Bar dataKey="Other Users" fill="#23aac9" />
          <Bar dataKey="Your Choice" fill="#ff7f50" />
        </BarChart>
      </ResponsiveContainer>
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-[#272727] text-[rgb(244,244,245)]">
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
                  disabled={isSubmitted}
                >
                  {feature.name} ({feature.points} points)
                </Button>
              ))}
            </div>
            {isSubmitted && (
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2 text-white">
                  Comparison with Other Users
                </h3>
                {renderBarChart(category.name)}
              </div>
            )}
          </CardContent>
        </Card>
      ))}
      <div className="flex gap-4">
        {!isSubmitted ? (
          <Button
            onClick={handleSubmit}
            className="w-full mt-4 bg-[#23aac9] text-[rgb(244,244,245)] hover:bg-opacity-80 rounded-lg py-2"
          >
            Submit and Compare
          </Button>
        ) : (
          <>
            <Button
              onClick={handleReset}
              className="flex-1 mt-4 bg-[#ff7f50] text-[rgb(244,244,245)] hover:bg-opacity-80 rounded-lg py-2"
            >
              Reset
            </Button>
          </>
        )}
      </div>
      {isSubmitted && (
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

export default KahootTIRADSCalculator;
