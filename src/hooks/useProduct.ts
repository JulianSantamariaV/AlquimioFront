import { useEffect, useState } from "react";
import axios from "axios";
import { IProductDisplay } from "@/utils/interfaces/IProductDisplay";

const API_URL = "http://localhost:3000/products";

export const useProducts = () => {
  const [products, setProducts] = useState<IProductDisplay[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get<IProductDisplay[]>(API_URL)
      .then((response) => {
        console.log("API Response:", response.data);
        setProducts(
          response.data.map((product) => ({
            ...product,
            image: Array.isArray(product.image) ? product.image : [], 
          }))
        );
      })
      .catch(() => setError("Producto no disponible"))
      .finally(() => setLoading(false));
  }, []);
  

  return { products, loading, error };
};
