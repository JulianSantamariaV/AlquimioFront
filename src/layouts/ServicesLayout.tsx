import { Outlet } from "react-router-dom";
import { SideBar } from "@/components/sidebars/SideBar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function ServicesLayout() {
  return (
    <SidebarProvider>
      <SideBar />
      <main>
        <SidebarTrigger />
        <Outlet /> 
      </main>
    </SidebarProvider>
  );
}
