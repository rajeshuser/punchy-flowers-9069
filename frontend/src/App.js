import { Route, Routes } from "react-router-dom";
// import Signup from "./pages/Signup/Signup";
// import Navbar from "./pages/Navbar";
// import Login from "./pages/Login/Login";
// import logo from "./logo.svg";
import "./App.css";
import AllRoutes from "./components/AllRoutes";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import AdminProducts from "./admin/adminPages/AdminProducts";
import Home from "./admin/adminPages/Home";
import AdminAddProductPage from "./admin/adminPages/AdminAddProductPage";

function App() {

	return (
		<div className="App">
			<Navigation />
			<AllRoutes />
			<Footer /> 
			
		


			
		</div>
	);
}

export default App;
