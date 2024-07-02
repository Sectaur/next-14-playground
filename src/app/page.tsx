"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import PurchaseModal from "./purchaseModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold mb-8">Welcome to My Course</h1>

      <Button onClick={() => setIsModalOpen(true)}>Open Purchase Modal</Button>

      <PurchaseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  );
}
