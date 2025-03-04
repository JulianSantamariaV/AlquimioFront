import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { services } from "@/data/servicesData";
import { useAutoplayCarousel } from "@/hooks/useAutoplayCarousel";



export const CarouselServiceMine = () => {
  const { carouselProps } = useAutoplayCarousel({delay: 5000});

  return (
    <div className="relative w-screen mx-auto">
      <Carousel {...carouselProps} className="w-full" aria-label="Servicios destacados">
        <CarouselContent>
          {services.map((service) => (
            <CarouselItem key={service.serviceid} className="w-full">
              <div className="relative w-screen overflow-hidden aspect-[21/7]">
                <img
                  src={service.image}
                  alt={"Imagen de " + service.label}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <h3 className="text-2xl md:text-4xl font-bold text-white text-center px-4">
                    {service.label}
                  </h3>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 top-1/2" />
        <CarouselNext className="absolute right-0 top-1/2     " />
      </Carousel>
    </div>
);
};




