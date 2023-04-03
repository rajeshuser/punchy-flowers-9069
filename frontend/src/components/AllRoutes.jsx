import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import SingleProduct from "../pages/SingleProduct";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Account from "../pages/Account";

export default function AllRoutes(params) {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/products" element={<Products />} />
			<Route path="/products/:_id" element={<SingleProduct />} />
			<Route path="/account" element={<Account />} />
			<Route path="/cart" element={<Cart />} />
			<Route path="/checkout" element={<Checkout />} />
			<Route path="/login" element={<Login />} />
			<Route path="/signup" element={<Signup />} />
			<Route path="*" element={<h1>Page Not Found</h1>} />
		</Routes>
	);
}
