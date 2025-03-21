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
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema } from "@/schemas/userSchema";
import { toast, ToastContainer } from "react-toastify";
import { login, } from "../apiCalls/Auth";
import { useNavigate } from "react-router-dom";
import { putToken } from "../Store/AuthSlice";
import { useAppDispatch } from "../Store/hooks";

const ModalLogin: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" className="cursor-pointer">
          Login
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Ingresa</DialogTitle>
        </DialogHeader>
        <form
          onSubmit={handleSubmit(async (data) => {
            console.log("Datos enviados:", data);
            try {
              const response = await login(data.email, data.password);
              setIsOpen(false);
              navigate("/");
              dispatch(putToken(response));
              console.log("token", response);
            } catch (e) {
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
            }
          })}
        >
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="Email"></Label>
              <Input
                {...register("email")}
                type="email"
                id="Email"
                placeholder="Correo Electronico"
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

export default ModalLogin;
