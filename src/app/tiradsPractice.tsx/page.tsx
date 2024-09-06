"use client"
import React from "react";
import TIRADSCalculator from "../components/(tirads)/TIRADSCalculator";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <TIRADSCalculator />
    </main>
  );
}