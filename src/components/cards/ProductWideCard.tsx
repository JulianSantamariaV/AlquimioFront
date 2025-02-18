import { useState } from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Skeleton } from "../ui/skeleton";
import { Button } from "../ui/button";

const ProductWideCard = () => {
  const [loading, setLoading] = useState(true);

  return (
    <Card className="flex flex-col md:flex-row w-full max-w-2xl overflow-hidden shadow-md rounded-lg text-emerald-600">
      {/* Imagen */}
      <div className="relative w-full md:w-2/5 h-40 bg-gray-100">
        {loading && <Skeleton className="absolute inset-0 w-full h-full" />}
        <img
          src="https://th.bing.com/th/id/OIP.dlsFyeoIz85ZYdETpmDGpQAAAA?rs=1&pid=ImgDetMain"
          alt="Producto"
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            loading ? "opacity-0" : "opacity-100"
          }`}
          onLoad={() => setLoading(false)}
        />
      </div>

      {/* Contenido */}
      <div className="flex flex-col justify-between p-4 md:w-3/5">
        <CardHeader className="p-0">
          <CardTitle className="text-lg md:text-xl text-emerald-600">Producto</CardTitle>
          <CardDescription className="text-sm text-slate-900 opacity-70">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae sint asperiores...
          </CardDescription>
        </CardHeader>
        
        {/* Botón */}
        <Button className="mt-4 w-full md:w-auto bg-amber-600  text-gray-100">Comprar</Button>
      </div>
    </Card>
  );
};

export default ProductWideCard;
