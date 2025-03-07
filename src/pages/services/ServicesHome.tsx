import CardService from "@/components/cards/CardService";
import { CarouselServiceMine } from "@/components/carousel/CarouselServiceMine";
import { useService } from "@/hooks/useService";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

export const ServicesHome = () => {
  const { services, loading, error } = useService();

  if (loading) return <Skeleton className="w-full h-screen" />;
  if (error) return <p className="text-center font-semibold">{error}</p>;

  return (
    <div className="w-full mx-auto">
      
      <div className="relative shadow-xl">
        <CarouselServiceMine />
      </div>

      
      <section className="py-16 px-6 text-center">
        <h1 className="text-5xl font-bold text-slate-900 mb-10">Explora nuestros Servicios</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <CardService key={service.serviceid} {...service} />
          ))}
        </div>
      </section>

      
      <section className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-12 rounded-lg shadow-lg mx-6 md:mx-16">
        <h2 className="text-3xl font-semibold text-center">¿Por qué elegirnos?</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="p-6 bg-white/20 rounded-lg shadow-md text-center">
            <h3 className="text-lg font-bold">✅ Calidad Garantizada</h3>
            <p className="text-white/90">Servicios verificados para garantizar tu satisfacción.</p>
          </div>
          <div className="p-6 bg-white/20 rounded-lg shadow-md text-center">
            <h3 className="text-lg font-bold">💬 Soporte 24/7</h3>
            <p className="text-white/90">Siempre disponibles para ayudarte.</p>
          </div>
          <div className="p-6 bg-white/20 rounded-lg shadow-md text-center">
            <h3 className="text-lg font-bold">💲 Precios Competitivos</h3>
            <p className="text-white/90">La mejor calidad al mejor precio.</p>
          </div>
        </div>
      </section>

     
      <div className="flex justify-center my-12">
        <Button variant="default" size="lg" className="px-8 py-3 text-lg shadow-md hover:scale-105 transition-transform">
          Ver más servicios
        </Button>
      </div>
    </div>
  );
};
