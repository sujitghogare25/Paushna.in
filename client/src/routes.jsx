import { Routes, Route } from "react-router-dom";

// User pages
import Home from "./user/pages/Home";
import Products from "./user/pages/Products";
import ProductDetails from "./user/pages/ProductDetails";
import UserOrders from "./user/pages/Orders";

// Admin pages
import Dashboard from "./admin/pages/Dashboard";
import AdminOrders from "./admin/pages/Orders";

// Fallback
import NotFound from "./user/pages/NotFound";

export default function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/orders" element={<UserOrders />} />

      <Route path="/admin" element={<Dashboard />} />
      <Route path="/admin/orders" element={<AdminOrders />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}


