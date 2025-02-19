import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(1, "El nombre es requerido"),
  description: z.string().optional(),
  stock: z.number().min(1, "Debe ser mayor a 0"),
  // condition: z.number().int().min(1).max(4),  
  price: z.number().min(1, "El precio debe ser mayor a 0"),
  categoryid: z.number().min(1),
  sellerid: z.number().min(1),
  images: z.array(z.instanceof(File)).optional(), 
});
