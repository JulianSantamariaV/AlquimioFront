import FooterMain from "@/components/footers/FooterMain";
import Navbar from "@/components/navbars/NavBar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-zinc-50 to-slate-50 text-emerald-500">
      <Navbar />      
      <div className="flex-grow">
        <Outlet />
      </div>
      <FooterMain />
    </div>
  );
};

export default MainLayout;
