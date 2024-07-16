"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import CombinedPurchaseModal from "./combinedPurchaseModal";
import TermsAndConditions from "./termsAndConditions";
import KahootTiradsSCalculator from "./KahootTiradsCalculator";
import KahootTIRADSCalculator from "./KahootTiradsCalculator";
import SlidePresenter from "./slidePresenter";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SlidePresenter />
      {/* <KahootTIRADSCalculator /> */}
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
