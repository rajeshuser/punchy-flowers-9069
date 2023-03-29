import { Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup/Signup";
import Navbar from "./pages/Navbar";
import Login from "./pages/Login/Login";
import logo from "./logo.svg";
import "./App.css";
import AllRoutes from "./components/AllRoutes";
import Navigation from "./components/Navigation";

function App() {
	return (
		<div className="App">
			<Navigation />
			<AllRoutes />
		</div>
	);
}

export default App;
