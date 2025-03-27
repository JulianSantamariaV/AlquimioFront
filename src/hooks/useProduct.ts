import { useEffect, useState } from "react";
import axios from "axios";
import { IProduct } from "@/utils/interfaces/IProducto";

const API_URL = "http://localhost:3000/products";

export const useProducts = (id?: string) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        const url = id ? `${API_URL}/${id}` : API_URL;
        const { data } = await axios.get<IProduct | IProduct[]>(url);

        // Si `data` es un objeto, lo convertimos en un array
        const productsArray = Array.isArray(data) ? data : [data];

        setProducts(
          productsArray.map((product) => ({
            ...product,
            image: Array.isArray(product.image) ? product.image : [],
          }))
        );
      } catch (err) {
        console.error("Error al obtener productos:", err);
        setError(
          (err as any).response?.data?.message || "Error al obtener productos"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [id]);

  return { products, loading, error };
};
