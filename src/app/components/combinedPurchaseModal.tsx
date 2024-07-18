import React, { useState } from "react";
import Image from "next/image";

interface PurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  userName: string;
}

const occupations = [
  "Surgeon",
  "Endocrinologist",
  "Dentist",
  "General Practitioner",
  "Nurse Practitioner",
  "Other",
];

const CombinedPurchaseModal: React.FC<PurchaseModalProps> = ({
  isOpen,
  onClose,
  userName,
}) => {
  const [occupation, setOccupation] = useState("");
  const [institution, setInstitution] = useState("");

  if (!isOpen) return null;

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

  const handlePurchase = () => {
    // Handle purchase logic here
    console.log("Occupation:", occupation);
    console.log("Institution:", institution);
    // Add your purchase logic
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
          Welcome to our learning community, {userName}!
        </h2>
        <p className="text-white mb-6">
          Before we get you started on your journey to mastery, let's get you
          set up.
        </p>
        <div className="mb-4">
          <label
            htmlFor="occupation"
            className="block text-[#23aac9] text-sm font-bold mb-2"
          >
            What is your occupation / specialty?
          </label>
          <select
            id="occupation"
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
            className="w-full bg-[#1E1E1E] text-white rounded-md py-2 px-3"
          >
            <option value="">Select occupation</option>
            {occupations.map((occ) => (
              <option key={occ} value={occ}>
                {occ}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-6">
          <label
            htmlFor="institution"
            className="block text-[#23aac9] text-sm font-bold mb-2"
          >
            Primary institution of practice
          </label>
          <input
            type="text"
            id="institution"
            value={institution}
            onChange={(e) => setInstitution(e.target.value)}
            placeholder="e.g. Mayo Clinic"
            className="w-full bg-[#1E1E1E] text-white rounded-md py-2 px-3"
          />
        </div>
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
          onClick={handlePurchase}
        >
          Unlock Full Course
        </button>
        <button
          className="w-full text-[#23aac9] text-sm hover:underline"
          onClick={onClose}
        >
          I'll think about it
        </button>
      </div>
    </div>
  );
};

export default CombinedPurchaseModal;
