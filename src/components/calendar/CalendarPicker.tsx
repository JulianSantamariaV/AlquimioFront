import { useState } from "react";

import { DateRange, DayPicker } from "react-day-picker";
import "react-day-picker/style.css";


export function CalendarPicker() {
  const [selected, setSelected] = useState<DateRange | undefined>(undefined);
  const handleSelect = (newSelect : DateRange | undefined) => {
    console.log(newSelect);
    setSelected(newSelect);
  };

  return (
    <DayPicker
      animate
      classNames={{
        today: ' text-emerald-600',
        selected: 'border-none bg-emerald-600 text-zinc-100 rounded-2xl',
        range_start: `bg-emerald-600 text-zinc-100 rounded-2xl`,
        range_middle: `bg-emerald-600/80 text-zinc-100 rounded-2xl`,
        range_end: `bg-emerald-600 text-zinc-100 rounded-2xl`,
        outside: `text-gray-600/80`,
        disabled: `text-zinc-300 bg-zinc-100/50`,
      }}
      showOutsideDays
      mode="range"
      selected={selected}
      onSelect={handleSelect}
      weekStartsOn={0} 
      startMonth={new Date()}
      endMonth={new Date(new Date().setMonth(new Date().getMonth() + 2))} 
      
      min={1}      
      disabled={{ before: new Date() }}
    />
  );
}