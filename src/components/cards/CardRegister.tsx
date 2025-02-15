import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Link } from "react-router-dom"

const CardRegister : React.FC = () => {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle className="text-center">LOGIN</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="Name"></Label>
              <Input id="firstName" placeholder="Nombre" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="lastName"></Label>
              <Input id="lastName" placeholder="Apellido" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="Password"></Label>
              <Input type="password" id="password" placeholder="Contraseña" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="Email"></Label>
              <Input type="email" id="Email" placeholder="Corre Electronico" />
            </div>
            
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Pais</Label>
              <Select>
                <SelectTrigger id="Pais">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="colombia">Colombia</SelectItem>
                  <SelectItem value="peru">Peru</SelectItem>
                  <SelectItem value="ecuador">Ecuador</SelectItem>
                  <SelectItem value="estadosUnidos">Estados Unidos</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link to="/">
        <Button variant="destructive">Cancelar</Button>
        </Link>
        <Button>Registrarse</Button>
      </CardFooter>
    </Card>
  )
}

export default CardRegister;