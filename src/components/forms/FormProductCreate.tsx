import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { productSchema } from "@/schemas/productSchema";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { FormProductFields } from "./FormProductFields";
import FileUploader from "../uploaders/FileUploader";
import { createProduct } from "@/services/productService";
import { useAppSelector } from "../Store/hooks";

const FormProductForm: React.FC = () => {
  
  const select = useAppSelector((state) => state.auth);
    const { decodedToken, accessToken } = select;

  const form = useForm<z.infer<typeof productSchema>>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: "",
      description: "",
      stock: 1,
      condition: "1",
      price: 1,
      categoryid: 1,
      sellerid: decodedToken?.userId,
      image: [],      
    },
  });

  const onSubmit = async (data: z.infer<typeof productSchema>) => {
    console.log("Datos enviados:", data);
    try {
      const newProduct = await createProduct(data, accessToken);
      console.log("Producto creado:", newProduct);
    } catch (error) {
      console.error("Error al crear producto:", error);
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormProductFields form={form} />
         
          <FileUploader onFileSelect={(newFiles) => {
            form.setValue("image", [             
              ...newFiles, 
            ]);
          }} />
          
          <Button className="text-gray-100 bg-amber-600 hover:bg-amber-700 transition my-5" type="submit">
            Crear Producto
          </Button>
        </form>
      </FormProvider>
    </div>
  );
};

export default FormProductForm;
