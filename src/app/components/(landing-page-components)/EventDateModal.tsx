import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface EventDateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDateSelect: (date: number) => void;
  dates?: number[];
}

const EventDateModal: React.FC<EventDateModalProps> = ({ isOpen, onClose, onDateSelect, dates = [] }) => {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);

  const handleDateSelect = (date: number) => {
    setSelectedDate(date);
    onDateSelect(date);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-[#272727] text-white" aria-describedby="dialog-description">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#23AAC9]">
            {selectedDate ? 'Registration Successful' : 'Select Event Date'}
          </DialogTitle>
        </DialogHeader>
        {selectedDate ? (
          <div className="text-gray-300">
            <p>You're registered to attend on:</p>
            <p className="font-bold mt-2">
              {new Date(selectedDate).toLocaleString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                timeZoneName: 'short'
              })}
            </p>
            <p className="mt-4">You will receive an email with a link to the webinar shortly.</p>
            <Button onClick={onClose} className="mt-6 w-full bg-[#23AAC9] hover:bg-[#1C8BA3] text-white">
              Close
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            {dates.map((date) => (
              <Button
                key={date}
                onClick={() => handleDateSelect(date)}
                className="w-full bg-[#23AAC9] hover:bg-[#1C8BA3] text-white"
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
        )}
      </DialogContent>
    </Dialog>
  );
};

export default EventDateModal;