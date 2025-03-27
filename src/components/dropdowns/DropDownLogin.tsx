import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, User } from "lucide-react";
import { Link } from "react-router-dom";
import { ModalRegister } from "../modals/ModalRegister";
import { useAppSelector } from "../Store/hooks";
import ModalLogin from "../modals/ModalLogin";

export function DropDownLogin() {
  const select = useAppSelector((state) => state.auth);
  const { accessToken, decodedToken } = select;
  if (decodedToken) {
    console.log(decodedToken);
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="p-2 px-2 rounded-full hover:bg-gray-600/80 bg-gray-600 w-full transition flex cursor-pointer outline-none">
          <Menu className="w-6 h-6 ml-1 pr-1 text-rose-50" />
          <User className="w-6 h-6 ml-1 text-rose-50" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-gray-700 border-none shadow-lg rounded-lg">
        <DropdownMenuLabel className="bg-gray-700 text-rose-50 font-semibold text-center">
          Alquimio
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-gray-600" />
        <div className="bg-white">
          {accessToken ? (
            <DropdownMenuItem asChild>
              <Link
                to="/user/UserProfile"
                className="block w-full px-4 py-2 hover:bg-gray-700 cursor-pointer rounded-md"
              >
                Mi perfil
              </Link>
            </DropdownMenuItem>
          ) : (
            <DropdownMenuGroup className="flex flex-col">
              <DropdownMenuItem asChild>
                <ModalLogin />
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <ModalRegister />
              </DropdownMenuItem>
            </DropdownMenuGroup>
          )}
          <DropdownMenuSeparator className="bg-gray-600 mx-3" />

          <DropdownMenuItem className="px-4 py-2 rounded-md cursor-pointer justify-center">
            Contactanos
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
