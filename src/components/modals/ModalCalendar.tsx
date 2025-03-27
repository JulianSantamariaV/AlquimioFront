
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogTitle,
    DialogHeader,
    DialogDescription,    
  } from "@/components/ui/dialog";
import { Calendar } from "lucide-react";
import { CalendarPicker } from "../calendar/CalendarPicker";


export const ModalCalendar: React.FC = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <button>
                    <Calendar className="w-8 h-8 p-2 ml-2 border rounded-r-md cursor-pointer" aria-label="Open calendar" />
                </button>
            </DialogTrigger>
           
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Selecciona una fecha</DialogTitle>
                </DialogHeader>
                <CalendarPicker />
                <DialogDescription></DialogDescription>
            </DialogContent>
        </Dialog>
    );
};
