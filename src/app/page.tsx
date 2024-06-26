"use client";

import { useState } from "react";
import FeedbackModal from "./feedbackModal";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to My Course</h1>
      <Button onClick={() => setIsModalOpen(true)}>Open Feedback Form</Button>
      <FeedbackModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  );
}
