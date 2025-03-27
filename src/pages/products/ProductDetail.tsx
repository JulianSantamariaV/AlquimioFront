import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { useProducts } from "@/hooks/useProduct";
import { ModalCalendar } from "@/components/modals/ModalCalendar";
import { ArrowLeft, ShoppingBag } from "lucide-react";
import { useShoppingCart } from "@/hooks/useShoppingCart";
import { toast } from "sonner";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const { products, loading, error } = useProducts(id);
  const { addToCart } = useShoppingCart();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [paragraph, setParagraph] = useState(0);

  const handdleParagraph = (index: number) => setParagraph(index);

  const product = products?.[0];

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Skeleton className="w-96 h-96" />
      </div>
    );
  }

  if (error || !product) {
    return <div className="text-center text-red-500">Producto no disponible</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <Link to="/products/ProductHome">
        <ArrowLeft />
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <img
            src={selectedImage || product.image?.[0] || "/placeholder.jpg"}
            alt={product.name}
            className="w-full h-80 object-cover rounded-lg"
          />
          <div className="flex mt-4 gap-2">
            {product.image?.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={product.name}
                className={`w-16 h-16 object-cover rounded-lg cursor-pointer border `}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          <h2 className="text-3xl font-bold">{product.name}</h2>
          <p className="text-gray-600 mt-2">{product.condition}</p>

          <p className="text-xl font-semibold text-primary mt-2">${product.price}</p>



          <div className="mt-auto mb-2 flex items-center">
            <span className="text-sm text-gray-600 mr-2">Cantidad de días</span>
            <button
              className="w-8 h-8 border rounded-l-md cursor-pointer"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              -
            </button>
            <span className="px-4">{quantity}</span>
            <button
              className="w-8 h-8 border rounded-r-md cursor-pointer"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>

            <ModalCalendar />

          </div>

          <div className="relative w-4/5 mt-auto">
            <Button variant={"important"} className="w-full text-2xl p-8 ">
              Rentar
            </Button>

            <ShoppingBag
              onClick={() => {
                addToCart(product, quantity);
                toast("Producto agregado al carrito", {
                  description: `${quantity} unidad(es) de ${product.name}`,
                  action: {
                    label: "Ver carrito",
                    onClick: () => {
                      const cartIcon = document.querySelector('.shopping-cart-icon') as HTMLElement;
                      cartIcon?.click();
                    }
                  }
                });
              }}
              className="absolute top-0 right-0 w-8 h-8 transform -translate-y-8 text-red-500 hover:text-red-600 cursor-pointer hover:scale-110 transition"
            />

          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="border-b flex gap-6">
          <Button
            onClick={() => handdleParagraph(0)}
            variant={"ghost"}
            className={`py-2 px-4 text-gray-600 ${paragraph === 0 ? "text-inherit border-b-2 border-blue-500" : ""
              } font-medium`}
          >
            Descripción
          </Button>
          <Button
            onClick={() => handdleParagraph(1)}
            variant={"ghost"}
            className={`py-2 px-4 text-gray-600 ${paragraph === 1 ? "text-inherit border-b-2 border-blue-500" : ""
              } font-medium`}
          >
            Reseñas
          </Button>
        </div>
        {paragraph === 0 ? (
          <p className="mt-4 text-gray-700">{product.description}</p>
        ) : (
          <p className="mt-4 text-gray-700">
            {product.productreview?.length > 0 ? product.productreview : "No hay reseñas aún"}
          </p>
        )}
      </div>

      <div className="mt-10">
        <h3 className="text-2xl font-bold">Productos relacionados</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
          {products.slice(1, 5).map((related) => (
            <Card key={related.productid} className="shadow-md">
              <CardContent>
                <img
                  src={related.image?.[0] || "/placeholder.jpg"}
                  alt={related.name}
                  className="w-full h-40 object-cover rounded-lg"
                />
                <p className="mt-2 font-medium">{related.name}</p>
                <p className="text-primary font-semibold">${related.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
