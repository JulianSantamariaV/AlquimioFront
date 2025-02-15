import {
     DropdownMenu, 
     DropdownMenuContent, 
     DropdownMenuGroup, 
     DropdownMenuItem, 
     DropdownMenuLabel, 
     DropdownMenuSeparator, 
     DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"
import { Button } from "../ui/button";

const DropDownCategoria: React.FC = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Button variant="outline">Categorias</Button>
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
