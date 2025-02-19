import { useState } from "react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router-dom";

const CardRegister: React.FC = () => {
 
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password: "",
    email: "",
    country: "",
  });


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  
  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      country: value,
    });
  };

  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 
    console.log("Datos enviados:", formData); 
  };

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle className="text-center">REGISTRO</CardTitle>
        <CardDescription>Completa tus datos para registrarte</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}> 
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="firstName">Nombre</Label>
              <Input id="firstName" autoComplete="given-name" placeholder="Nombre" value={formData.firstName} onChange={handleChange} />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="lastName">Apellido</Label>
              <Input id="lastName" autoComplete="family-name" placeholder="Apellido" value={formData.lastName} onChange={handleChange} />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Contraseña</Label>
              <Input type="password" autoComplete="new-password" id="password" placeholder="Contraseña" value={formData.password} onChange={handleChange} />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Correo Electrónico</Label>
              <Input type="email" id="email" placeholder="Correo Electrónico" value={formData.email} onChange={handleChange} />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="country">País</Label>
              <Select onValueChange={handleSelectChange}>
                <SelectTrigger id="country">
                  <SelectValue placeholder="Selecciona tu país" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="colombia">Colombia</SelectItem>
                  <SelectItem value="peru">Perú</SelectItem>
                  <SelectItem value="ecuador">Ecuador</SelectItem>
                  <SelectItem value="estadosUnidos">Estados Unidos</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <CardFooter className="flex justify-between mt-4">
            <Link to="/">
              <Button variant="destructive">Cancelar</Button>
            </Link>
            <Button type="submit">Registrarse</Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
};

export default CardRegister;
