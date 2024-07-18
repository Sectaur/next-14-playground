import React, { useState, useRef, useEffect } from "react";
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
import { URLs } from "@/networking/urls";
import { apiCall } from "@/networking/api";

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

interface AggregatedResults {
  [category: string]: {
    [feature: string]: number;
  };
}

interface Props {
  mode: "standalone" | "live";
  sessionId?: string;
  isAdmin?: boolean;
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

const TIRADSCalculator: React.FC<Props> = ({ mode, sessionId, isAdmin }) => {
  const [selectedFeatures, setSelectedFeatures] = useState<SelectedFeatures>(
    {}
  );
  const [aggregatedData, setAggregatedData] = useState<AggregatedResults>({});
  const [sessionData, setSessionData] = useState<AggregatedResults>({});
  const [totalScore, setTotalScore] = useState(0);
  const [tiRadsLevel, setTiRadsLevel] = useState("");
  const [recommendation, setRecommendation] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mode === "standalone") {
      fetchAggregatedData();
    } else if (mode === "live" && sessionId) {
      fetchSessionData(sessionId);
    }
  }, [mode, sessionId]);

  const fetchAggregatedData = async () => {
    try {
      const { apiSuccess, data, logout } = await apiCall(
        URLs.TIRADS_AGGREGATED_DATA()
      );
      if (apiSuccess) {
        setAggregatedData(data);
      } else if (logout) {
        setError("Session expired. Please log in again.");
      } else {
        setError(data.message || "Error fetching aggregated data");
      }
    } catch (error) {
      console.error("Error fetching aggregated data:", error);
      setError("An unexpected error occurred");
    }
  };

  const fetchSessionData = async (sessionId: string) => {
    try {
      const { apiSuccess, data, logout } = await apiCall(
        URLs.TIRADS_SESSION_DATA(),
        { sessionId }
      );
      if (apiSuccess) {
        setSessionData(data);
      } else if (logout) {
        setError("Session expired. Please log in again.");
      } else {
        setError(data.message || "Error fetching session data");
      }
    } catch (error) {
      console.error("Error fetching session data:", error);
      setError("An unexpected error occurred");
    }
  };

  return <></>;
};

export default TIRADSCalculator;
