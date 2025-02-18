import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";

const ProductCard = () => {
  const [loading, setLoading] = useState(true);

  return (
    <Card className="w-full max-w-sm overflow-hidden shadow-md rounded-lg">      
      <CardHeader className="text-center">
        <CardTitle className="text-lg text-gray-800">Producto</CardTitle>
      </CardHeader>

      {/* Contenido */}
      <CardContent className="flex flex-col items-center">
        <div className="relative w-full h-40 rounded-md overflow-hidden">
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
      </CardContent>

      {/* Botón */}
      <CardFooter className="flex justify-center">
        <Link to="/">
          <Button className="w-full md:w-auto px-6 py-2 bg-amber-600 text-gray-100">Comprar</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
