import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface EventDateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDateSelect: (date: number) => void;
  dates?: number[];  // Optional prop
}

const EventDateModal: React.FC<EventDateModalProps> = ({ isOpen, onClose, onDateSelect, dates = [] }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-[#272727] text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#23AAC9]">Select Event Date</DialogTitle>
        </DialogHeader>
        <div className="mt-4 space-y-4">
          {dates.map((date, index) => (
            <Button
              key={index}
              onClick={() => onDateSelect(date)}
              className="w-full bg-[#393939] hover:bg-[#4A4A4A] text-white"
            >
              {new Date(date).toLocaleString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                timeZoneName: 'short'
              })}
            </Button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EventDateModal;