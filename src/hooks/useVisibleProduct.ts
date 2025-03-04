import { useEffect, useState } from "react";

export const useVisibleProducts = () => {
  const [visibleProducts, setVisibleProducts] = useState(1);

  const updateVisibleProducts = () => {
    if (window.innerWidth >= 1536) {
      setVisibleProducts(6);
    } else if (window.innerWidth >= 1280) {
      setVisibleProducts(5);
    } else if (window.innerWidth >= 1024) {
      setVisibleProducts(4); 
    } else if (window.innerWidth >= 768) {
      setVisibleProducts(3); 
    } else if (window.innerWidth >= 640) {
      setVisibleProducts(2); 
    } else {
      setVisibleProducts(1); 
    }
  };

  useEffect(() => {
    updateVisibleProducts();
    window.addEventListener("resize", updateVisibleProducts);
    return () => window.removeEventListener("resize", updateVisibleProducts);
  }, []);

  return visibleProducts;
};
