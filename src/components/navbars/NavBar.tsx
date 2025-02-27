import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { InputWithButton } from "../inputs/InputWithButton";
import { DropDownLogin } from "../dropdowns/DropDownLogin";
import DropDownCategoria from "../dropdowns/DropDownCategoria";
import { useEffect, useState } from "react";

const Navbar: React.FC = () => {

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false); // Ocultar cuando baja
      } else {
        setIsVisible(true); // Mostrar cuando sube
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <header className="w-full  sticky inset-0 z-50 inline-block">
      {/* Barra superior */}
      <nav className="bg-gray-800 text-white flex items-center justify-between px-6 py-4 z-50">
        {/* Logo */}
        <Link to="/" className="text-3xl font-extrabold text-emerald-400 hover:text-amber-400 transition-colors">
          Alquimio
        </Link>

        {/* Menú de navegación */}

        <NavigationMenu className="z-0">
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

      <nav className={`bg-gray-700 text-white flex items-center justify-start px-6 py-2 text-sm space-x-10 transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}>

        <div>
          <DropDownCategoria />
        </div>

        <div>
          <Link to="/services/ServicesHome">
            <Button variant="ghost" className="text-white hover:text-amber-400 transition hover:bg-inherit cursor-pointer">
              Servicios
            </Button>
          </Link>
        </div>

        <div className="md:hidden">
          <InputWithButton />
        </div>

      </nav>
    </header>
  );
};

export default Navbar;