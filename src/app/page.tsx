"use client";

import React from "react";
import ExamplePage from "../app/pages/example"; // Importing the ExamplePage component
import { useState } from "react";
import TIRADSCalculator from "./components/TIRADSCalculator";
import TIRADSLabeler from "./components/TIRADSlabeler";
import ThyroidRadiologyLabDashboard from "./components/thyroidRadiologyLabDashboard";
import UnauthenticatedLandingPage from "./components/unauthenticatedLandingPage";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <ExamplePage /> {/* Rendering the ExamplePage component */}
      
      {/* Commented out other components */}
      {/* <UnauthenticatedLandingPage /> */}
      {/* <ThyroidRadiologyLabDashboard /> */}
      {/* <SlidePresenter /> */}
      {/* <TIRADSLabeler /> */}
      {/* <TIRADSCalculator /> */}
      {/* <TermsAndConditions /> */}
    </main>
  );
}
