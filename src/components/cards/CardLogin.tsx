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
import axios from "axios";
import React from "react";


const CardLogin: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const baseURL = "http://localhost:3000/auth/login";
 // const [post, setPost] = React.useState(null);
  function createPost( password: any, email: any) { // change any
    axios
      .post(baseURL, {
       password,
       email
      })
      .then((response) => {
        console.log(response.data)
      });
  }

  return (
    <Card className="w-[350px]">
      <form
        onSubmit={handleSubmit((data) =>
        { console.log(data)
          createPost(data.password,data.email)
        }
       
        )}
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
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="Password"></Label>
              <Input
                {...register("password")}
                type="password"
                id="password"
                placeholder="Contraseña"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link to="/">
            <Button variant="destructive">Cancelar</Button>
          </Link>
          {/* INGRESAR */}
          <Button type="submit">Ingresar</Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default CardLogin;
