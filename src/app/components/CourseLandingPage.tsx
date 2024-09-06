import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const CourseLandingPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <header className="py-8">
        <nav className="flex justify-between items-center">
          <div>Logo</div>
          <ul className="flex space-x-4">
            <li>COURSE DETAILS</li>
            <li>ABOUT</li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="text-center py-16">
          <h1 className="text-4xl font-bold mb-4">FINALLY STOP STRUGGLING WITH NECK ULTRASOUND ANATOMY</h1>
          <h2 className="text-2xl mb-8">Neck Ultrasound Anatomy & Scanning Technique Fundamentals</h2>
          <p className="mb-8">A Step-by-Step, Online, Interactive Course With Ultrasound Correlation Designed To Take You From Novice To Expert</p>
          <Button size="lg">Sign Up For Access To Free Learning Modules</Button>
        </section>

        <section className="py-16">
          <h2 className="text-3xl font-bold text-center mb-8">Level Up Your Neck Ultrasound Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">What You'll Learn</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Comprehensive neck anatomy</li>
                <li>Proper scanning techniques</li>
                <li>Interpretation of ultrasound images</li>
                <li>Common pathologies and their appearances</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Who This Course Is For</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Radiologists</li>
                <li>Sonographers</li>
                <li>Medical students</li>
                <li>Anyone interested in neck ultrasound</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16">
          <h2 className="text-3xl font-bold text-center mb-8">Top 3 Reasons Why You're Struggling With Neck Ultrasound...</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "Lack of structured learning",
              "Insufficient practice materials",
              "Complex anatomy visualization"
            ].map((reason, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{index + 1}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{reason}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="py-16">
          <h2 className="text-3xl font-bold text-center mb-8">Course Curriculum</h2>
          <div className="space-y-4">
            {[
              "Module 1: Introduction to Neck Ultrasound",
              "Module 2: Thyroid and Parathyroid Glands",
              "Module 3: Lymph Nodes and Vessels",
              "Module 4: Muscles and Soft Tissues",
              "Module 5: Advanced Techniques and Case Studies"
            ].map((module, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{module}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Detailed description of the module content...</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="py-16">
          <h2 className="text-3xl font-bold text-center mb-8">Meet Your Instructor</h2>
          <div className="flex flex-col items-center">
            <Avatar className="w-32 h-32 mb-4">
              <AvatarImage src="/path-to-instructor-image.jpg" alt="Instructor" />
              <AvatarFallback>IN</AvatarFallback>
            </Avatar>
            <h3 className="text-2xl font-semibold mb-2">Dr. Jane Doe</h3>
            <p className="text-center max-w-2xl">
              Dr. Jane Doe is a renowned radiologist with over 15 years of experience in neck ultrasound.
              She has published numerous papers and is passionate about teaching the next generation of medical professionals.
            </p>
          </div>
        </section>

        <section className="py-16">
          <h2 className="text-3xl font-bold text-center mb-8">What Our Students Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "John S.", text: "This course transformed my understanding of neck ultrasound." },
              { name: "Sarah M.", text: "The interactive modules made learning enjoyable and effective." },
              { name: "Dr. Robert L.", text: "I highly recommend this course to all radiology residents." }
            ].map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <p className="italic mb-4">"{testimonial.text}"</p>
                  <p className="font-semibold">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="py-16">
          <h2 className="text-3xl font-bold text-center mb-8">Course Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Interactive 3D models",
              "Self-paced learning",
              "Expert video lectures",
              "Practice quizzes",
              "Case study analysis",
              "Mobile-friendly platform",
              "Certificate of completion",
              "Lifetime access"
            ].map((feature, index) => (
              <Card key={index}>
                <CardContent className="flex items-center justify-center h-32">
                  <p className="text-center font-semibold">{feature}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="py-16 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Master Neck Ultrasound?</h2>
          <Button size="lg">Enroll Now</Button>
        </section>
      </main>

      <footer className="py-8 text-center">
        <p>© 2024 BY RESECTAUR</p>
      </footer>
    </div>
  );
};

export default CourseLandingPage;