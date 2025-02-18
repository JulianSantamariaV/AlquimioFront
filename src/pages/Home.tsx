import ProductCard from '@/components/cards/ProductCard';
import ProductWideCard from '@/components/cards/ProductWideCard';
import CarouselMine from '@/components/carousel/CarouselMine';
import { Separator } from '@radix-ui/react-separator';
import { useEffect, useState } from 'react';

function Home() {
  const images = [
    "/carouselwide/CarouselWide-1.jpg",
    "/carouselwide/CarouselWide-2.jpg",
    "/carouselwide/CarouselWide-3.jpg",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="grid grid-cols-5 gap-4">
      {/* Carrusel Principal */}
      <div className="col-span-5 col-start-1 row-start-1 flex justify-center">
        <div className="w-[75%] h-full flex justify-center items-center">
          <CarouselMine carouselImg={[images[index]]} />
        </div>
      </div>

      {/* Productos */}
      <div className="col-start-2 row-start-2">
        <ProductCard />
      </div>
      <div className="col-start-2 row-start-3">
        <ProductCard />
      </div>

      {/* Cards Grandes */}
      <div className="col-span-2 row-span-2 col-start-3 row-start-2">
        <ProductWideCard />
        <ProductWideCard />
      </div>
      <div className="col-span-2 row-span-2 col-start-3 row-start-3">
        <ProductWideCard />
        <ProductWideCard />
      </div>

      {/* Segundo Carrusel */}
      <div className="col-span-5 row-start-4 col-start-1 flex justify-center">
        <div className="w-[75%] h-full flex justify-center items-center">
          <Separator/>
        </div>
      </div>
    </div>
  );
}


export default Home;
