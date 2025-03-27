import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { InputWithButton } from "../inputs/InputWithButton";
import { DropDownLogin } from "../dropdowns/DropDownLogin";
import { useState } from "react";
import { Menu, ShoppingBasket } from "lucide-react";


const Navbar: React.FC = () => {
  // const [isVisible, setIsVisible] = useState(true);
  // const lastScrollY = useRef(window.scrollY);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollY = window.scrollY;

  //     if (Math.abs(currentScrollY - lastScrollY.current) < 10) return;

  //     setIsVisible(currentScrollY < lastScrollY.current);
  //     lastScrollY.current = currentScrollY;
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <header className="w-full sticky top-0 left-0 z-50">
      <nav className="bg-gray-800 text-rose-50 flex items-center justify-between px-6 py-4 h-20">
        <Link
          to="/"
          className="text-3xl font-extrabold text-emerald-400"
        >
          Alquimio
        </Link>

        {/* Menú Desktop */}
        <div className="hidden md:flex space-x-5">
          <Link to="/services/ServicesHome" className="text-rose-50 text-xl font-bold">            
              Servicios            
          </Link>
          <Link to="/products/ProductHome" className="text-rose-50 text-xl font-bold">
              Productos            
          </Link>
        </div>
        <div className="flex items-center w-[70px] space-x-3">
          <DropDownLogin />
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-rose-50 hover:text-amber-400 transition"
        >
          <Menu className="w-7 h-7" />
        </button>      
      </nav>
      {isMobileMenuOpen && (
          <div className="bg-gray-800 text-rose-50 flex flex-col items-center py-4 space-y-4 md:hidden">
            <Link
              to="/services/ServicesHome"
              className="text-lg font-bold hover:text-amber-400"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Servicios
            </Link>
            <Link
              to="/products/ProductHome"
              className="text-lg font-bold hover:text-amber-400"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Productos
            </Link>
          </div>
        )}

      <nav
        className={"bg-gray-700 text-rose-50 flex items-center justify-center px-6 py-4 text-sm transition-transform duration-300"}
      >
        <div className="flex justify-center w-full">
          <InputWithButton />
        </div>
        <ShoppingBasket className="w-8 h-8 text-rose-50 hover:text-amber-400 transition cursor-pointer text-2xl font-bold" />
      </nav>

    </header>
  );
};

export default Navbar;
