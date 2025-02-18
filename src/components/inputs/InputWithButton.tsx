import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
 
export function InputWithButton() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input className="bg-white text-emerald-600 border-b-amber-200" type="text" placeholder="Articulo..." />
      <Button className="hover:text-amber-500" variant="outline" type="submit">Buscar</Button>
    </div>
  )
}