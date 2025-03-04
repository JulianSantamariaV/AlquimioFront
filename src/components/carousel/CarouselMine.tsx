import { useAutoplayCarousel } from "@/hooks/useAutoplayCarousel";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "../ui/carousel";
import React from "react";
import { ICarouselProps } from "@/utils/interfaces/ICarouselProps";



export const CarouselMine: React.FC<ICarouselProps> = ({ carouselImg }) => {
  const { carouselProps } = useAutoplayCarousel();

  return (
    <div className="flex justify-center w-full">
      <Carousel
      className="w-full h-80"
        {...carouselProps}
        aria-label="Hero"
      >
        <CarouselContent>
          {carouselImg?.length > 0 ? (
            carouselImg.map((img, index) => (
              <CarouselItem key={index}>
                <img
                  className="w-full h-80 object-cover opacity-100 hover:opacity-90"
                  src={img}
                  alt={`Slide ${index + 1}`}
                />
              </CarouselItem>
            ))
          ) : (
            <CarouselItem>
              <div className="flex items-center justify-center w-full h-80 bg-gray-200 text-gray-500">
                No images available
              </div>
            </CarouselItem>
          )}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>

  );
};
