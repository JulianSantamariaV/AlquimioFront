import IProduct from "@/utils/interfaces/IProducto";
import { useState, useEffect } from "react";

export const useCart = () => {
  const [cart, setCart] = useState<IProduct[]>([]);

  // Cargar carrito desde localStorage
  useEffect(() => {
    const loadCart = () => {
      const storedCart = JSON.parse(localStorage.getItem("products") || "[]");
      setCart(storedCart);
    };

    loadCart();
    window.addEventListener("storage", loadCart);

    return () => window.removeEventListener("storage", loadCart);
  }, []);

  // Agregar producto al carrito
  const addToCart = (product: IProduct) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("products", JSON.stringify(updatedCart));
  };

  // Eliminar producto del carrito
  const removeFromCart = (productId: string) => {
    const updatedCart = cart.filter((product) => product.productid !== productId);
    setCart(updatedCart);
    localStorage.setItem("products", JSON.stringify(updatedCart));
  };

  // Vaciar carrito
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("products");
  };

  return { cart, addToCart, removeFromCart, clearCart };
};
