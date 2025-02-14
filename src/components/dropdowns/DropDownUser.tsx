import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DropDownUser() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">Open</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        Perfil
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                        Cuenta
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                        Configuracion
                    </DropdownMenuItem>
                </DropdownMenuGroup>

                <DropdownMenuSeparator />

                <DropdownMenuItem>
                    Soporte
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem>
                    Salir
                </DropdownMenuItem>

            </DropdownMenuContent>
        </DropdownMenu>
    )
}
