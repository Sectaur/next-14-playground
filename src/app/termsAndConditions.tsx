import React, { useState, useEffect } from "react";
import termsData from "./terms_and_conditions.json";
import { v4 as uuidv4 } from "uuid";

interface Section {
  id: string;
  sectionTitle: string;
  content: Array<{ type: string; text?: string; items?: string[] }>;
  order: number;
}

const TermsAndConditions: React.FC = () => {
  const [terms, setTerms] = useState<Section[]>([]);

  useEffect(() => {
    setTerms(termsData);
  }, []);

  const generateUUID = () => {
    let UUID = uuidv4();
    console.log(UUID);
  };

  return (
    <div className="font-inter bg-[#272727] text-white min-h-screen p-4 md:p-8 flex flex-col items-center">
      <div className="w-full max-w-3xl">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Terms and Conditions
        </h1>
        <div
          className="mb-8 overflow-y-auto max-h-[60vh] pr-4"
          style={{ scrollbarWidth: "thin" }}
        >
          {terms.map((section) => (
            <div key={section.id} className="mb-6">
              <h2 className="text-xl font-semibold mb-2">
                {section.sectionTitle}
              </h2>
              {section.content.map((item, index) => (
                <div key={index} className="mb-2">
                  {item.type === "paragraph" && <p>{item.text}</p>}
                  {item.type === "list" && (
                    <ul className="list-disc pl-5">
                      {item.items?.map((listItem, i) => (
                        <li key={i}>{listItem}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <button
            className="bg-[#23AAC9] text-white font-semibold py-2 px-6 rounded-full hover:bg-opacity-90 transition duration-300"
            onClick={generateUUID}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
