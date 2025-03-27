import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { useShoppingCart } from "@/hooks/useShoppingCart";

interface ShoppingCartProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShoppingCart: React.FC<ShoppingCartProps> = ({ isOpen, onClose }) => {
  const { products, removeFromCart, updateQuantity, getTotal, updateProductsFromStorage } = useShoppingCart();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (isOpen) {
      updateProductsFromStorage();
    }
  }, [isOpen, updateProductsFromStorage]);

  useEffect(() => {
    setTotal(getTotal());
  }, [products, getTotal]);

  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-zinc-800/50 bg-opacity-50 z-40"
        onClick={onClose}
      />
      <div className="fixed right-0 top-0 h-full w-80 bg-gray-800 text-rose-50 shadow-lg z-50 p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Carrito de Compras</h2>
          <button onClick={onClose} className="text-rose-50 hover:text-amber-400">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col gap-4 h-[calc(100%-180px)] overflow-y-auto">
          {products.length === 0 ? (
            <p className="text-center">El carrito está vacío</p>
          ) : (
            products.map((product) => (
              <div key={product.productid} className="bg-gray-700 p-3 rounded-lg">
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    {product.image && product.image[0] && (
                      <img 
                        src={product.image[0]} 
                        alt={product.name} 
                        className="w-16 h-16 object-cover rounded"
                      />
                    )}
                    <div>
                      <h3 className="font-semibold">{product.name}</h3>
                      <p className="text-amber-400">${product.price}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(product.productid, product.quantity - 1)}
                      className="text-sm px-2 py-1 bg-gray-600 rounded hover:bg-gray-500"
                    >
                      -
                    </button>
                    <span>{product.quantity}</span>
                    <button
                      onClick={() => updateQuantity(product.productid, product.quantity + 1)}
                      className="text-sm px-2 py-1 bg-gray-600 rounded hover:bg-gray-500"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeFromCart(product.productid)}
                      className="text-rose-400 hover:text-rose-500 ml-2"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="absolute bottom-0 left-0 w-full p-4 bg-gray-800 border-t border-gray-700">
          <div className="flex justify-between items-center mb-4">
            <span className="font-bold">Total:</span>
            <span className="text-amber-400 font-bold">${total.toFixed(2)}</span>
          </div>
          <button
            className="w-full bg-emerald-500 text-white py-2 rounded-lg hover:bg-emerald-600 transition"
            disabled={products.length === 0}
          >
            Proceder al pago
          </button>
        </div>
      </div>
    </>
  );
};
