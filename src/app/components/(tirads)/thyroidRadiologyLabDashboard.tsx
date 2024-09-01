import React from "react";
import Image from "next/image";
import Player from "@mux/mux-player-react";
import { Menu } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

interface Course {
  title: string;
  description: string;
  imageUrl: string;
  status: "live" | "draft" | "archived";
}

interface Event {
  title: string;
  description: string;
  imageUrl: string;
  status: "live" | "draft" | "archived";
  date: string;
}

const courses: Course[] = [
  {
    title: "Course - Thyroid Ultrasound Basics",
    description: "Learn the fundamentals of thyroid ultrasound imaging",
    imageUrl: "/parotid.png",
    status: "live",
  },
  {
    title: "Interactive Videos",
    description: "Follow along with interactive thyroid ultrasound videos",
    imageUrl: "/parotid.png",
    status: "draft",
  },
  {
    title: "TI-RADS Classification Practice",
    description:
      "Applying the TI-RADS system for thyroid nodule risk stratification",
    imageUrl: "/parotid.png",
    status: "live",
  },
  {
    title: "Thyroid Ultrasound Basics",
    description: "Learn the fundamentals of thyroid ultrasound imaging",
    imageUrl: "/parotid.png",
    status: "live",
  },
  {
    title: "Nodule Characterization",
    description: "Techniques for characterizing thyroid nodules on ultrasound",
    imageUrl: "/parotid.png",
    status: "draft",
  },
  {
    title: "TI-RADS Classification",
    description:
      "Applying the TI-RADS system for thyroid nodule risk stratification",
    imageUrl: "/parotid.png",
    status: "live",
  },
];

const events: Event[] = [
  {
    title: "Master TI-RADS - An Interactive Webinar",
    description: "Learn the fundamentals of thyroid ultrasound imaging",
    imageUrl: "/parotid.png",
    status: "live",
    date: "26th October 2024 @ 10:00 AM NZDT",
  },
];

const ThyroidRadiologyLabDashboard: React.FC = () => {
  return (
    <div className="bg-gray-900 min-h-screen overflow-y-scroll">
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Image
                src="/ResectaurLearningLogo.svg"
                alt="Dr. John Doe"
                width={250}
                height={180}
                className="rounded-full mr-4 p-2"
              />
              <span className="text-white text-lg font-semibold">
                Thyroid Radiology Lab
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="/courses"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Courses
              </a>
              <a
                href="/about"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </a>
              <button className="bg-blue-600 text-white py-2 px-4 rounded font-semibold hover:bg-blue-700">
                Sign In
              </button>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Menu className="h-4 w-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                  </SheetHeader>
                  <div className="py-4">
                    <a
                      href="/courses"
                      className="block py-2 px-4 text-sm text-gray-400 hover:text-white hover:bg-gray-700"
                    >
                      Courses
                    </a>
                    <a
                      href="/about"
                      className="block py-2 px-4 text-sm text-gray-400 hover:text-white hover:bg-gray-700"
                    >
                      About
                    </a>
                    <a
                      href="/profile"
                      className="block py-2 px-4 text-sm text-gray-400 hover:text-white hover:bg-gray-700"
                    >
                      Profile
                    </a>
                    <a
                      href="/settings"
                      className="block py-2 px-4 text-sm text-gray-400 hover:text-white hover:bg-gray-700"
                    >
                      Settings
                    </a>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Menu className="h-4 w-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                  </SheetHeader>
                  <div className="py-4">
                    <a
                      href="/courses"
                      className="block py-2 px-4 text-sm text-gray-400 hover:text-white hover:bg-gray-700"
                    >
                      Courses
                    </a>
                    <a
                      href="/about"
                      className="block py-2 px-4 text-sm text-gray-400 hover:text-white hover:bg-gray-700"
                    >
                      About
                    </a>
                    <button className="bg-blue-600 text-white py-2 px-4 rounded font-semibold hover:bg-blue-700 w-full mt-4">
                      Sign In
                    </button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex flex-col md:flex-row">
        <div className="flex-1">
          <section
            className="hero bg-cover bg-center text-white py-12 px-6 relative"
            style={{ backgroundImage: "url('/neck-us.png')" }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10">
              <div className="lg:w-1/2">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  Welcome to Thyroid Radiology Lab
                </h1>
                <p className="text-base md:text-lg mb-6">
                  Led by Dr. John Doe, our mission is to provide high-quality,
                  interactive learning experiences for radiologists interested
                  in thyroid imaging.
                </p>
                <div className="flex items-center mb-6">
                  <Image
                    src="/hp-photo.png"
                    alt="Dr. John Doe"
                    width={60}
                    height={60}
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
            <h2 className="text-2xl font-bold mb-6 text-white">
              Upcoming Events
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {events.map((course, index) => (
                <Card
                  key={index}
                  className="bg-gray-800 border-gray-700 hover:bg-gray-700 transition-colors"
                >
                  <CardHeader>
                    <div className="relative w-full h-48">
                      <Image
                        src={course.imageUrl}
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
                    <p className="text-white font-bold py-2">
                      <span className="text-white">Date:</span>
                      {course.date}
                    </p>
                    <Badge
                      variant={
                        course.status === "live" ? "default" : "secondary"
                      }
                      className="uppercase text-xs"
                    >
                      {course.status}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div className="p-6 ">
            <h2 className="text-2xl font-bold mb-6 text-white">
              Featured Content
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {courses.map((course, index) => (
                <Card
                  key={index}
                  className="bg-gray-800 border-gray-700 hover:bg-gray-700 transition-colors"
                >
                  <CardHeader>
                    <div className="relative w-full h-48">
                      <Image
                        src={course.imageUrl}
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
                      variant={
                        course.status === "live" ? "default" : "secondary"
                      }
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
      </div>
    </div>
  );
};

export default ThyroidRadiologyLabDashboard;
