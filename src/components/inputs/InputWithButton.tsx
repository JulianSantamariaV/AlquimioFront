import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import DropDownCategoria from "../dropdowns/DropDownCategoria";

export function InputWithButton() {
  return (
    <div className="flex w-full max-w-xl items-center mx-5">
      <DropDownCategoria/>
      <Input
        className=" bg-white text-gray-900 border border-gray-300 focus:border-amber-400 focus:ring-amber-400 rounded-l-lg rounded-r-none px-4 py-2"
        type="text"
        placeholder="Buscar artículo..."
      />
      <Button
        className="bg-amber-400 hover:bg-amber-500 text-gray-900 rounded-l-none rounded-r-lg p-2 cursor-pointer"
        type="submit"
      >
        <Search className="w-5 h-5" />
      </Button>
    </div>
  );
}
