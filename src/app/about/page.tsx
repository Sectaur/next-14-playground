"use client"
import Image from 'next/image';
import ContactForm from '../components/ContactForm';
import Header from '../components/(landing-page-components)/Header';
import Footer from '../components/(landing-page-components)/Footer';

export default function AboutPage() {
  return (
    <div className="bg-[#070707] text-white min-h-screen">
      <Header logo="/resectaur-learning-logo.svg" />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-[#23AAC9]">About Us</h1>
        
        <div className="flex flex-col md:flex-row items-start mb-12">
          <div className="md:w-1/3 mb-6 md:mb-0 md:mr-8">
            <Image
              src="/hp-photo.png"
              alt="Dr. Hament Pandya"
              width={300}
              height={300}
              className="rounded-lg"
            />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-2xl font-semibold mb-4 text-[#23AAC9]">Dr. Hament Pandya</h2>
            <p className="mb-4 text-gray-300">
              Dr. Hament Pandya is a renowned radiologist with over 20 years of experience in the field.
              He specializes in advanced imaging techniques and has been a pioneer in implementing
              AI-assisted diagnostic tools in radiology.
            </p>
            <p className="text-gray-300">
              Dr. Pandya is passionate about education and has dedicated his career to training the
              next generation of radiologists. He has authored numerous publications and is a frequent
              speaker at international conferences.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6 text-[#23AAC9]">Contact Us</h2>
          <ContactForm />
        </div>
      </div>
      <Footer text="© 2023 Your Company Name. All rights reserved." />
    </div>
  );
}