import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { InputWithButton } from "../inputs/InputWithButton";
import { DropDownLogin } from "../dropdowns/DropDownLogin";


const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b">
      {/* Logo */}
      <Link to="/" className="text-xl font-bold">
        Alquimio
      </Link>

      {/* Menú de navegación */}
      <NavigationMenu>
        <NavigationMenuList className="flex space-x-4">
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/UserProfile" className="hover:text-blue-500 transition hidden lg:block">Categorias</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/About" className="hover:text-blue-500 transition hidden lg:block">Vender</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/Help" className="hover:text-blue-500 transition hidden lg:block">Ayuda</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="w-full max-w-lg">
        <InputWithButton />
      </div>

      {/* Botones */}
      <div className="flex items-center space-x-2">
        <div className="hidden md:flex space-x-2">
          <Link to="/Login">
            <Button variant="outline">Ingresa</Button>
          </Link>
          <Link to="/Register">
            <Button variant="outline">Registrate</Button>
          </Link>
        </div>
        <div className="md:hidden">
          <DropDownLogin />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
