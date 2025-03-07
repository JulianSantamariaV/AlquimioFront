import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { InputWithButton } from "../inputs/InputWithButton";
import { DropDownLogin } from "../dropdowns/DropDownLogin";
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
    <header className="w-full sticky top-0 left-0 z-50">
      
      <nav className="bg-gray-800 text-white flex items-center justify-between px-6 py-4 h-20">
        
        <Link
          to="/"
          className="text-3xl font-extrabold text-emerald-400 hover:text-amber-400 transition-colors"
          >
          Alquimio
        </Link>

        <div className="flex grid-flow-col space-x-5">
        <div>
          <Link to="/services/ServicesHome">
            <Button
              variant="ghost"
              className="text-white hover:text-amber-400 transition hover:bg-inherit cursor-pointer text-2xl font-bold"
            >
              Servicios
            </Button>
          </Link> 
        </div>

        <div>
          <Link to="/products/ProductHome">
            <Button
              variant="ghost"
              className="text-white hover:text-amber-400 transition hover:bg-inherit cursor-pointer text-2xl font-bold"
            >
              Productos
            </Button>
          </Link>
        </div>

        </div>

        {/* Menú de navegación */}

        {/* <NavigationMenu className="z-0">
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
        </NavigationMenu> */}

        
        <div className="flex items-center space-x-3">
          <div className="">
            <DropDownLogin />
          </div>
        </div>
      </nav>

      <nav
        className={`bg-gray-700 text-white flex items-center justify-start px-6 py-4 text-sm space-x-10 transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >    

        <div className="w-full max-w-lg mx-auto">
          <InputWithButton />
        </div>
      </nav>      
    </header>
  );
};

export default Navbar;
