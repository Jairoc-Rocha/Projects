import { Navigate, Route, Routes } from "react-router";

import AccessSelection from "../pages/AccessSelection/AccessSelection";
import AdminDashboard from "../pages/AdminDashboard/AdminDashboard";
import Login from "../pages/Login/Login";
import Products from "../pages/Products/Products";
import Register from "../pages/Register/Register";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/register" replace />} />

      <Route path="/register" element={<Register />} />

      <Route path="/access-selection" element={<AccessSelection />} />

      <Route path="/login/:userType" element={<Login />} />

      <Route path="/products" element={<Products />} />

      <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
  );
}
