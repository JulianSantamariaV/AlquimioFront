import { z } from "zod";

export const userSchema = z.object({
  userid: z.number().int().positive().optional(),
  name: z.string().min(1, "El nombre es requerido").max(50),
  lastname: z.string().min(1, "El apellido es requerido").max(50),
  email: z
    .string()
    .email("El email no es válido")
    .min(1, "El email es requerido"),
  username: z.string(),
  phonenumber: z.string().max(50).optional(),
  photo: z.instanceof(File).optional(),
  birthdate: z.date().optional(),
  password: z
    .string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .max(255),

  rol: z.number().int().optional(),
  // address: z.array(z.object({
  //   street: z.string().min(1, "La calle es requerida").optional(),
  //   city: z.string().min(1, "La ciudad es requerida").optional(),
  //   state: z.string().min(1, "El estado es requerido").optional(),
  //   country: z.string().min(1, "El país es requerido").optional(),
  //   postalCode: z.string().min(1, "El código postal es requerido").optional()
  // })).optional(),
}).refine((data) => /[A-Z]/.test(data.password), {
  message: "Debe contener al menos una letra mayúscula",
  path: ["password"],
})
.refine((data) => /[0-9]/.test(data.password), {
  message: "Debe contener al menos un número",
  path: ["password"],
})
.refine((data) => /[!@#$%^&*(),.?":{}|<>]/.test(data.password), {
  message: "Debe contener al menos un carácter especial",
  path: ["password"],
});


export const loginSchema = z
  .object({
    email: z.string().email({ message: "El correo electrónico no es válido" }),

    password: z
      .string()
      .min(8, { message: "Minimo 8 caracteres" })
      .max(50, { message: "Maximo 50 caracteres" }),
  })
  .refine((data) => /[A-Z]/.test(data.password), {
    message: "Debe contener al menos una letra mayúscula",
    path: ["password"],
  })
  .refine((data) => /[0-9]/.test(data.password), {
    message: "Debe contener al menos un número",
    path: ["password"],
  })
  .refine((data) => /[!@#$%^&*(),.?":{}|<>]/.test(data.password), {
    message: "Debe contener al menos un carácter especial",
    path: ["password"],
  });
