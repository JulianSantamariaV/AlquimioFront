import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { InputWithButton } from "../inputs/InputWithButton";
import { DropDownLogin } from "../dropdowns/DropDownLogin";
import DropDownCategoria from "../dropdowns/DropDownCategoria";

const Navbar: React.FC = () => {
  return (
    <header className="w-full shadow-md">
      {/* Barra superior */}
      <nav className="bg-gray-800 text-white flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="text-3xl font-extrabold text-emerald-400 hover:text-amber-400 transition-colors">
          Alquimio
        </Link>

        {/* Menú de navegación */}
        <NavigationMenu>
          <NavigationMenuList className="flex space-x-6 text-sm font-medium">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/products/ProductCreate" className="hover:text-amber-400 transition hidden lg:block hover:underline">
                  Vender
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>


        <div className="w-full max-w-lg hidden md:block">
          <InputWithButton />
        </div>


        <div className="flex items-center space-x-3 px-10">
          <div className="hidden md:flex space-x-3">
            <Link to="/Login">
              <Button variant="ghost" className="text-white hover:text-amber-400 transition hover:bg-inherit cursor-pointer">
                Ingresa
              </Button>
            </Link>
            <Link to="/Register">
              <Button variant="ghost" className="text-white hover:text-amber-400 transition hover:bg-inherit cursor-pointer">
                Regístrate
              </Button>
            </Link>
          </div>
          <div className="md:hidden pl-10">
            <DropDownLogin />
          </div>
        </div>
      </nav>


      <div className="bg-gray-700 text-white flex items-center justify-start px-6 py-2 text-sm space-x-10">
        <div>
          <DropDownCategoria />
        </div>
        <div className="md:hidden">
          <InputWithButton />
        </div>
      </div>
    </header>
  );
};

export default Navbar;