import { useState } from "react"; // ✅ Importar useState
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogHeader,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { userSchema } from "@/schemas/userSchema";
import { toast, ToastContainer } from "react-toastify";
import { register as registro } from "../apiCalls/Auth";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { putToken } from "../Store/AuthSlice";
import { useAppDispatch } from "../Store/hooks";

export const ModalRegister: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(userSchema),
  });
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" className="cursor-pointer">
          Registrate
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Bienvenido a Alquimio</DialogTitle>
          <DialogDescription className="hover:text-black transition-colors">
            Completa tus datos para registrarte
          </DialogDescription>
        </DialogHeader>
        <form
          onSubmit={handleSubmit(async (data: z.infer<typeof userSchema>) => {
            try {
              const response = await registro(data);
              setIsOpen(false);
              navigate("/");
              dispatch(putToken(response));
              console.log("token", response);
            } catch (e) {
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
            }
          })}
        >
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="Usuario"></Label>
              <Input
                {...register("username")}
                type="username"
                id="username"
                placeholder="Usuario"
              />
              {errors.username && (
                <p className="text-red-500 text-sm">
                  {errors.username.message}
                </p>
              )}
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="Nombres"></Label>
              <Input
                {...register("name")}
                type="name"
                id="name"
                placeholder="Nombre"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="Apellidos"></Label>
              <Input
                {...register("lastname")}
                type="lastname"
                id="lastname"
                placeholder="Apellido"
              />
              {errors.lastname && (
                <p className="text-red-500 text-sm">
                  {errors.lastname.message}
                </p>
              )}
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="Correo Electrónico"></Label>
              <Input
                {...register("email")}
                type="email"
                id="email"
                placeholder="Correo Electrónico"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="Contraseña"></Label>
              <Input
                {...register("password")}
                type="password"
                id="password"
                placeholder="Contraseña"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="Confirmar Contraseña"></Label>
              <Input
                {...register("confirmPassword")}
                type="password"
                id="confirmPassword"
                placeholder="Confirma tu contraseña"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
          </div>

          <DialogFooter className="flex justify-center">
            <Button
              type="submit"
              className="mx-auto w-52 mt-3 bg-amber-300 text-slate-900 hover:bg-amber-400 cursor-pointer"
            >
              {isSubmitting ? "Ingresando..." : "Ingresar"}
            </Button>
          </DialogFooter>
        </form>
        <ToastContainer />
      </DialogContent>
    </Dialog>
  );
};
