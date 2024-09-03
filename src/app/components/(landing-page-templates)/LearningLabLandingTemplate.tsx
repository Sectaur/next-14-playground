import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Video, FileText, Users, Calendar } from 'lucide-react';

interface ThyroidImagingLabLandingProps {
  onSubscribe: () => void;
}

const LearningLabLandingTemplate: React.FC<ThyroidImagingLabLandingProps> = ({ onSubscribe }) => {
  const router = useRouter();

  const features = [
    { icon: <Video className="h-6 w-6" />, title: 'Interactive Videos', description: 'Learn through engaging video content' },
    { icon: <FileText className="h-6 w-6" />, title: 'Case Studies', description: 'Analyze real-world thyroid imaging cases' },
    { icon: <Users className="h-6 w-6" />, title: 'Expert-led Discussions', description: 'Participate in forums with leading radiologists' },
    { icon: <Calendar className="h-6 w-6" />, title: 'Live Webinars', description: 'Attend scheduled live learning sessions' },
  ];

  return (
    <div>
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Thyroid Imaging Lab</h1>
          <Button variant="outline" onClick={() => router.push('/login')}>Log In</Button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 bg-cover bg-center" style={{backgroundImage: "url('/neck-us.png')"}}>
            <div className="h-full flex flex-col justify-center items-center bg-black bg-opacity-50 text-white p-4">
              <h2 className="text-4xl font-bold mb-4">Master Thyroid Imaging</h2>
              <p className="text-xl mb-6 text-center">Join our community of experts and enhance your skills in thyroid ultrasound interpretation</p>
              <Button size="lg" onClick={onSubscribe}>Subscribe Now</Button>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  {feature.icon}
                  <span className="ml-2">{feature.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Ready to take your thyroid imaging skills to the next level?</h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500">
              <p>Join our community today and get access to expert-curated content, live webinars, and interactive case studies.</p>
            </div>
            <div className="mt-5">
              <Button onClick={onSubscribe}>Subscribe to Thyroid Imaging Lab</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningLabLandingTemplate;