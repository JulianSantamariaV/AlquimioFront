import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";

const ProductCard = () => {
  const [loading, setLoading] = useState(true);

  return (
    <Card>
    <CardHeader>
            <CardTitle className="text-start absolute">Producto</CardTitle>            
          </CardHeader>
          <CardContent>    
      <div className="w-full">
        <div className="flex justify-center items-center">
          {loading && <Skeleton className="w-full h-full"/>} 
          <img
            src=""
            alt="Producto"
            className={`w-full h-auto object-cover transition-opacity duration-300 ${loading ? "opacity-0" : "opacity-100"}`}
            onLoad={() => setLoading(false)}
          />
        </div>
        <div>
          
        </div>
      </div>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Link to="/">
        <Button>Comprar</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
