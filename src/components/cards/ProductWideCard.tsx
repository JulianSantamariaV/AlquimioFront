import { useState } from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { IProductDisplay } from "@/utils/interfaces/IProductDisplay";


const ProductWideCard: React.FC<IProductDisplay> = ({ name, image, description, price }) => {
  const [loading, setLoading] = useState(true);

  return (
    <Card className="flex flex-col md:flex-row w-full max-w-2xl overflow-hidden shadow-md rounded-lg text-emerald-600">
      <div className="relative w-full md:w-2/5 h-40 bg-gray-100">
        {loading && <Skeleton className="absolute inset-0 w-full h-full" />}
        <img
          src={image?.[0] || "/placeholder.jpg"}
          alt={name}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            loading ? "opacity-0" : "opacity-100"
          }`}
          onLoad={() => setLoading(false)}
        />
      </div>

      <div className="flex flex-col justify-between p-4 md:w-3/5">
        <CardHeader className="p-0">
          <CardTitle className="text-lg md:text-xl text-emerald-600">{name}</CardTitle>
          <CardDescription className="text-sm text-slate-900 opacity-70">{description}</CardDescription>
          <p className="text-md font-medium text-emerald-400">${price}</p>
        </CardHeader>
        <Button className="mt-4 w-full md:w-auto bg-amber-600 text-white">Comprar</Button>
      </div>
    </Card>
  );
};

export default ProductWideCard;
