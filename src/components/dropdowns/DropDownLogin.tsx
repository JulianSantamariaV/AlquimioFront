import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
  import { User } from "lucide-react";
  import { Link } from "react-router-dom";
  
  export function DropDownLogin() {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="p-2 rounded-full hover:bg-gray-700 transition">
            <User className="w-6 h-6 text-white" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 bg-gray-700 border-none shadow-lg rounded-lg">
          <DropdownMenuLabel className="bg-gray-700 text-white font-semibold">Alquimio</DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-gray-600" />
          <div className="bg-white">
          <DropdownMenuGroup>
            <DropdownMenuItem asChild>
              <Link to="/Login" className="block w-full px-4 py-2 hover:bg-gray-700 rounded-md">
                Ingresar
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/Register" className="block w-full px-4 py-2 hover:bg-gray-700 rounded-md">
                Registrarse
              </Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          
          <DropdownMenuSeparator className="bg-gray-600 mx-3" />
          
          <DropdownMenuItem className="px-4 py-2 hover:bg-gray-700 rounded-md cursor-pointer">
            Soporte
          </DropdownMenuItem>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
  