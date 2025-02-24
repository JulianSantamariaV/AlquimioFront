import { useEffect, useState } from "react";
import axios from "axios";
import { IProductDisplay } from "@/utils/interfaces/IProductDisplay";

const API_URL = "http://localhost:3001/products";

export const useProducts = () => {
  const [products, setProducts] = useState<IProductDisplay[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get<IProductDisplay[]>(API_URL)
      .then(response => setProducts(response.data))
      .catch(error => setError("Error al cargar productos"))
      .finally(() => setLoading(false));
  }, []);

  return { products, loading, error };
};
