
import AuthLayout from "@/layouts/AuthLayout";
import MainLayout from "@/layouts/MainLayout";
import Help from "@/pages/Help";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import UserProfile from "@/pages/UserProfile";

import { Routes, Route } from "react-router-dom";

function AppRoutes() {
  return (
    <Routes>
      {/* Rutas con Navbar */}
      <Route element={<MainLayout />}>
        <Route path='/' element={<Home />} />
        <Route path="/UserProfile" element={<UserProfile />} />
        <Route path="/Help" element={<Help />} />
      </Route>

      {/* Rutas sin Navbar */}
      <Route element={<AuthLayout />}>
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
