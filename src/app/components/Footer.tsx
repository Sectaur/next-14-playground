import React from "react";

interface FooterProps {
  text: string;
}

const Footer: React.FC<FooterProps> = ({ text }) => {
  return (
    <footer className="bg-[#272727] py-6 mt-auto w-full">
      <div className="container mx-auto px-4 text-center text-[#838383]">
        <p>{text}</p>
      </div>
    </footer>
  );
};

export default Footer;