import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"; 
  import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
  
  const DropDownCategoria: React.FC = () => {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="flex items-center gap-2 text-white transition ease-in-out cursor-pointer 
                 hover:bg-gradient-to-b from-white/20 to-gray">
             <Menu className="w-5 h-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-72 bg-gray-700 border-none shadow-lg rounded-t-none rounded-b-lg">
            <div>
          <DropdownMenuLabel className="font-semibold text-white">Categorías</DropdownMenuLabel>
          </div>
          <DropdownMenuSeparator className="bg-gray-600" />
          <div className="bg-white">
          <DropdownMenuGroup>
            <DropdownMenuItem className="hover:bg-gray-700 cursor-pointer px-4 py-2 rounded-md">
              Motos
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-gray-700 cursor-pointer px-4 py-2 rounded-md">
              Carros
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-gray-700 cursor-pointer px-4 py-2 rounded-md">
              Apartamentos
            </DropdownMenuItem> 
          </DropdownMenuGroup>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  };
  
  export default DropDownCategoria;
  