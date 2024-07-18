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
import { URLs } from "@/Networking/urls";
import { apiCall } from "@/Networking/Api";

// ... (keep existing interfaces)

interface Props {
  mode: "standalone" | "live";
  sessionId?: string;
  isAdmin?: boolean;
}

const TIRADSCalculator: React.FC<Props> = ({ mode, sessionId, isAdmin }) => {
  // ... (keep existing state variables)
  const [aggregatedData, setAggregatedData] = useState<AggregatedResults>({});
  const [sessionData, setSessionData] = useState<AggregatedResults>({});
  const [error, setError] = useState<string | null>(null);

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
        // Handle logout scenario
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
        URLs.TIRADS_SESSION_DATA(sessionId)
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

  const submitSessionData = async () => {
    if (mode === "live" && sessionId) {
      try {
        const { apiSuccess, data, logout } = await apiCall(
          URLs.TIRADS_SUBMIT_SESSION_DATA(),
          { sessionId, selectedFeatures }
        );
        if (apiSuccess) {
          // Refresh session data after submission
          fetchSessionData(sessionId);
        } else if (logout) {
          setError("Session expired. Please log in again.");
        } else {
          setError(data.message || "Error submitting session data");
        }
      } catch (error) {
        console.error("Error submitting session data:", error);
        setError("An unexpected error occurred");
      }
    }
  };

  const aggregateSessionData = async () => {
    if (mode === "live" && sessionId && isAdmin) {
      try {
        const { apiSuccess, data, logout } = await apiCall(
          URLs.TIRADS_AGGREGATE_SESSION_DATA(),
          { sessionId }
        );
        if (apiSuccess) {
          // Refresh session data after aggregation
          fetchSessionData(sessionId);
        } else if (logout) {
          setError("Session expired. Please log in again.");
        } else {
          setError(data.message || "Error aggregating session data");
        }
      } catch (error) {
        console.error("Error aggregating session data:", error);
        setError("An unexpected error occurred");
      }
    }
  };

  // ... (keep the rest of the component code)

  return (
    <div className="w-full mx-auto bg-[#272727] text-[rgb(244,244,245)]">
      {error && <div className="bg-red-500 text-white p-2 mb-4">{error}</div>}
      {/* ... (rest of the JSX) */}
    </div>
  );
};

export default TIRADSCalculator;
