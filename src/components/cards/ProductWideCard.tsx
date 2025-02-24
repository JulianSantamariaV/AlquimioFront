import { useState } from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Skeleton } from "../ui/skeleton";
import { Button } from "../ui/button";
import { z } from "zod";
import { productSchema } from "@/schemas/productSchema";


type ProductWideCardProps = z.infer<typeof productSchema>;

const ProductWideCard: React.FC<ProductWideCardProps> = ({ name, description, price, images }) => {
  const [loading, setLoading] = useState(true);


  const validation = productSchema.safeParse({ name, description, price, images });

  if (!validation.success) {
    console.error("Error en los datos del producto:", validation.error.format());
    return <div className="w-350px h-350px">
      <Skeleton/>
    </div>;
  }
  
  const image = images && images.length > 0 ? images[0] : null;
  const imageUrl = image instanceof File ? URL.createObjectURL(image) : image ?? "/placeholder.jpg";

  return (
    <Card className="flex flex-col md:flex-row w-full max-w-2xl overflow-hidden shadow-md rounded-lg text-emerald-600">

      <div className="relative w-full md:w-2/5 h-40 bg-gray-100">
        {loading && <Skeleton className="absolute inset-0 w-full h-full" />}
        <img
          src={imageUrl}
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
          <CardDescription className="text-sm text-slate-900 opacity-70">
            {description || "Sin descripción disponible."}
          </CardDescription>
          <p className="text-lg font-bold text-amber-600">${price}</p>
        </CardHeader>


        <Button className="mt-4 w-full md:w-auto bg-amber-600 text-gray-100">Comprar</Button>
      </div>
    </Card>
  );
};

export default ProductWideCard;
