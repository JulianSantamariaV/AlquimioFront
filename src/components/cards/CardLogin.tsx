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
import { Link } from "react-router-dom"

const CardLogin: React.FC = () => {
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
              <Label htmlFor="Email"></Label>
              <Input type="email" id="Email" placeholder="Corre Electronico" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="Password"></Label>
              <Input type="password" id="password" placeholder="Contraseña" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link to="/" >
          <Button variant="destructive">Cancelar</Button>
        </Link>
        {/* INGRESAR */}
        <Button>Ingresar</Button>
      </CardFooter>
    </Card>
  )
}

export default CardLogin;