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
                <p className="hover:text-blue-500 cursor-pointer">Categorias</p>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-72">
                <DropdownMenuLabel>Categorias</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        xxxx
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        xxxx
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        xxxx
                    </DropdownMenuItem>
                </DropdownMenuGroup>

            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default DropDownCategoria;
