import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type ContentType = "text" | "image" | "video" | "quiz" | "case-study";

interface ContentItem {
  title: string;
  type: ContentType;
  data: string | object;
}

interface SpaceProps {
  name: string;
  description: string;
  content: ContentItem[];
}

const ContentRenderer: React.FC<{
  type: ContentType;
  content: string | object;
}> = ({ type, content }) => {
  switch (type) {
    case "text":
      return <p>{content as string}</p>;
    case "image":
      return (
        <img
          src={content as string}
          alt="Content"
          className="max-w-full h-auto"
        />
      );
    case "video":
      return <video src={content as string} controls className="max-w-full" />;
    case "quiz":
      // Placeholder for quiz component
      return <div>Quiz component goes here</div>;
    case "case-study":
      // Placeholder for case study component
      return <div>Case study component goes here</div>;
    default:
      return <p>Unsupported content type</p>;
  }
};

const Space: React.FC<SpaceProps> = ({ name, description, content }) => {
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <p>{description}</p>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="content" className="w-full">
          <TabsList>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="discussion">Discussion</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>
          <TabsContent value="content">
            {content.map((item, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <ContentRenderer type={item.type} content={item.data} />
              </div>
            ))}
          </TabsContent>
          <TabsContent value="discussion">
            {/* Placeholder for discussion component */}
            <p>Discussion forum goes here</p>
          </TabsContent>
          <TabsContent value="resources">
            {/* Placeholder for additional resources */}
            <p>Additional resources go here</p>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default Space;
