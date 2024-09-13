import React from 'react';
import Image from 'next/image';
import MockedTIRADSCalculator from './TIRADSCalculator';
import { Card, CardContent } from "@/components/ui/card";
import Header from '../(landing-page-components)/Header';
import Footer from '../(landing-page-components)/Footer';

const TIRADSEvaluationPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      <Header logo="/resectaur-learning-logo.svg" />
      <div className="flex flex-grow">
        <div className="w-1/2 overflow-y-auto p-4">
          <div className="w-2/3 mx-auto">
            <MockedTIRADSCalculator />
          </div>
        </div>
        <div className="w-1/2 p-4">
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-4">
              <h2 className="text-2xl font-bold mb-4 text-white">Thyroid Nodule Image Panel</h2>
              <div className="relative w-full h-[calc(100vh-200px)]">
                <Image
                  src="/thyroid-nodule.jpg"
                  alt="Thyroid Nodule"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer text="© 2024 Your Company Name. All rights reserved." />
    </div>
  );
};

export default TIRADSEvaluationPage;