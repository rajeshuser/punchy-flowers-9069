import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";

export default function AllRoutes(params) {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/products" element={<Products />} />
			<Route path="/products/:id" element={<h1>Single Product</h1>} />
			<Route path="/account" element={<h1>Account</h1>} />
			<Route path="/cart" element={<h1>Cart</h1>} />
			<Route path="/checkout" element={<h1>Checkout</h1>} />
			<Route path="*" element={<h1>Page Not Found</h1>} />
		</Routes>
	);
}
