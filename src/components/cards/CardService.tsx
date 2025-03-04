import { IServiceDisplay } from "@/utils/interfaces/IService";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card"
import { useState, useEffect } from "react";
import { Skeleton } from "../ui/skeleton";


const CardService: React.FC<IServiceDisplay> = ({name, price, image = [], description}) => {
  const [loading, setLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState<string>("/placeholder.jpg");

  useEffect(() => {
    if (image && image.length > 0 && image[0]) {
      setImageUrl(image[0]);
    }
  }, [image]);

  return (
    <Card className="w-600 h-400 bg-white shadow-lg ratio-16/9">
      <CardHeader>
        <h3 className="text-2xl font-bold text-slate-800 absolute top-1 left-1 w-full">
    {name}
        </h3>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center">
          {loading && <Skeleton className="absolute inset-0 w-full h-full" />}
          <img 
          src={imageUrl} 
          alt={`Imagen de ${name}`} 
          className="w-full h-full object-cover"
          onLoad={() => setLoading(false)}
          onError={() => setImageUrl("/placeholder.jpg")}
          />
          <p className="text-center text-md font-medium text-emerald-400">${price}</p>
        </div>
      </CardContent>
      <CardFooter>
        <p className="text-center text-md font-medium text-emerald-400">${price}</p>
        <p className="text-center text-md font-medium text-emerald-400">{description}</p>
      </CardFooter>
    </Card>
  );
};

export default CardService;