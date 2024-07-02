import React, { useState, useEffect } from "react";
import Image from "next/image";

interface PurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PurchaseModal: React.FC<PurchaseModalProps> = ({ isOpen, onClose }) => {
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hour in seconds

  useEffect(() => {
    if (!isOpen) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  if (!isOpen) return null;

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
          Continue your journey to neck ultrasound mastery. Unlock the full
          course now and save!
        </p>
        <div className="bg-[#1E1E1E] rounded-lg p-4 mb-6">
          <p className="text-[#23aac9] font-bold text-sm mb-2">
            Limited Time Offer
          </p>
          <p className="text-white text-3xl font-bold mb-1">
            $499{" "}
            <span className="text-gray-400 text-xl line-through">$650</span>
          </p>
          <p className="text-[#23aac9] text-sm">
            Offer expires in: {formatTime(timeLeft)}
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
          Maybe later
        </button>
      </div>
    </div>
  );
};

export default PurchaseModal;
