import React, { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { DndContext, closestCenter, DragEndEvent } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Slide {
  id: number;
  data: string;
}

const SortableSlide: React.FC<{
  slide: Slide;
  isSelected: boolean;
  onClick: () => void;
}> = ({ slide, isSelected, onClick }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: slide.id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      onClick={onClick}
      className={`cursor-grab ${
        isSelected ? "ring-2 ring-[#22A9C7]" : ""
      } mb-2`}
    >
      <Card className="overflow-hidden">
        <CardContent className="p-1">
          <img
            src={slide.data}
            alt={`Slide ${slide.id}`}
            className="w-full h-auto rounded"
          />
        </CardContent>
      </Card>
    </div>
  );
};

const SlidePresenter: React.FC = () => {
  const [slides, setSlides] = useState<Slide[]>([]);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newSlides: Slide[] = [];
      Array.from(files).forEach((file, index) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          newSlides.push({
            id: slides.length + index + 1,
            data: e.target?.result as string,
          });
          if (newSlides.length === files.length) {
            setSlides((prevSlides) => [...prevSlides, ...newSlides]);
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      setSlides((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        const newItems = [...items];
        const [reorderedItem] = newItems.splice(oldIndex, 1);
        newItems.splice(newIndex, 0, reorderedItem);
        return newItems;
      });
    }
  };

  const nextSlide = () =>
    setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
  const previousSlide = () =>
    setCurrentSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (["ArrowRight", "ArrowDown"].includes(event.key)) nextSlide();
      if (["ArrowLeft", "ArrowUp"].includes(event.key)) previousSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [slides.length]);

  return (
    <div className="flex h-screen bg-zinc-900 text-white">
      <div className="w-1/4 p-4 border-r border-zinc-700">
        <Button
          className="w-full mb-4 bg-[#22A9C7] hover:bg-[#1C89A2]"
          onClick={() => document.getElementById("fileInput")?.click()}
        >
          UPLOAD ({slides.length})
        </Button>
        <input
          id="fileInput"
          type="file"
          className="hidden"
          onChange={handleFileUpload}
          accept="image/*"
          multiple
        />
        <ScrollArea className="h-[calc(100vh-120px)]">
          <DndContext
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={slides}
              strategy={verticalListSortingStrategy}
            >
              {slides.map((slide, index) => (
                <SortableSlide
                  key={slide.id}
                  slide={slide}
                  isSelected={index === currentSlideIndex}
                  onClick={() => setCurrentSlideIndex(index)}
                />
              ))}
            </SortableContext>
          </DndContext>
        </ScrollArea>
      </div>
      <div className="flex-1 flex flex-col">
        <div className="flex-1 flex items-center justify-center bg-black">
          {slides.length > 0 && (
            <img
              src={slides[currentSlideIndex].data}
              alt={`Slide ${currentSlideIndex + 1}`}
              className="max-h-full max-w-full object-contain"
            />
          )}
        </div>
        <div className="h-24 flex items-center justify-center space-x-4 bg-zinc-800">
          <Button variant="outline" onClick={previousSlide}>
            <ChevronLeftIcon className="h-6 w-6" />
          </Button>
          <Button variant="outline" onClick={nextSlide}>
            <ChevronRightIcon className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SlidePresenter;
