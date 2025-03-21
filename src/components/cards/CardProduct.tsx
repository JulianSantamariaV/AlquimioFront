import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "react-router-dom";
import { useProducts } from "@/hooks/useProduct";

const CardProduct: React.FC<{ productid: string }> = ({ productid }) => {
  const { products, loading } = useProducts(productid);
  const product = products.length > 0 ? products[0] : null;
  const [imageUrl, setImageUrl] = useState<string>("/placeholder.jpg");

  useEffect(() => {
    if (product?.image && product.image.length > 0) {
      setImageUrl(product.image[0]);
    }
  }, [product]);

  if (loading) {
    return (
      <article className="group w-full rounded-2xl overflow-hidden shadow-lg bg-slate-100">
        <Skeleton className="w-full h-64" />
      </article>
    );
  }

  if (!product) {
    return <div className="text-red-500">Producto no disponible</div>;
  }

  return (
    <article className="group w-full rounded-lg overflow-hidden shadow-2xs bg-slate-100 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:z-10">
      <Link to={`/Products/ProductDetail/${product.productid}` }>
        <Card className="relative cursor-pointer w-full">
          <div className="relative w-full h-64 bg-gray-200">
            <img
              src={imageUrl}
              alt={`Imagen de ${product.name}`}
              className="w-full h-full object-cover transition-opacity duration-500"
              onError={() => setImageUrl("/placeholder.jpg")}
            />
          </div>

          <CardContent className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-md font-medium text-emerald-400">${product.price}</p>
          </CardContent>
        </Card>
      </Link>

     
    </article>
  );
};

export default CardProduct;
