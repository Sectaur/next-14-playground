import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Video, FileText, Users, Calendar } from 'lucide-react';
import Header from "../(landing-page-components)/Header";

interface LearningLabLandingTemplateProps {
  onSubscribe: () => void;
  headerLogo: string;
}

const LearningLabLandingTemplate: React.FC<LearningLabLandingTemplateProps> = ({ onSubscribe, headerLogo }) => {
  const features = [
    { icon: <Video className="h-6 w-6" />, title: 'Interactive Videos', description: 'Learn through engaging video content' },
    { icon: <FileText className="h-6 w-6" />, title: 'Case Studies', description: 'Analyze real-world thyroid imaging cases' },
    { icon: <Users className="h-6 w-6" />, title: 'Expert-led Discussions', description: 'Participate in forums with leading radiologists' },
    { icon: <Calendar className="h-6 w-6" />, title: 'Live Webinars', description: 'Attend scheduled live learning sessions' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-800 font-inter w-full">
      <Header logo={headerLogo} />

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 flex-grow">
        <div className="px-4 py-6 sm:px-0">
          <div className="border-4 border-dashed border-gray-300 rounded-lg h-96 bg-cover bg-center" style={{backgroundImage: "url('/neck-us.png')"}}>
            <div className="h-full flex flex-col justify-center items-center bg-white bg-opacity-50 text-gray-800 p-4">
              <h2 className="text-4xl font-bold mb-4">Master Thyroid Imaging</h2>
              <p className="text-xl mb-6 text-center">Join our community of experts and enhance your skills in thyroid ultrasound interpretation</p>
              <Button size="lg" onClick={onSubscribe} className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-3">Subscribe Now</Button>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-600">
                  {feature.icon}
                  <span className="ml-2">{feature.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-blue-600">Ready to take your thyroid imaging skills to the next level?</h3>
            <div className="mt-2 max-w-xl text-sm">
              <p className="text-gray-600">Join our community today and get access to expert-curated content, live webinars, and interactive case studies.</p>
            </div>
            <div className="mt-5">
              <Button onClick={onSubscribe} className="bg-blue-600 hover:bg-blue-700 text-white rounded-full">Subscribe to Thyroid Imaging Lab</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningLabLandingTemplate;