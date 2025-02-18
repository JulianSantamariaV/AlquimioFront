import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm, FormProvider } from "react-hook-form";
import { Button } from "../ui/button";
import axios from "axios";
import Iproducto from "../interfaces/Iproducto";


const FormProductCreate: React.FC = () => {
  const form = useForm<Iproducto>();
  const baseURL = "http://localhost:3000/product/Create";

  const onSubmit = async (data: Iproducto) => {
    console.log("Datos enviados:", data);
    await createPost(data);
  };

  const createPost = async (productData: Iproducto) => {
    const formData = new FormData();
    formData.append("productName", productData.productName);
    formData.append("quantity", productData.quantity.toString());
    formData.append("status", productData.status);
    formData.append("price", productData.price.toString());

    if (productData.foto instanceof File) {
      formData.append("foto", productData.foto);
    } else {
      formData.append("foto", productData.foto);
    }

    try {
      const response = await axios.post(baseURL, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("Producto creado:", response.data);
    } catch (error) {
      console.error("Error al crear producto:", error);
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* Nombre del producto */}
          <FormField
            control={form.control}
            name="productName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre del producto</FormLabel>
                <FormControl>
                  <Input placeholder="Nombre del producto" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Cantidad */}
          <FormField
            control={form.control}
            name="quantity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cantidad</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Cantidad" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Estado */}
          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Estado</FormLabel>
                <FormControl>
                  <Input placeholder="Estado" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Precio */}
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Precio</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Precio" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          /> 

          {/* Botón */}
          <Button className="text-gray-100 bg-amber-600 hover:bg-amber-700 transition" type="submit">
            Crear Producto
          </Button>
        </form>
      </FormProvider>
    </div>
  );
};

export default FormProductCreate;
