import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(1, "El nombre es requerido"),    
  description: z.string().optional(),
  price: z.number().min(1, "El precio debe ser mayor a 0"),
  stock: z.number().min(1, "Debe ser mayor a 0"),
  condition: z.enum(["1", "2","3","4"]),   
  categoryid: z.number().min(1),
  sellerid: z.number().min(1),
  image: z.array(z.instanceof(File)).optional(),
});
