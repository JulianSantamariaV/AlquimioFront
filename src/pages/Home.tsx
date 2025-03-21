import CardProduct from "@/components/cards/CardProduct";
import ProductWideCard from "@/components/cards/CardProductWIde";
import { CarouselMine } from "@/components/carousel/CarouselMine";
import { ServicesIcons } from "@/components/carousel/CarouselServicesIcons";
import { useProducts } from "@/hooks/useProduct";

const HomePage = () => {
  const { products, loading, error } = useProducts();

  if (loading) return <p className="text-center">Cargando productos...</p>;
  if (error) return <p className="text-center text-gray-700">{error}</p>;

  return (
    <div>
      {/* Sección del Carrusel */}
      <div className="flex w-4/5 mx-auto justify-center">
        <CarouselMine carouselImg={["/carousel/carousel-1.svg", "/carousel/carousel-2.svg", "/carousel/carousel-3.svg"]} />
      </div>

      <section className="container mx-auto max-w-3xl p-6">
        {/* Productos Destacados */}
        <h1 className="text-2xl font-bold text-slate-800">Productos Destacados</h1>

        {products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 my-6">
            {products.slice(0, 3).map((product) => (
              <CardProduct key={product.productid} productid={product.productid} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No hay productos disponibles.</p>
        )}

        <hr />

        {/* Servicios */}
        <h2 className="text-xl font-bold text-slate-800">Nuestros Servicios</h2>
        <ServicesIcons />

        <hr />

        {/* Ofertas Especiales */}
        <h3 className="text-xl font-bold text-slate-800">Ofertas Especiales</h3>

        {/* {products.length > 3 ? (
          <div className="flex flex-col gap-4 my-6">
            {products.slice(3, 5).map((product) => (
              <ProductWideCard key={product.productid} productid={product.productid} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No hay ofertas especiales disponibles.</p>
        )} */}
      </section>
    </div>
  );
};

export default HomePage;
