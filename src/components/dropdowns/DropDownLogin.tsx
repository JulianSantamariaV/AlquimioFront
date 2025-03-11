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
import ModalLogin from "../modals/Modal";
import { ModalRegister } from "../modals/ModalRegister";
import { useSelector } from "react-redux";
import selectAuth from "../Store/AuthStore";

export function DropDownLogin() {
  const select = useSelector(selectAuth.getState);
  const { accessToken } = select.auth;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="p-2 px-2 rounded-full hover:bg-gray-600 bg-gray-400 w-full transition flex">
          <Menu className="w-6 h-6 ml-1 pr-1 text-white" />
          <User className="w-6 h-6 ml-1 text-white" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-gray-700 border-none shadow-lg rounded-lg">
        <DropdownMenuLabel className="bg-gray-700 text-white font-semibold text-center">
          Alquimio
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-gray-600" />
        <div className="bg-white">
          {accessToken ? (
            <DropdownMenuItem asChild>
              <Link
                to="/" // to="/Profile"
                className="block w-full px-4 py-2 hover:bg-gray-700 rounded-md"
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
