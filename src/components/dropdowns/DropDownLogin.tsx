
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,   
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { User } from "lucide-react"

export function DropDownLogin() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <User/>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Alquimio</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        Ingresar

                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Registrarse
                    </DropdownMenuItem> 
                </DropdownMenuGroup>                
                <DropdownMenuSeparator />
                <DropdownMenuItem>Soporte</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
