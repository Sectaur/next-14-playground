"use client";

import React from "react";
import ExamplePage from "./pages/example"; // Update this import path

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <ExamplePage />
    </main>
  );
}
