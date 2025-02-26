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
    
    <article className="w-full max-w-sm rounded-2xl overflow-hidden shadow-lg bg-slate-100">
      <Card className="relative cursor-pointer">
        <div className="relative w-full h-64">
          {loading && <Skeleton className="absolute inset-0 w-full h-full" />}
          <img
            src={imageUrl}
            alt={name}
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              loading ? "opacity-0" : "opacity-100"
            }`}
            onLoad={() => setLoading(false)}
            onError={() => setImageUrl("/placeholder.jpg")} // 🔥 Si falla, usar placeholder
          />          
        </div>

        <CardContent className="absolute bottom-0 w-full p-4 text-white">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-md font-medium text-emerald-400">${price}</p>
        </CardContent>
      </Card>

      <CardFooter className="flex justify-between p-4 bg-white">
        <Link to={`/producto/${name.toLowerCase().replace(/\s+/g, "-")}`}>
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 cursor-pointer">Ver más</Button>
        </Link>
        <Link to="/checkout">
          <Button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 cursor-pointer">Rentar</Button>
        </Link>
      </CardFooter>
    </article>
  );
};

export default ProductCard;
