import { Link } from "react-router-dom";
import { InputWithButton } from "../inputs/InputWithButton";
import { DropDownLogin } from "../dropdowns/DropDownLogin";
import { useEffect, useState } from "react";
import { Menu, ShoppingBasket } from "lucide-react";
import { ShoppingCart } from "../cart/ShoppingCart";
import { useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [shoppingProductCount, setShoppingProductCount] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const updateShoppingProductCount = () => {
      const products = JSON.parse(localStorage.getItem("products") || "[]");
      setShoppingProductCount(products.length);
    };
    updateShoppingProductCount();

    // Escuchar cambios en el localStorage
    window.addEventListener("storage", updateShoppingProductCount);
    return () => window.removeEventListener("storage", updateShoppingProductCount);
  }, []);

  useEffect(() => {
    // Cerrar el carrito cuando cambie la ruta
    setIsCartOpen(false);
  }, [location]);

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
        <div className="relative">
          {shoppingProductCount > 0 && (
            <span className="absolute -top-3 right-0 text-amber-400">{shoppingProductCount}</span>
          )}          
          <ShoppingBasket 
            className="shopping-cart-icon w-8 h-8 hover:text-amber-400 transition cursor-pointer text-2xl font-bold" 
            onClick={() => setIsCartOpen(true)}
          />
        </div>
      </nav>

      <ShoppingCart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
};

export default Navbar;
