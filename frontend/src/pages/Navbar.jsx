import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const loggedin = localStorage.getItem("token");
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div style={{display:"flex",gap:'20px',justifyContent:"center"}}>
      {loggedin ? (
        <button onClick={handleLogout}>LOGOUT</button>
      ) : (
        <Link to="/login">Login</Link>
      )}

      <Link to="/signup">signup</Link>
    </div>
  );
}

export default Navbar;