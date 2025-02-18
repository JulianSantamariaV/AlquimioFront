import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CarouselProps } from "../interfaces/ICarousel";

const CarouselTest: React.FC<CarouselProps> = ({ children, carouselImg }) => {
  const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  const stopAutoplay = () => plugin.current.stop();
  const resetAutoplay = () => plugin.current.reset();

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={stopAutoplay}
      onMouseLeave={resetAutoplay}
    >
      <CarouselContent>
        {carouselImg?.map((img, index) => (
          <CarouselItem key={index}>
            <div>
              <Card>
                <CardContent className="flex w-full h-80 items-center justify-center p-0">
                  <img
                    className="flex items-center w-full h-full justify-center object-fit opacity-100 hover:opacity-90 transition-opacity"
                    src={img}
                    alt={`Slide ${index + 1}`}
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CarouselTest;
