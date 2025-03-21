import CardProduct from "@/components/cards/CardProduct";
import { Button } from "@/components/ui/button";
import { useProducts } from "@/hooks/useProduct";
import { PlusIcon } from "lucide-react";
import { Link } from "react-router-dom";

const ProductHome = () => {
  const { products, loading, error } = useProducts();

  console.log(products);

  if (loading) return <p className="text-center">Cargando productos...</p>;
  if (error) return <p className="text-center text-gray-700">{error}</p>;

  return (

    <div className="flex justify-center mx-15 gap-2">
      <div className="mx-auto my-5 flex flex-col items-center justify-center col-span-4 row-span-2">

        <div className="flex justify-around items-center w-full">
          <h2 className="text-2xl font-bold text-slate-800">Ofertas de hoy</h2>
          <Button asChild size={"lg"} variant={"important"}>
            <Link to="/products/ProductCreate">
            Vender
              <PlusIcon className="w-5 h-5" />              
            </Link> 
          </Button>
        </div>


        <hr></hr>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 my-6">
          {products.map((product) => (
            <div key={product.productid} className="w-full">
              <CardProduct key={product.productid} {...product} 
              />
            </div>
          ))}
        </div>
      </div>
      <hr></hr>
      <div className="col-span-5 row-span-2 row-start-5">

      </div>
    </div>

  );
};

export default ProductHome;