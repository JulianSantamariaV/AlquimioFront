import { Outlet } from "react-router-dom";
import { SideBar } from "@/components/sidebars/SideBar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import FooterMain from "@/components/footers/FooterMain";

export default function ProfileLayout() {
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
