import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, FileQuestion } from "lucide-react";

interface Asset {
  id: number;
  title: string;
  type: 'video' | 'quiz';
  description: string;
  imageSrc: string;
}

interface Case {
  id: number;
  title: string;
  patientInfo: string;
}

interface LandingPageFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
  imageSrc: string;
}

interface LandingPage {
  id: number;
  title: string;
  features: LandingPageFeature[];
}

const InteractiveContentCreator: React.FC = () => {
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);
  const [selectedCase, setSelectedCase] = useState<Case | null>(null);
  const [selectedLandingPage, setSelectedLandingPage] = useState<LandingPage | null>(null);
  const [newFeature, setNewFeature] = useState<LandingPageFeature>({
    icon: <Play size={24} />,
    title: '',
    description: '',
    imageSrc: '',
  });

  // Mock data - replace with actual data fetching
  const assets: Asset[] = [
    { id: 1, title: 'Video: CT Interpretation', type: 'video', description: 'Learn CT interpretation techniques', imageSrc: '/mri-brain.png' },
    { id: 2, title: 'Quiz: Thyroid Nodules', type: 'quiz', description: 'Test your knowledge on thyroid nodules', imageSrc: '/parotid.png' },
  ];

  const cases: Case[] = [
    { id: 1, title: 'Case: Neck Lump', patientInfo: 'Female, 34' },
    { id: 2, title: 'Case: Thyroid Nodule', patientInfo: 'Male, 45' },
  ];

  const landingPages: LandingPage[] = [
    { 
      id: 1, 
      title: 'Case Tutorials',
      features: [
        {
          icon: <Play size={24} />,
          title: "Learn about Neck Lumps",
          description: "Female aged 34 with right sided neck lump",
          imageSrc: "/mri-brain.png",
        },
        // ... other features
      ]
    },
    { id: 2, title: 'Quizzes', features: [] },
  ];

  const handleCreateContent = () => {
    if (selectedAsset && selectedCase && selectedLandingPage) {
      const newFeature: LandingPageFeature = {
        icon: selectedAsset.type === 'video' ? <Play size={24} /> : <FileQuestion size={24} />,
        title: selectedAsset.title,
        description: `${selectedCase.patientInfo} - ${selectedAsset.description}`,
        imageSrc: selectedAsset.imageSrc,
      };

      const updatedLandingPage = {
        ...selectedLandingPage,
        features: [...selectedLandingPage.features, newFeature],
      };

      // Here you would typically update this in your backend
      console.log('Updated Landing Page:', updatedLandingPage);

      // Reset selections after creation
      setSelectedAsset(null);
      setSelectedCase(null);
      setSelectedLandingPage(null);
    }
  };

  const handleAddNewFeature = () => {
    if (selectedLandingPage && newFeature.title && newFeature.description) {
      const updatedLandingPage = {
        ...selectedLandingPage,
        features: [...selectedLandingPage.features, newFeature],
      };

      // Here you would typically update this in your backend
      console.log('Added new feature:', updatedLandingPage);

      // Reset new feature form
      setNewFeature({
        icon: <Play size={24} />,
        title: '',
        description: '',
        imageSrc: '',
      });
    }
  };

  return (
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-white">Interactive Content Creator</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card className="bg-gray-800 text-gray-100">
          <CardHeader>
            <CardTitle className="text-white">Select Asset</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-gray-300">Title</TableHead>
                  <TableHead className="text-gray-300">Type</TableHead>
                  <TableHead className="text-gray-300">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {assets.map((asset) => (
                  <TableRow key={asset.id} className="border-gray-700">
                    <TableCell className="text-gray-300">{asset.title}</TableCell>
                    <TableCell className="text-gray-300">{asset.type}</TableCell>
                    <TableCell>
                      <Button
                        variant={selectedAsset?.id === asset.id ? "secondary" : "outline"}
                        onClick={() => setSelectedAsset(asset)}
                        className="text-gray-800 bg-gray-200 hover:bg-gray-300 hover:text-gray-900"
                      >
                        {selectedAsset?.id === asset.id ? "Selected" : "Select"}
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 text-gray-100">
          <CardHeader>
            <CardTitle className="text-white">Select Case</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-gray-300">Title</TableHead>
                  <TableHead className="text-gray-300">Patient Info</TableHead>
                  <TableHead className="text-gray-300">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {cases.map((case_) => (
                  <TableRow key={case_.id} className="border-gray-700">
                    <TableCell className="text-gray-300">{case_.title}</TableCell>
                    <TableCell className="text-gray-300">{case_.patientInfo}</TableCell>
                    <TableCell>
                      <Button
                        variant={selectedCase?.id === case_.id ? "secondary" : "outline"}
                        onClick={() => setSelectedCase(case_)}
                        className="text-gray-800 bg-gray-200 hover:bg-gray-300 hover:text-gray-900"
                      >
                        {selectedCase?.id === case_.id ? "Selected" : "Select"}
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gray-800 border-gray-700 mb-6">
        <CardHeader>
          <CardTitle className="text-white">Add to Landing Page</CardTitle>
        </CardHeader>
        <CardContent>
          <Select onValueChange={(value) => setSelectedLandingPage(landingPages.find(page => page.id.toString() === value) || null)}>
            <SelectTrigger className="w-full text-gray-100 border-gray-600">
              <SelectValue placeholder="Select a landing page" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-700">
              {landingPages.map((page) => (
                <SelectItem key={page.id} value={page.id.toString()} className="text-gray-100">{page.title}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      <Button 
        className="w-full mb-6 text-gray-100"
        onClick={handleCreateContent}
        disabled={!selectedAsset || !selectedCase || !selectedLandingPage}
      >
        Create Interactive Content
      </Button>

      <Card className="bg-gray-800 border-gray-700 mb-6">
        <CardHeader>
          <CardTitle className="text-white">Add Custom Feature</CardTitle>
        </CardHeader>
        <CardContent>
          <Input
            className="mb-2 bg-gray-700 text-gray-100 border-gray-600"
            placeholder="Feature Title"
            value={newFeature.title}
            onChange={(e) => setNewFeature({...newFeature, title: e.target.value})}
          />
          <Input
            className="mb-2 bg-gray-700 text-gray-100 border-gray-600"
            placeholder="Feature Description"
            value={newFeature.description}
            onChange={(e) => setNewFeature({...newFeature, description: e.target.value})}
          />
          <Input
            className="mb-2 bg-gray-700 text-gray-100 border-gray-600"
            placeholder="Image Source"
            value={newFeature.imageSrc}
            onChange={(e) => setNewFeature({...newFeature, imageSrc: e.target.value})}
          />
          <Button 
            className="w-full bg-pink-500 hover:bg-pink-600 text-white"
            onClick={handleAddNewFeature}
            disabled={!selectedLandingPage || !newFeature.title || !newFeature.description}
          >
            Add Custom Feature
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default InteractiveContentCreator;