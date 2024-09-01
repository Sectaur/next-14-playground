import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Feature {
  name: string;
  points: number;
}

interface Category {
  name: string;
  features: Feature[];
  allowMultiple?: boolean;
}

interface SelectedFeatures {
  [category: string]: string[];
}

interface NoduleData {
  id: string;
  patientId: string;
  selectedFeatures: SelectedFeatures;
  totalScore: number;
  tiRadsLevel: string;
  recommendation: string;
}

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

const ExpertTIRADSLabeler: React.FC = () => {
  const [selectedFeatures, setSelectedFeatures] = useState<SelectedFeatures>(
    {}
  );
  const [totalScore, setTotalScore] = useState(0);
  const [tiRadsLevel, setTiRadsLevel] = useState("");
  const [recommendation, setRecommendation] = useState("");
  const [patientId, setPatientId] = useState("");
  const [noduleId, setNoduleId] = useState("");
  const [savedNodules, setSavedNodules] = useState<NoduleData[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchSavedNodules();
  }, []);

  const fetchSavedNodules = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/getNodules");
      if (response.ok) {
        const data = await response.json();
        setSavedNodules(data);
      } else {
        console.error("Failed to fetch nodules");
      }
    } catch (error) {
      console.error("Error fetching nodules:", error);
    }
    setLoading(false);
  };

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

  const handleSubmit = async () => {
    calculateScore();

    const noduleData: NoduleData = {
      id: noduleId,
      patientId,
      selectedFeatures,
      totalScore,
      tiRadsLevel,
      recommendation,
    };

    try {
      const response = await fetch("/api/saveNodule", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(noduleData),
      });

      if (response.ok) {
        console.log("Nodule data saved successfully");
        fetchSavedNodules();
      } else {
        console.error("Failed to save nodule data");
      }
    } catch (error) {
      console.error("Error saving nodule data:", error);
    }
  };

  const handleReset = () => {
    setSelectedFeatures({});
    setTotalScore(0);
    setTiRadsLevel("");
    setRecommendation("");
    setPatientId("");
    setNoduleId("");
  };

  const handleLoadNodule = (nodule: NoduleData) => {
    setSelectedFeatures(nodule.selectedFeatures);
    setTotalScore(nodule.totalScore);
    setTiRadsLevel(nodule.tiRadsLevel);
    setRecommendation(nodule.recommendation);
    setPatientId(nodule.patientId);
    setNoduleId(nodule.id);
  };

  return (
    <div className="w-full mx-auto bg-[#272727] text-[rgb(244,244,245)]">
      <h1 className="text-xl sm:text-2xl font-bold p-4 text-center">
        Expert TIRADS Labeler
      </h1>

      <Card className="mx-2 mb-4 bg-[#272727] border-[#23aac9]">
        <CardHeader className="p-4">
          <CardTitle className="text-[rgb(244,244,245)] text-lg">
            Nodule Information
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="patientId">Patient ID</Label>
              <Input
                id="patientId"
                value={patientId}
                onChange={(e) => setPatientId(e.target.value)}
                className="bg-zinc-700 text-white"
              />
            </div>
            <div>
              <Label htmlFor="noduleId">Nodule ID</Label>
              <Input
                id="noduleId"
                value={noduleId}
                onChange={(e) => setNoduleId(e.target.value)}
                className="bg-zinc-700 text-white"
              />
            </div>
          </div>
        </CardContent>
      </Card>

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
                  >
                    <span className="truncate">{feature.name}</span>
                    <span className="ml-1 whitespace-nowrap">
                      ({feature.points} pts)
                    </span>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mx-2 my-4 bg-[#272727] border-[#23aac9]">
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

      <div className="flex justify-between p-4">
        <Button
          onClick={handleSubmit}
          className="bg-[#23aac9] text-[rgb(244,244,245)] hover:bg-opacity-80 rounded-lg py-2 px-4 text-sm"
        >
          Save Nodule
        </Button>
        <Button
          onClick={handleReset}
          className="bg-[#ff7f50] text-[rgb(244,244,245)] hover:bg-opacity-80 rounded-lg py-2 px-4 text-sm"
        >
          Reset
        </Button>
      </div>

      <Card className="mx-2 my-4 bg-[#272727] border-[#23aac9]">
        <CardHeader className="p-4">
          <CardTitle className="text-[rgb(244,244,245)] text-lg">
            Saved Nodules
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          {loading ? (
            <p>Loading saved nodules...</p>
          ) : (
            <div className="grid grid-cols-1 gap-2">
              {savedNodules.map((nodule) => (
                <Button
                  key={nodule.id}
                  onClick={() => handleLoadNodule(nodule)}
                  className="w-full justify-start text-left px-4 py-2 rounded-lg text-sm bg-zinc-700 text-white hover:bg-[#23aac9]"
                >
                  Patient ID: {nodule.patientId} - Nodule ID: {nodule.id}
                </Button>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ExpertTIRADSLabeler;
