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
