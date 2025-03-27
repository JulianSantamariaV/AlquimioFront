import { useState, useEffect } from 'react';
import  { ICartItem, IProduct } from '@/utils/interfaces/IProducto';

export const useShoppingCart = () => {
  const [products, setProducts] = useState<ICartItem[]>([]);

  const updateProductsFromStorage = () => {
    const storedProducts = JSON.parse(localStorage.getItem('products') || '[]');
    setProducts(storedProducts);
  };

  useEffect(() => {
    updateProductsFromStorage();
    // Escuchar cambios en el localStorage
    window.addEventListener('storage', updateProductsFromStorage);
    return () => window.removeEventListener('storage', updateProductsFromStorage);
  }, []);

  const addToCart = (product: IProduct, quantity: number) => {
    const existingProducts = JSON.parse(localStorage.getItem('products') || '[]');
    const existingProduct = existingProducts.find((p: ICartItem) => p.productid === product.productid);

    let updatedProducts;
    if (existingProduct) {
      updatedProducts = existingProducts.map((p: ICartItem) =>
        p.productid === product.productid ? { ...p, quantity: p.quantity + quantity } : p
      );
    } else {
      const cartItem: ICartItem = {
        productid: product.productid,
        name: product.name,
        price: product.price,
        quantity: quantity,
        image: product.image
      };
      updatedProducts = [...existingProducts, cartItem];
    }

    localStorage.setItem('products', JSON.stringify(updatedProducts));
    setProducts(updatedProducts);
    // Disparar evento para actualizar otros componentes
    window.dispatchEvent(new Event('storage'));
  };

  const removeFromCart = (productId: string) => {
    const updatedProducts = products.filter(product => product.productid !== productId);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
    setProducts(updatedProducts);
    window.dispatchEvent(new Event('storage'));
  };

  const updateQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    const updatedProducts = products.map(product =>
      product.productid === productId ? { ...product, quantity: newQuantity } : product
    );
    localStorage.setItem('products', JSON.stringify(updatedProducts));
    setProducts(updatedProducts);
    window.dispatchEvent(new Event('storage'));
  };

  const getTotal = () => {
    return products.reduce((sum, product) => sum + product.price * product.quantity, 0);
  };

  return {
    products,
    addToCart,
    removeFromCart,
    updateQuantity,
    getTotal,
    updateProductsFromStorage
  };
};
