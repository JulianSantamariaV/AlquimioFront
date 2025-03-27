import { Outlet } from "react-router-dom";
import { SideBar } from "@/components/sidebars/SideBar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import FooterMain from "@/components/footers/FooterMain";

export default function ProfileLayout() {
  return (
    <>
    <SidebarProvider defaultOpen={false}>      
      <SideBar />      
      <main className="flex flex-col min-h-screen bg-gradient-to-b from-zinc-50 to-slate-50">
        <SidebarTrigger />
        <Outlet />
      </main>      
    </SidebarProvider><FooterMain />
    </>
  );
}
