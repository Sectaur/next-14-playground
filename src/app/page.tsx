"use client";

import React from "react";
import LandingPageExample from "./pages/landingPageExample"; // Update this import path
import HeroCarouselExample from "./pages/heroCarouselExample";
import VideosLandingPageExample from "./pages/videosLandingPageExample"; // Add this import

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* <LandingPageExample /> */}
      <VideosLandingPageExample />
      {/* <HeroCarouselExample /> */}
    </main>
  );
}
