import { ReactNode } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "../ui/carousel";

interface MainCarouselProps {
  children?: ReactNode;
  carouselImg?: string[];
}



const MainCarousel: React.FC<MainCarouselProps> = ({ children, carouselImg }) => {
  return (
    <Carousel className="w-full h-full object-cover">
      <CarouselContent>
        {carouselImg && carouselImg.length > 0 ? (
         
          carouselImg.map((img, index) => (
            <CarouselItem key={index}>
              <img src={img} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
            </CarouselItem>
          ))
        ) : (
          
          <CarouselItem>{children}</CarouselItem>
        )}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default MainCarousel;
