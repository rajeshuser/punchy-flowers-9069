import { Route,Routes } from 'react-router-dom';
import Signup from "./pages/Signup/Signup"
import Navbar from "./pages/Navbar"
import Login from "./pages/Login/Login"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>

        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;