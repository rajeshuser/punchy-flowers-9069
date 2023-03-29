import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
      <h1>Login Page</h1>
      <div>
        Email:-
        <input
          type="text"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        Password:-
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
