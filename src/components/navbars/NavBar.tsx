import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { InputWithButton } from "../inputs/InputWithButton";
import { DropDownLogin } from "../dropdowns/DropDownLogin";
import DropDownCategoria from "../dropdowns/DropDownCategoria";
import { useEffect, useRef, useState } from "react";


const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (Math.abs(currentScrollY - lastScrollY.current) < 10) return;

      setIsVisible(currentScrollY < lastScrollY.current);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full sticky inset-0 z-50">
      {/* Barra superior */}
      <nav className="bg-gray-800 text-white flex items-center justify-between px-6 py-4 h-20">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-extrabold text-emerald-400 hover:text-amber-400 transition-colors"
        >
          Alquimio
        </Link>

        {/* Menú de navegación */}

        <NavigationMenu className="z-0">
          <NavigationMenuList className="flex space-x-6 text-sm font-medium">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  to="/products/ProductCreate"
                  className="hover:text-amber-400 transition hidden lg:block hover:underline"
                >
                  Vender
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="w-full max-w-lg hidden md:block">
          <InputWithButton />
        </div>
        <div className="flex items-center space-x-3">
          <div className="pl-10">
            <DropDownLogin />
          </div>
        </div>
      </nav>

      <nav
        className={`bg-gray-700 text-white flex items-center justify-start px-6 py-2 text-sm space-x-10 transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div>
          <DropDownCategoria />
        </div>

        <div>
          <Link to="/services/ServicesHome">
            <Button
              variant="ghost"
              className="text-white hover:text-amber-400 transition hover:bg-inherit cursor-pointer"
            >
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
