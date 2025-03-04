
import ProductCard from "@/components/cards/CardProduct";
import ProductWideCard from "@/components/cards/CardProductWIde";
import { CarouselMine } from "@/components/carousel/CarouselMine";
import { ServicesIcons } from "@/components/carousel/CarouselServicesIcons";
import SectionTitle from "@/components/title/SectionTitle";
import { Skeleton } from "@/components/ui/skeleton";
import { useProducts } from "@/hooks/useProduct";
import { useVisibleProducts } from "@/hooks/useVisibleProduct";

const ProductHome = () => {
  const { products, loading, error } = useProducts();
  const visibleProducts = useVisibleProducts();

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="w-4/5 mx-auto py-6">
        <CarouselMine carouselImg={["/placeholder.jpg", "/placeholder.jpg", "/placeholder.jpg"]} />
      </div>

      <section className="container mx-auto max-w-7xl p-6">
        {/* Productos Destacados */}
        <SectionTitle title="Productos Destacados" />
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-6">
            {[...Array(visibleProducts)].map((_, i) => (
              <Skeleton key={i} className="h-48 w-full rounded-xl" />
            ))}
          </div>
        ) : error ? (
          <p className="text-center text-gray-700">{error}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 my-6 justify-items-center">

            {products.slice(0, visibleProducts).map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        )}

        <hr className="my-6 border-gray-300" />

        {/* Nuestros Servicios */}
        <SectionTitle title="Nuestros Servicios" />
        <ServicesIcons />

        <hr className="my-6 border-gray-300" />

        {/* Ofertas Especiales */}
        <SectionTitle title="Ofertas Especiales" />
        {loading ? (
          <div className="flex flex-col gap-4 my-6">
            {[...Array(2)].map((_, i) => (
              <Skeleton key={i} className="h-28 w-full rounded-xl" />
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-4 my-6">
            {products.slice(3, 5).map((product) => (
              <ProductWideCard key={product.name} {...product} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default ProductHome;
