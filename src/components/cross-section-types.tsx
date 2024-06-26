import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { crossSectionImages } from "@/data/cross-section-data";

const CrossSectionTypes = () => {
  const [selectedSection, setSelectedSection] = useState<number | null>(null);
  return (
    <div>
      <ul className="grid grid-cols-7 gap-3">
        {crossSectionImages.map((section, index) => {
          return (
            <li
              key={section.id}
              className="text-primary cursor-pointer"
              onClick={() => setSelectedSection(index)}>
              {section.name}
            </li>
          );
        })}
      </ul>
      <Dialog
        open={Boolean(selectedSection) || selectedSection === 0}
        onOpenChange={isOpen => setSelectedSection(isOpen ? 0 : null)}>
        <DialogContent className="min-w-[1024px]">
          <DialogHeader>
            <DialogTitle>
              {crossSectionImages[selectedSection!]?.name}
            </DialogTitle>

            <div className="px-12 pt-4">
              <Carousel>
                <CarouselContent>
                  {crossSectionImages[selectedSection!]?.urls.map(
                    (url, index) => (
                      <CarouselItem key={index} className="aspect-video">
                        <img src={url} alt="Cross Section" />
                      </CarouselItem>
                    )
                  )}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CrossSectionTypes;
