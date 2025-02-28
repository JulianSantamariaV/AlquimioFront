import { z } from "zod";

export const userSchema = z.object({
  userid: z.number().int().positive().optional(),
  name: z.string().min(1, "El nombre es requerido").max(50),
  lastname: z.string().min(1, "El apellido es requerido").max(50),
  email: z.string().email("El email no es válido").min(1, "El email es requerido"),
  phonenumber: z.string().max(50).optional(),
  photo: z.instanceof(File).optional(),
  birthdate: z.date().optional(),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres").max(255).regex(/[A-Z]/, "La contraseña debe tener almenos una mayuscula"),
  rol: z.string().default("1"),
  // address: z.array(z.object({
  //   street: z.string().min(1, "La calle es requerida").optional(),
  //   city: z.string().min(1, "La ciudad es requerida").optional(),
  //   state: z.string().min(1, "El estado es requerido").optional(),
  //   country: z.string().min(1, "El país es requerido").optional(),
  //   postalCode: z.string().min(1, "El código postal es requerido").optional()
  // })).optional(), 
});
