import { serviceSchema } from "@/schemas/serviceSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import FileUploader from "../uploaders/FileUploader";
import { Button } from "../ui/button";

export const FormServiceCreate: React.FC = () => {
    const form = useForm<Zod.infer<typeof serviceSchema>>({
        resolver: zodResolver(serviceSchema),
        defaultValues: {
            name: "",
            description: "",
            price: 1,
            image: [],
        },
    });

    const onSubmit = async (data: Zod.infer<typeof serviceSchema>) => {
        console.log("Datos enviados:", data);
        try {
            const newService = await createService(data);
            console.log("Servicio creado:", newService);
        } catch (error) {
            console.error("Error al crear servicio:", error);
        }
    };

    return (
        <div className="container mx-auto mt-10">
            <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormServiceFields form={form} />

                    {/* Imagen */}
                    <FileUploader onFileSelect={form.setValue.bind(null, "image")} />

                    {/* Botón */}
                    <Button className="text-gray-100 bg-amber-600 hover:bg-amber-700 transition" type="submit">
                        Crear Servicio
                    </Button>
                </form>
            </FormProvider>
        </div>
    );
}