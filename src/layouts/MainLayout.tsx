import FooterMain from "@/components/footers/FooterMain";
import Navbar from "@/components/navbars/NavBar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-emerald-600">
      <Navbar />      
      <div className="flex-grow">
        <Outlet />
      </div>
      <FooterMain />
    </div>
  );
};

export default MainLayout;
