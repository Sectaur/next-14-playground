import React from "react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FeedbackModal: React.FC<FeedbackModalProps> = ({ isOpen, onClose }) => {
  const [nps, setNps] = useState<number | null>(null);
  const [futureTopic, setFutureTopic] = useState<string>("");
  const [improvement, setImprovement] = useState<string>("");
  const [socialMedia, setSocialMedia] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (nps === null) return; // Prevent submission if no NPS is selected

    const feedbackData = {
      nps,
      futureTopic,
      improvement,
      socialMedia,
    };

    console.log("Feedback submitted:", feedbackData);
    // Here you would typically send this data to your API
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Course Feedback</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="nps" className="block">
                How likely are you to recommend this course to a colleague?
                (0-10)
              </Label>
              <div className="flex flex-wrap gap-2" id="nps">
                {[...Array(11)].map((_, i) => (
                  <Button
                    key={i}
                    type="button"
                    variant={nps === i ? "default" : "outline"}
                    className="w-10 h-10"
                    onClick={() => setNps(i)}
                  >
                    {i}
                  </Button>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="futureTopic" className="col-span-4">
                What topic would you like to see in future courses?
              </Label>
              <Input
                id="futureTopic"
                className="col-span-4"
                value={futureTopic}
                onChange={(e) => setFutureTopic(e.target.value)}
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="improvement" className="col-span-4">
                How can we improve this course?
              </Label>
              <Textarea
                id="improvement"
                className="col-span-4"
                value={improvement}
                onChange={(e) => setImprovement(e.target.value)}
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="socialMedia" className="col-span-4">
                Which social media platform do you use most for professional
                content?
              </Label>
              <Select onValueChange={setSocialMedia} required>
                <SelectTrigger className="col-span-4">
                  <SelectValue placeholder="Select a platform" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="linkedin">LinkedIn</SelectItem>
                  <SelectItem value="twitter">Twitter</SelectItem>
                  <SelectItem value="facebook">Facebook</SelectItem>
                  <SelectItem value="instagram">Instagram</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" disabled={nps === null}>
              Submit Feedback
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default FeedbackModal;
