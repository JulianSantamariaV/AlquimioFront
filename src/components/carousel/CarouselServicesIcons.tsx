import { services } from "@/data/servicesData";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useAutoplayCarousel } from "@/hooks/useAutoplayCarousel";

export const ServicesIcons = () => {
  const { carouselProps } = useAutoplayCarousel();

  return (
    <div className="w-full max-w-3xl mx-auto p-6">
      <Carousel className="w-full" {...carouselProps} aria-label="Servicios">
        <CarouselContent className="-ml-1">
          {services.map(({ icon: Icon, color, label }, index) => (
            <CarouselItem key={index} className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
              <div className="flex flex-col items-center justify-start space-y-2 p-3 rounded-lg hover:scale-110 transition-transform duration-200 cursor-pointer">
                <Icon className={`w-12 h-12 ${color}`} />
                <span className="text-sm font-medium text-gray-800 text-center">{label}</span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
