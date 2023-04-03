import React from "react";
import { Route, Routes } from "react-router-dom";

import AdminOrders from "../adminPages/AdminOrdersPage";
import AdminProducts from "../adminPages/AdminProducts";
import AdminUsers from "../adminPages/AdminUsersPage";
import Home from "../adminPages/Home";
import AdminAddProductPage from "../adminPages/AdminAddProductPage";

const AllAdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/admin/add" element={<AdminAddProductPage/>} />
      <Route path="/admin/users" element={<AdminUsers/>} />
      <Route path="/admin/products" element={<AdminProducts/>} />
      <Route path="/admin/orders" element={<AdminOrders/>} />
    </Routes>
  );
};

export default AllAdminRoutes;