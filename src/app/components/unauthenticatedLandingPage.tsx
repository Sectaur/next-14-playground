import React, { useState } from "react";
import { Menu, Play, FileQuestion, Activity } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import MuxPlayer from "@mux/mux-player-react";
import Image from "next/image";

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  imageSrc: string;
}> = ({ icon, title, description, imageSrc }) => (
  <Card className="bg-[#272727] border-[#393939] transition-all duration-300 ease-in-out hover:scale-[1.02] hover:bg-[#323232] hover:shadow-lg">
    <CardContent className="p-6">
      <div className="text-[#23AAC9] mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2 text-white hover:text-[#23AAC9] transition-colors duration-300 ease-in-out">
        {title}
      </h3>
      <p className="text-[#838383] mb-4 hover:text-white transition-colors duration-300 ease-in-out">
        {description}
      </p>
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-48 object-cover rounded-md transition-all duration-300 ease-in-out hover:opacity-90"
      />
    </CardContent>
  </Card>
);

const UnauthenticatedLandingPage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#070707] text-white">
      <header className="bg-[#272727] shadow-sm">
        <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-[#23AAC9] rounded-full"
              >
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-[#272727] text-white">
              <div className="flex flex-col space-y-4">
                <Button
                  variant="ghost"
                  className="justify-start text-[#23AAC9] rounded-full"
                >
                  Home
                </Button>
                <Button
                  variant="ghost"
                  className="justify-start text-[#23AAC9] rounded-full"
                >
                  Courses
                </Button>
                <Button
                  variant="ghost"
                  className="justify-start text-[#23AAC9] rounded-full"
                >
                  About
                </Button>
                <Button
                  variant="ghost"
                  className="justify-start text-[#23AAC9] rounded-full"
                >
                  Contact
                </Button>
              </div>
            </SheetContent>
          </Sheet>
          <div className="flex items-center">
            <Image
              src="/ResectaurLearningLogo.svg"
              alt="Learning Logo"
              width={250}
              height={180}
              className="mr-2"
            />
          </div>
          <Button
            variant="outline"
            className="bg-[#272727] text-[#23AAC9] border-[#23AAC9] hover:bg-[#23AAC9] hover:text-[#272727] rounded-full transition-colors duration-300"
          >
            Login
          </Button>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section
          className="bg-[#272727] rounded-lg p-8 mb-12 bg-cover bg-center relative"
          style={{ backgroundImage: "url(/neck-us.png)" }}
        >
          <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
          <div className="flex items-center justify-between relative z-10">
            <div className="max-w-lg">
              <div className="bg-[#272727] bg-opacity-75 p-6 rounded-lg">
                <h2 className="text-4xl font-bold mb-4">
                  Master Radiology with Interactive Learning
                </h2>
                <p className="text-xl mb-6 text-[#838383]">
                  Join our upcoming webinar: "Advanced Techniques in CT
                  Interpretation"
                </p>
                <Button className="bg-[#23AAC9] text-[#272727] hover:bg-[#272727] hover:text-[#23AAC9] rounded-full transition-colors duration-300">
                  Sign Up for Webinar
                </Button>
              </div>
            </div>
            <div className="w-1/3">
              <MuxPlayer
                streamType="on-demand"
                playbackId="YOUR_MUX_PLAYBACK_ID"
                metadata={{ video_id: "video-id-12345" }}
                className="w-full aspect-video rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Explore Our Features
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Play size={24} />}
              title="Interactive Videos"
              description="Watch educational content alongside medical images for hands-on learning."
              imageSrc="/parotid.png"
            />
            <FeatureCard
              icon={<FileQuestion size={24} />}
              title="Interactive Quizzes"
              description="Test your knowledge with our comprehensive quiz system."
              imageSrc="/neck-us.png"
            />
            <FeatureCard
              icon={<Activity size={24} />}
              title="TI-RADS Practice Cases"
              description="Improve your skills with Thyroid Imaging Reporting and Data System cases."
              imageSrc="/parotid.png"
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Enhance Your Radiology Skills?
          </h2>
          <p className="text-xl mb-6 text-[#838383]">
            Join our Learning platform today and take your expertise to the next
            level.
          </p>
          <Button className="bg-[#23AAC9] text-[#272727] hover:bg-[#272727] hover:text-[#23AAC9] rounded-full transition-colors duration-300">
            Get Started for Free
          </Button>
        </section>
      </main>

      <footer className="bg-[#272727] py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-[#838383]">
          <p>&copy; 2024 Learning Platform. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default UnauthenticatedLandingPage;
