import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const [age, setAge] = useState(0);
  const navigate = useNavigate();
  const handleSubmit = () => {
    const payload = {
      email: email,
      password: password,
      location: location,
      age: age,
    };
    // console.log(payload)
    axios
      .post("https://coffee-capybara-hem.cyclic.app/user/register", payload)
      .then((res) => {
        alert("User Registered..... Please Login");
        navigate("/login");
      });
  };
  return (
    <>
      <h1>Registration Page</h1>
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
        Location:-
        <input
          type="text"
          placeholder="Where are you from"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        Age:-
        <input
          type="number"
          placeholder="Enter your age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
}

export default Signup;
