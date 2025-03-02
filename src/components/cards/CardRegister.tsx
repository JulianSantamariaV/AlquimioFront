import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { userSchema } from "@/schemas/userSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { register, token } from "../apiCalls/Auth";
import { toast, ToastContainer } from "react-toastify";

const CardRegister: React.FC = () => {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof userSchema>>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      name: "",
      lastname: "",
      email: "",
      phonenumber: "",
      username: "",
      photo: undefined,
      birthdate: undefined,
      password: "",
      rol: 1,
      // address: [
      //   {
      //     street: "",
      //     city: "",
      //     state: "",
      //     country: "",
      //     postalCode: "",
      //   },
      // ],
    },
  });

  const onSubmit = async (data: z.infer<typeof userSchema>) => {
    console.log("Datos enviados:", data);
    await register(data).catch((e) => {
      toast("Error, intenta mas tarde", {
        type: "error",
        autoClose: 4000,
        position: "top-center",
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.error(e);
    });
    if (token) {
      navigate("/");
    }
  };

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle className="text-center">REGISTRO</CardTitle>
        <CardDescription>Completa tus datos para registrarte</CardDescription>
      </CardHeader>
      <CardContent>
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid w-full items-center gap-4">
              {/* Nombre */}
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Usuario</FormLabel>
                    <FormControl>
                      <Input placeholder="Usuario" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              {/* Nombre */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre</FormLabel>
                    <FormControl>
                      <Input placeholder="Nombre" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* Apellido */}
              <FormField
                control={form.control}
                name="lastname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Apellido</FormLabel>
                    <FormControl>
                      <Input placeholder="Apellido" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* Contraseña */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contraseña</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Contraseña"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* Correo Electrónico */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Correo Electrónico</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Correo Electrónico"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* País */}
              {/* <FormField
                control={form.control}
                name="address.0.country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>País</FormLabel>
                    <FormControl>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona tu país" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="colombia">Colombia</SelectItem>
                          <SelectItem value="peru">Perú</SelectItem>
                          <SelectItem value="ecuador">Ecuador</SelectItem>
                          <SelectItem value="estadosUnidos">Estados Unidos</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                  </FormItem>
                )}
              /> */}
            </div>

            <CardFooter className="flex justify-between mt-4">
              <Link to="/">
                <Button variant="destructive">Cancelar</Button>
              </Link>
              <Button type="submit">Registrarse</Button>
            </CardFooter>
          </form>
        </FormProvider>
      </CardContent>
      <ToastContainer />
    </Card>
  );
};

export default CardRegister;
