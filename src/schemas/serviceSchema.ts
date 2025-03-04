import { z } from "zod";

export const serviceSchema = z.object({
    name: z.string().min(1),
    description: z.string().optional(),
    price: z.number().min(1),
    image: z.array(z.instanceof(File)).optional(),
});