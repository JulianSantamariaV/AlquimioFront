import ProductCard from "@/components/cards/ProductCard";
import ProductWideCard from "@/components/cards/ProductWideCard";
import { ServicesIcons } from "@/components/carousel/CarouselServicesIcons";
import { useProducts } from "@/hooks/useProduct";

const HomePage = () => {
  const { products, loading, error } = useProducts();

  console.log(products);

  if (loading) return <p className="text-center">Cargando productos...</p>;
  if (error) return <p className="text-center text-gray-700">{error}</p>;

  return (
    
    
    <section className="container mx-auto max-w-3xl p-6">
      <h1 className="text-2xl font-bold text-slate-800">Productos Destacados</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>

        <hr></hr>

        <h2 className="text-xl font-bold text-slate-800">Nuestros Servicios</h2>

        <ServicesIcons/>

        <hr></hr>

      <h3 className="text-xl font-bold text-slate-800">Ofertas Especiales</h3>

      <div className="flex flex-col gap-4 my-6">
        {products.slice(3, 5).map((product) => (
          <ProductWideCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default HomePage;
