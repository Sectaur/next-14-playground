"use client";

import { useState } from "react";
import TIRADSCalculator from "./components/TIRADSCalculator";
import TIRADSLabeler from "./components/TIRADSlabeler";
import LearningSpaces, { ContentType } from "./components/learningSpaces";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const mockLearningSpace = {
    name: "Introduction to Web Development",
    description: "Learn the basics of HTML, CSS, and JavaScript",
    content: [
      { id: 1, title: "HTML Fundamentals", type: "lesson" as ContentType, data: {} },
      { id: 2, title: "CSS Styling", type: "lesson" as ContentType, data: {} },
      { id: 3, title: "JavaScript Basics", type: "lesson" as ContentType, data: {} },
      { id: 4, title: "Web Development Quiz", type: "quiz" as ContentType, data: {} },
    ]
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <LearningSpaces {...mockLearningSpace} /> */}
      {/* <SlidePresenter /> */}
      <TIRADSLabeler />
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
