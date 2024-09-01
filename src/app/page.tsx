"use client";

import { useState } from "react";
import TIRADSCalculator from "./components/TIRADSCalculator";
import TIRADSLabeler from "./components/TIRADSlabeler";
import LearningSpaces, { ContentType } from "./components/learningSpaces";
import ThyroidRadiologyLabDashboard from "./components/thyroidRadiologyLabDashboard";
import UnauthenticatedLandingPage from "./components/unauthenticatedLandingPage";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <UnauthenticatedLandingPage />
      {/* <ThyroidRadiologyLabDashboard /> */}
      {/* <SlidePresenter /> */}
      {/* <TIRADSLabeler /> */}
      {/* <TIRADSCalculator /> */}

      {/* <h1 className="text-4xl font-bold mb-8">Welcome to My Course</h1>

      <Button onClick={() => setIsModalOpen(true)}>Open Purchase Modal</Button>

      <CombinedPurchaseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        userName={"Hament"}
      /> */}
      {/* <TermsAndConditions /> */}
    </main>
  );
}
