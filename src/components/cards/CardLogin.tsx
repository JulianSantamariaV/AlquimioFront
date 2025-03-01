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
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/schemas/userSchema";
import { toast, ToastContainer } from "react-toastify";
import { login } from "../apiCalls/Auth";

const CardLogin: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
 ;

  return (
    <Card className="w-[350px]">
      <form
        onSubmit={handleSubmit((data) => {
          login(data.password, data.email)
            .catch((e) => {
              toast("Credenciales incorrectas", {
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
            })
         
        })}
      >
        <CardHeader>
          <CardTitle className="text-center">LOGIN</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="Email"></Label>
              <Input
                {...register("email")}
                type="email"
                id="Email"
                placeholder="Corre Electronico"
                autoComplete="email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="Password"></Label>
              <Input
                {...register("password")}
                type="password"
                id="password"
                placeholder="Contraseña"
                autoComplete="current-password"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link to="/">
            <Button variant="destructive">Cancelar</Button>
          </Link>
          {/* INGRESAR */}
          <Button type="submit">
            {isSubmitting ? "Ingresando..." : "Ingresar"}
          </Button>
        </CardFooter>
      </form>
      <ToastContainer />
    </Card>
  );
};

export default CardLogin;
