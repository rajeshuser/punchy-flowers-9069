import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import SingleProduct from "../pages/SingleProduct";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";

export default function AllRoutes(params) {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/products" element={<Products />} />
			<Route path="/products/:_id" element={<SingleProduct />} />
			<Route path="/account" element={<h1>Account</h1>} />
			<Route path="/cart" element={<Cart />} />
			<Route path="/checkout" element={<Checkout />} />
			<Route path="*" element={<h1>Page Not Found</h1>} />
		</Routes>
	);
}
