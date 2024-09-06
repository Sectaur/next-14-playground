"use client";

import React from "react";
import LandingPageExample from "./pages/landingPageExample"; // Update this import path
import InteractiveContentCreator from '../app/components/interactiveContentCreator'; // Adjust the path as needed
import MockedTIRADSCalculator from "./components/(tirads)/TIRADSCalculator";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* <LandingPageExample /> */}
      {/* <InteractiveContentCreator /> */}
      <MockedTIRADSCalculator />
    </main>
  );
}
