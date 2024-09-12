import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import Header from '../(landing-page-components)/Header';
import Footer from '../(landing-page-components)/Footer';
import MuxPlayer from '@mux/mux-player-react';
import Image from 'next/image';


const ResectaurLandingPage: React.FC = () => {
  return (
    <div className="font-inter text-[#393939] w-full">
     <Header logo="/resectaur-learning-logo.svg" />
      
      {/* Section 1 - Hero Section */}
      <section className="relative bg-cover bg-center py-8 md:py-24 flex flex-col" style={{backgroundImage: "url('/neck-us.png')"}}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto relative z-10 flex-grow">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-white px-4 md:pr-8 mb-4 md:mb-0">
              <h6 className="text-sm uppercase tracking-wider mb-2">Radiology Course</h6>
              <h1 className="text-2xl md:text-5xl font-bold mb-2 md:mb-4">Neck Ultrasound Anatomy & Scanning Technique Course</h1>
              <p className="text-base md:text-lg mb-4 md:mb-6">A step-by-step interactive online course with ultrasound correlation designed to build confidence in neck ultrasound examinations</p>
              <Button className="bg-[#23AAC9] hover:bg-[#1D8BA3] text-white hover:text-white rounded-full">Create your Free Account</Button>
              <p className="text-xs mt-2">Register to try free modules before unlocking the full course for $USD499!</p>
            </div>
            <div className="md:w-1/2">
              <div className="aspect-w-16 aspect-h-9">
                <MuxPlayer
                  streamType="on-demand"
                  playbackId="YOUR_PLAYBACK_ID"
                  metadata={{
                    video_id: "video-id-123456",
                    video_title: "Course Introduction Video",
                    viewer_user_id: "user-id-abc123"
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative z-10 text-center mt-2 md:hidden">
          <div className="w-16 h-16 mx-auto bg-white bg-opacity-20 rounded-full flex items-center justify-center animate-fadeIn">
            <svg className="w-10 h-10 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </section>

      {/* Section 2 - Key Benefits */}
      <section className="py-16 px-4">
        <h2 className="text-2xl font-bold text-black text-center mb-8">Optimise your approach to head and neck ultrasound...</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Understand Neck Anatomy", description: "Deconstruct complex anatomy into fundamental building blocks for a deep understanding, moving beyond rote learning." },
            { title: "Optimise Scanning Technique", description: "Learn hidden techniques to quickly and accurately identify normal structures, enabling efficient scanning." },
            { title: "Interactive Scan Library", description: "Access our library of neck ultrasound scans with integrated video tutorials. Follow along for comprehensive learning and quick reference on-the-go." }
          ].map((benefit, index) => (
            <Card key={index} className="bg-white shadow-lg">
              <CardHeader>
                <div className="flex justify-center items-center mb-4">
                  <Image src="/resectaur-brandmark.svg" alt="Resectaur Brandmark" width={150} height={150} />
                </div>
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
              </CardHeader>
              <CardContent>
                <p>{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Section 3 - Agitate / Solution Section */}
      <section className="bg-[#272727] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="aspect-w-16 aspect-h-9 rounded-lg shadow-lg overflow-hidden">
              <MuxPlayer
                streamType="on-demand"
                playbackId="YOUR_PLAYBACK_ID"
                metadata={{
                  video_id: "video-id-123456",
                  video_title: "Ultrasound Demonstration",
                  viewer_user_id: "user-id-abc123"
                }}
              />
            </div>
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold mb-4">Mastering Neck Ultrasound Anatomy: From Uncertainty to Confidence</h2>
            <p className="text-xl mb-4">Practitioners often struggle with a lack of confidence when performing neck ultrasound scans.</p>
            <p className="mb-4">This uncertainty stems from the <span className="text-[#23AAC9]">complex anatomy</span> of the neck region, infrequent scanning opportunities, and the absence of a systematic approach. As a result, <span className="text-[#23AAC9]">diagnostic accuracy</span> and efficiency may suffer.</p>
            <p className="mb-6">Our comprehensive Neck Ultrasound Anatomy & Scanning Technique Fundamentals Course offers the key to unlocking your confidence.</p>
            <Button className="bg-[#23AAC9] hover:bg-[#1D8BA3] text-white hover:text-white rounded-full">Access Free Modules</Button>
            <p className="text-sm mt-2">Register to try free modules before unlocking the full course for $USD499!</p>
          </div>
        </div>
      </section>

      {/* Section 4 - Course Curriculum */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Course Curriculum</h2>
          <Accordion type="single" collapsible>
            {[
              {
                title: "PART I - HOW TO TAKE THIS COURSE",
                units: [
                  "1.1 Course Overview",
                  "1.2 Using the Interactive Platform",
                  "1.3 Setting Learning Goals"
                ]
              },
              {
                title: "PART II - PREPARATION AND OPTIMISATION",
                units: [
                  "2.1 Patient Positioning",
                  "2.2 Ultrasound Machine Settings",
                  "2.3 Probe Selection and Handling"
                ]
              },
              {
                title: "PART III - NECK ANATOMY WITH ULTRASOUND CORRELATION",
                units: [
                  "3.1 Superficial Neck Structures",
                  "3.2 Deep Neck Spaces",
                  "3.3 Vascular Structures",
                  "3.4 Lymph Node Levels"
                ]
              },
              {
                title: "PART IV - IMAGING BASED NODAL CLASSIFICATION",
                units: [
                  "4.1 Normal vs Abnormal Lymph Nodes",
                  "4.2 Benign Lymphadenopathy",
                  "4.3 Malignant Lymphadenopathy"
                ]
              },
              {
                title: "PART V - ULTRASOUND NECK STRATEGY, CHECKLISTS & KEY IMAGES",
                units: [
                  "5.1 Systematic Scanning Approach",
                  "5.2 Key Anatomical Landmarks",
                  "5.3 Documenting Findings"
                ]
              },
              {
                title: "PART VI - INTERACTIVE QUIZZES",
                units: [
                  "6.1 Anatomy Recognition Quiz",
                  "6.2 Pathology Identification Quiz",
                  "6.3 Scanning Technique Assessment"
                ]
              }
            ].map((part, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{part.title}</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-6">
                    {part.units.map((unit, unitIndex) => (
                      <li key={unitIndex} className="mb-2 text-left">{unit}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Section 5 - CME / CPD Certificate */}
      <section className="bg-[#272727] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">CME | CPD Certificate</h3>
            <p className="mb-4">Over 4 hours of content, including quizzes</p>
            <p className="font-bold">*RANZCR - 4 Points Awarded</p>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/cpd-certificate-icon.svg"
              alt="CME/CPD Certificate"
              width={500}
              height={300}
              
            />
          </div>
        </div>
      </section>

      {/* Section 6 - Bio Profile of Instructor */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">Meet your Instructor</h3>
            <h4 className="text-xl font-semibold mb-2">Dr. Hament Pandya FRANZCR</h4>
            <p className="mb-4">Dr. Pandya is a UK-trained radiologist with over 18 years of experience in head and neck imaging, who co-founded New Zealand's foremost one-stop neck lump clinic.</p>
            <Button variant="outline" className="rounded-full text-white hover:text-white bg-[#23AAC9] hover:bg-[#1D8BA3]">About Resectaur</Button>
          </div>
          <div className="md:w-1/3">
            <img src="/hp-photo.png" alt="Dr. Hament Pandya" className="rounded-full w-48 h-48 object-cover mx-auto" />
          </div>
        </div>
      </section>

      {/* Section 7 - Testimonials */}
      <section className="bg-[#1E1E1E] py-16 px-4 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">What Our Students Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Heidi, Sonographer", comment: "Really well explained and demonstrated. I finally feel that I understand neck anatomy! A 'must do' course, I'll be recommending it to all of my colleagues." },
              { name: "Lisa, Pathologist", comment: "Fantastic for a pathologist to have the opportunity to learn about head and neck ultrasound, while recapping anatomy of this region." },
              { name: "Laura, Sonographer", comment: "This was exceptionally well presented. I appreciated the detailed explanations, clear and concise instructions and lovely US imaging. Thank you and look forward to your next course!" }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-[#3A3A3A] shadow-lg">
                <CardContent className="pt-6">
                  <p className="mb-4 text-gray-200">"{testimonial.comment}"</p>
                  <div className="flex items-center">
                    <div className="text-[#23aac9] mr-2">★★★★★</div>
                    <p className="font-semibold text-gray-200">{testimonial.name}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8 - Final Call To Action */}
      <section className="py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Register now for free access to course modules.</h2>
        <p className="mb-8">Try before you buy - unlock the full course for just $USD499!</p>
        <Button className="bg-[#23AAC9] hover:bg-[#1D8BA3] text-white hover:text-white rounded-full">Access Free Modules</Button>
      </section>

    <Footer text="© 2024 Resectaur. All rights reserved." />
    </div>
  );
};

export default ResectaurLandingPage;