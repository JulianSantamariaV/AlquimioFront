import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { UseFormReturn } from "react-hook-form";
import { productSchema } from "@/schemas/productSchema";

interface ProductFieldsProps {
  form: UseFormReturn<z.infer<typeof productSchema>>;
}

export const FormProductFields: React.FC<ProductFieldsProps> = ({ form }) => (
  <>
    <FormField
      control={form.control}
      name="name"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Nombre del producto</FormLabel>
          <FormControl><Input placeholder="Nombre" {...field} /></FormControl>
        </FormItem>
      )}
    />

    <FormField
      control={form.control}
      name="description"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Descripción</FormLabel>
          <FormControl><Input placeholder="Descripción" {...field} /></FormControl>
        </FormItem>
      )}
    />

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
  </>
);
