import React from "react";
import Image from "next/image";

interface PurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PurchaseModal: React.FC<PurchaseModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // Set expiry date to 7 days from now
  const expiryDate = new Date();
  expiryDate.setDate(expiryDate.getDate() + 7);

  const formatDate = (date: Date) => {
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();
    const suffix = getDaySuffix(day);
    return `${day}${suffix} ${month} ${year}`;
  };

  const getDaySuffix = (day: number) => {
    if (day > 3 && day < 21) return "th";
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center font-['Inter'] p-4">
      <div className="bg-[#272727] rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-center mb-6">
          <Image
            src="/ResectaurLearningLogo.svg"
            alt="Resectaur Learning Logo"
            width={180}
            height={40}
            className="h-8 w-auto"
          />
        </div>
        <h2 className="text-2xl font-bold text-[#23aac9] mb-4">
          Unlock Full Access
        </h2>
        <p className="text-white mb-6">
          You've reached the end of the free content. Unlock the full course now
          and save with our limited-time offer!
        </p>
        <div className="bg-[#1E1E1E] rounded-lg p-4 mb-6">
          <p className="text-[#23aac9] font-bold text-sm mb-2">Special Offer</p>
          <p className="text-white text-3xl font-bold mb-1">
            $499{" "}
            <span className="text-gray-400 text-xl line-through">$650</span>
          </p>
          <p className="text-[#23aac9] text-sm">
            Offer valid until: {formatDate(expiryDate)}
          </p>
        </div>
        <button
          className="w-full bg-[#23aac9] text-white font-bold py-3 rounded-full text-lg hover:bg-[#1d8ba3] transition duration-300 mb-4"
          onClick={() => {
            /* Handle purchase */
          }}
        >
          Unlock Full Course
        </button>
        <button
          className="w-full text-[#23aac9] text-sm hover:underline"
          onClick={onClose}
        >
          maybe later
        </button>
      </div>
    </div>
  );
};

export default PurchaseModal;
