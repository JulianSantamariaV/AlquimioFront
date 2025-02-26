
import AuthLayout from "@/layouts/AuthLayout";
import MainLayout from "@/layouts/MainLayout";
import ServicesLayout from "@/layouts/ServicesLayout";
import Help from "@/pages/Help";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import ProductCreate from "@/pages/products/ProductCreate";
import Register from "@/pages/Register";
import { ServicesCreate } from "@/pages/services/ServicesCreate";
import { ServicesHome } from "@/pages/services/ServicesHome";
import UserProfile from "@/pages/user/UserProfile";

import { Routes, Route } from "react-router-dom";

function AppRoutes() {
  return (
    <Routes>
      {/* Rutas con Navbar */}
      <Route element={<MainLayout />}>
        <Route path='/' element={<Home />} />
        <Route path="/user/UserProfile" element={<UserProfile />} />
        <Route path="/Help" element={<Help />} />
        <Route path="/products/ProductCreate" element={<ProductCreate />} />

      </Route>

      {/* Rutas sin Navbar */}
      <Route element={<AuthLayout />}>
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Route>

      <Route element={<ServicesLayout/>}>
        <Route path="/services/ServicesHome" element={<ServicesHome />} />
        <Route path="/services/ServicesCreate" element={<ServicesCreate />} />
      </Route>
    </Routes>

  );
}

export default AppRoutes;
