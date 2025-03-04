import { IServiceDisplay } from "@/utils/interfaces/IService";
import axios from "axios";
import { useState, useEffect } from "react";

const API_URL = "http://localhost:3000/services";

export const useService = () => {
    
  const [services, setServices] = useState<IServiceDisplay[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get<IServiceDisplay[]>(API_URL)
      .then((response) => {
        console.log("API Response:", response.data);
        setServices(
          response.data.map((service) => ({
            ...service,
            image: Array.isArray(service.image) ? service.image : [], 
          }))
        );
      })
      .catch(() => setError("Servicio no disponible"))
      .finally(() => setLoading(false));
  }, []);

  return { services, loading, error };
};