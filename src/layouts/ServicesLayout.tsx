import { Outlet } from "react-router-dom";
import { SideBar } from "@/components/sidebars/SideBar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import FooterMain from "@/components/footers/FooterMain";
import Navbar from "@/components/navbars/NavBar";

export default function ServicesLayout() {
  return (
    <>
    <SidebarProvider>      
      <SideBar />      
      <main>
        <SidebarTrigger />
        <Outlet />
      </main>      
    </SidebarProvider><FooterMain />
    </>
  );
}
