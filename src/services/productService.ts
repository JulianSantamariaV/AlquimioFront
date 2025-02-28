import axios from "axios";
import { z } from "zod";
import { productSchema } from "@/schemas/productSchema";

const baseURL = "http://localhost:3000/products";

export const createProduct = async (productData: z.infer<typeof productSchema>) => {
  const formData = new FormData();

  Object.entries(productData).forEach(([key, value]) => {
    if (value !== null && value !== undefined) {
      if (key === "image" && Array.isArray(value)) {
        value.forEach((file) => formData.append("image", file));
      } else if (typeof value === "number" || typeof value === "string") {
        formData.append(key, value.toString());
      }
    }
  });

  const response = await axios.post(baseURL, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return response.data;
};


export const updateProduct = async (productId: number, productData: z.infer<typeof productSchema>) => {
  const formData = new FormData();

  Object.entries(productData).forEach(([key, value]) => {
    if (value !== null && value !== undefined) {
      if (key === "image" && Array.isArray(value)) {
        value.forEach((file) => formData.append("image", file));
      } else if (typeof value === "number" || typeof value === "string") {
        formData.append(key, value.toString());
      }
    }
  });

  const response = await axios.put(`${baseURL}/${productId}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return response.data;
};


