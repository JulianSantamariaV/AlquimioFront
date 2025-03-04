import { useState, useEffect } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "react-router-dom";
import { IProductDisplay } from "@/utils/interfaces/IProductDisplay";

type ProductCardProps = Pick<IProductDisplay, "name" | "price"> & { image?: string[] };

const ProductCard: React.FC<ProductCardProps> = ({ name, price, image = [] }) => {
  const [loading, setLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState<string>("/placeholder.jpg");

  useEffect(() => {
    if (image && image.length > 0 && image[0]) {
      setImageUrl(image[0]);
    }
  }, [image]);

  return (
    <article className="group w-full rounded-2xl overflow-hidden shadow-lg bg-slate-100 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:z-10">
      <Link to={`/producto/${name.toLowerCase().replace(/\s+/g, "-")}`}>
        <Card className="relative cursor-pointer w-full">

          <div className="relative w-full h-64 bg-gray-200">
            {loading && <Skeleton className="absolute inset-0 w-full h-full" />}
            <img
              src={imageUrl}
              alt={`Imagen de ${name}`}
              className={`w-full h-full object-cover transition-opacity duration-500 ${loading ? "opacity-0" : "opacity-100"
                }`}
              onLoad={() => setLoading(false)}
              onError={() => setImageUrl("/placeholder.jpg")}
            />
          </div>

          <CardContent className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-md font-medium text-emerald-400">${price}</p>
          </CardContent>
        </Card>
      </Link>

      <CardFooter className="flex justify-between p-0 bg-inherit">        
        <Link to="/checkout" className="w-full">
          <Button className="bg-amber-600 hover:bg-amber-700 text-white cursor-pointer w-full">
            {loading ? <Skeleton className="h-6 w-16" /> : "Rentar"}
          </Button>
        </Link>
      </CardFooter>
    </article>
  );
};

export default ProductCard;
