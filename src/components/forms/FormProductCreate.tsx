import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { productSchema } from "@/schemas/productSchema"; // 👈 Importamos el esquema
import { z } from "zod";
import axios from "axios";
import { Button } from "../ui/button";
import { Input } from "@/components/ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem, SelectLabel } from "../ui/select";
import FileUploader from "../uploaders/FileUploader";

const FormProductCreate: React.FC = () => {
  const form = useForm<z.infer<typeof productSchema>>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: "",
      description: "",
      stock: 1,
      // condition: 1,
      price: 1,
      categoryid: 1,
      sellerid: 1,
      images: [],
    },
  });

  const baseURL = "http://localhost:3001/products";



  const onSubmit = async (data: z.infer<typeof productSchema>) => {
    console.log("Datos enviados:", data);
    await createPost(data);
  };

  const createPost = async (productData: z.infer<typeof productSchema>) => {
    const formData = new FormData();

    Object.entries(productData).forEach(([key, value]) => {
      if (value !== null && value !== undefined) {
        if (key === "images" && Array.isArray(value)) {
          value.forEach((file) => formData.append("images", file));
        } else if (typeof value === "number" || typeof value === "string") {
          formData.append(key, value.toString());
        }
      }
    });

    try {
      const response = await axios.post(baseURL, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("Producto creado:", response.data);
    } catch (error: any) {
      console.error("Error al crear producto:", error);
      console.error("Detalles del error:", error.response?.data); 
      console.error("Mensajes de validación:", error.response?.data?.message); 
    }
    
  };

  return (
    <div className="container mx-auto mt-10">
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* Nombre del producto */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre del producto</FormLabel>
                <FormControl>
                  <Input placeholder="Nombre" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          {/* Descripción */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Descripción</FormLabel>
                <FormControl>
                  <Input placeholder="Descripción" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          {/* Cantidad */}
          <FormField
            control={form.control}
            name="stock"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cantidad</FormLabel>
                <FormControl>
                  <Input 
                  type="number" 
                  placeholder="Cantidad" 
                  {...field} 
                  onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          {/* Estado (Select) */}
          {/* <FormField
            control={form.control}
            name="condition"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Estado</FormLabel>
                <Select onValueChange={(value) => field.onChange(Number(value))} value={String(field.value)}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Condicion" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Estado del producto</SelectLabel>
                      <SelectItem value="1">Normal</SelectItem>
                      <SelectItem value="2">Bueno</SelectItem>
                      <SelectItem value="3">Muy bueno</SelectItem>
                      <SelectItem value="4">Excelente</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          /> */}

          {/* Precio */}
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Precio</FormLabel>
                <FormControl>
                  <Input 
                  type="number" 
                  placeholder="Precio" 
                  {...field}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                   />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="images"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Fotos</FormLabel>
                <FormControl>
                  <FileUploader onFileSelect={field.onChange} />
                </FormControl>
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
