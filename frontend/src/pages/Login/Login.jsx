import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	
	const handleSubmit = () => {
		const payload = {
			email: email,
			password: password,
		};
		axios.post("https://coffee-capybara-hem.cyclic.app/user/login", payload).then((res) => {
			localStorage.setItem("token", res.data.token);
			navigate("/notes");
		});
	};

	return (
		<div className="mainDiv">
			<h1>LOGIN</h1>
			<div>
				<input
					type="text"
					placeholder="Enter email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					type="password"
					placeholder="Enter password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button onClick={handleSubmit}>SUBMIT</button>
			</div>
		</div>
	);
}
