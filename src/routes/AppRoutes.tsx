
import AuthLayout from "@/layouts/AuthLayout";
import MainLayout from "@/layouts/MainLayout";
import Help from "@/pages/Help";
import Home from "@/pages/Home";
import Login from "@/pages/user/UserLogin";
import ProductCreate from "@/pages/products/ProductCreate";
import Register from "@/pages/user/UserRegister";
import { ServicesCreate } from "@/pages/services/ServicesCreate";
import { ServicesHome } from "@/pages/services/ServicesHome";
import UserProfile from "@/pages/user/UserProfile";
import { Routes, Route } from "react-router-dom";
import About from "@/pages/About";
import ProfileLayout from "@/layouts/ProfileLayout";
import ProductHome from "@/pages/products/ProductHome";

function AppRoutes() {
  return (
    <Routes>
      {/* Rutas con Navbar */}
      <Route element={<MainLayout />}>
        <Route path='/' element={<Home />} />
        <Route path="/user/UserProfile" element={<UserProfile />} />
        <Route path="/Help" element={<Help />} />
        <Route path="/about" element={<About />} />
        <Route path="/products/ProductCreate" element={<ProductCreate />} />
        <Route path="/products/ProductHome" element={<ProductHome />} />
        <Route path="/services/ServicesHome" element={<ServicesHome />} />
        <Route path="/services/ServicesCreate" element={<ServicesCreate />} />
      </Route>

      {/* Rutas sin Navbar */}
      <Route element={<AuthLayout />}>
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Route>

      <Route element={<ProfileLayout/>}>        
        <Route path="/user/UserProfile" element={<UserProfile />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
