import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => {
    const payload = {
      email: email,
      password: password,
    };
    // console.log(payload)
    axios
      .post("https://coffee-capybara-hem.cyclic.app/user/login", payload)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        navigate("/notes");
      });
  };
  return (
    <>
      <h1 style={{ textAlign: "center", color:"#388e3c" }}>Login Page</h1>
      <div style={{gap:"20px"}}>
        Email:   
         
         <input
          type="text"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        Password:
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
}

export default Login;
