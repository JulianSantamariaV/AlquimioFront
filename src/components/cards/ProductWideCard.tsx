import { useState } from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

const ProductWideCard = () => {
  const [loading, setLoading] = useState(true);

  return (
    <Card>
      <div className="grid grid-cols-[40%_60%] w-full h-full">
        <div className="flex justify-center items-center">
          {loading && <Skeleton className="w-full h-full" />} 
          <img
            src=""
            alt="Producto"
            className={`w-full h-auto object-cover transition-opacity duration-300 ${loading ? "opacity-0" : "opacity-100"}`}
            onLoad={() => setLoading(false)}
          />
        </div>
        <div>
          <CardHeader>
            <CardTitle className="text-start">Producto</CardTitle>
            <CardDescription className="flex flex-wrap justify-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae sint asperiores...
            </CardDescription>
          </CardHeader>
        </div>
      </div>
    </Card>
  );
};

export default ProductWideCard;
