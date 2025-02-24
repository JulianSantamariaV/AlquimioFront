import {
     DropdownMenu, 
     DropdownMenuContent, 
     DropdownMenuGroup, 
     DropdownMenuItem, 
     DropdownMenuLabel, 
     DropdownMenuSeparator, 
     DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"

const DropDownCategoria: React.FC = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <p className="hover:text-amber-500 transition hidden lg:block hover:underline cursor-pointer">Categorias</p>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-72">
                <DropdownMenuLabel>Categorias</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        Motos
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Carros
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Apartamentos
                    </DropdownMenuItem>
                </DropdownMenuGroup>

            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default DropDownCategoria;
