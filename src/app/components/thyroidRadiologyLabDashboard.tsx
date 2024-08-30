import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Player from "@mux/mux-player-react";

interface Course {
  title: string;
  description: string;
  imageUrl: string;
  status: "live" | "draft" | "archived";
}

const courses: Course[] = [
  {
    title: "Thyroid Ultrasound Basics",
    description: "Learn the fundamentals of thyroid ultrasound imaging",
    imageUrl: "/neck-us.png",
    status: "live",
  },
  {
    title: "Nodule Characterization",
    description: "Techniques for characterizing thyroid nodules on ultrasound",
    imageUrl: "/neck-us.png",
    status: "draft",
  },
  {
    title: "TI-RADS Classification",
    description:
      "Applying the TI-RADS system for thyroid nodule risk stratification",
    imageUrl: "/neck-us.png",
    status: "live",
  },
];

const ThyroidRadiologyLabDashboard: React.FC = () => {
  return (
    <div className="bg-gray-900 min-h-screen">
      <section
        className="hero bg-cover bg-center text-white py-12 px-6 relative"
        style={{ backgroundImage: "url('/neck-us.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10">
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-bold mb-4">
              Welcome to Thyroid Radiology Lab
            </h1>
            <p className="text-lg mb-6">
              Led by Dr. John Doe, our mission is to provide high-quality,
              interactive learning experiences for radiologists interested in
              thyroid imaging.
            </p>
            <div className="flex items-center mb-6">
              <Image
                src="/hp-photo.png"
                alt="Dr. John Doe"
                width={80}
                height={80}
                className="rounded-full mr-4"
              />
              <div>
                <h3 className="text-xl font-semibold">Dr. John Doe</h3>
                <p className="text-gray-300">
                  MD, FRCR, Consultant Radiologist
                </p>
              </div>
            </div>
            <div className="flex items-center mb-6">
              <span className="text-2xl font-semibold mr-2">$99</span>
              <span className="text-gray-300">/ month</span>
            </div>
            <button className="bg-white text-blue-600 py-2 px-4 rounded font-semibold hover:bg-blue-100">
              Start Learning
            </button>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <Player
              streamType="on-demand"
              playbackId="YOUR_PLAYBACK_ID"
              metadata={{
                video_id: "video-id-54321",
                video_title: "Thyroid Radiology Lab Intro",
                viewer_user_id: "user-id-007",
              }}
            />
          </div>
        </div>
      </section>

      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6 text-white">Featured Courses</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <Card
              key={index}
              className="bg-gray-800 border-gray-700 hover:bg-gray-700 transition-colors"
            >
              <CardHeader>
                <div className="relative w-full h-48">
                  <Image
                    src={"/neck-us.png"}
                    alt={course.title}
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full mb-2"
                  />
                </div>
                <CardTitle className="text-lg font-semibold mt-4 mb-1 text-white">
                  {course.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-sm mb-2">
                  {course.description}
                </p>
                <Badge
                  variant={course.status === "live" ? "default" : "secondary"}
                  className="uppercase text-xs"
                >
                  {course.status}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThyroidRadiologyLabDashboard;
