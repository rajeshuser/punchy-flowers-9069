import { Route, Routes } from "react-router-dom";
// import Signup from "./pages/Signup/Signup";
// import Navbar from "./pages/Navbar";
// import Login from "./pages/Login/Login";
// import logo from "./logo.svg";
import "./App.css";
import AllRoutes from "./components/AllRoutes";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import AllAdminRoutes from "./admin/adminRoutes/AllRoutes";

function App() {
  return (
    <div className="App">
      {/* <Navigation />
			<AllRoutes />


			<Footer />  */}
      <AllAdminRoutes />
    </div>
  );
}

export default App;
