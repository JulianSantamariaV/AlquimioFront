import Autoplay from "embla-carousel-autoplay";
import { CarouselProps } from "../../utils/types/interfaces/ICarousel";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "../ui/carousel";
import React from "react";



const CarouselMine: React.FC<CarouselProps> = ({ children, carouselImg }) => {
  const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  const stopAutoplay = () => plugin.current.stop();
  const resetAutoplay = () => plugin.current.reset();

  return (
    <div className="w-full h-full">
      <Carousel
        plugins={[plugin.current]}
        onMouseEnter={stopAutoplay}
        onMouseLeave={resetAutoplay}>

        <CarouselContent>
          {carouselImg?.length ? (
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
            <CarouselItem>{children}</CarouselItem>
          )}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};


export default CarouselMine;
