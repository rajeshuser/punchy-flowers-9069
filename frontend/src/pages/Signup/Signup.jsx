import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Signup.module.css";
import { api } from "../../globals";

function Signup() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const [age, setAge] = useState(0);
	const navigate = useNavigate();
	const handleSubmit = () => {
		const payload = {
			email: email,
			password: password,
			name: name,
			age: age,
		};
		axios.post(`${api}/users/register`, payload).then((res) => {
			alert("User Registered..... Please Login");
			navigate("/login");
		});
	};
	return (
		<div>
			<h1
				style={{
					textAlign: "center",
					//   marginBottom: "-200px",
					color: "#1abc9c",
				}}
			>
				Registration Page
			</h1>

			<div class="container">
				<div class="forms">
					<div class="form signup">
						<form action="#">
							<div class="input-field">
								<input
									type="text"
									id="username"
									placeholder="Enter your name"
									value={name}
									onChange={(e) => setName(e.target.value)}
									required
								/>
								<i class="uil uil-user"></i>
							</div>
							<div class="input-field">
								<input
									type="text"
									alue={email}
									onChange={(e) => setEmail(e.target.value)}
									class="email"
									placeholder="Enter your email"
									required
								/>
								<i class="uil uil-envelope icon"></i>
							</div>
							<div class="input-field">
								<input
									type="password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									class="password"
									placeholder="Create a password"
									required
								/>
								<i class="uil uil-lock icon"></i>
							</div>
							<div class="checkbox-text">
								<div class="checkbox-content">
									<input type="checkbox" id="termCon" />
									<label for="termCon" id="lable">
										I accepted all terms and conditions
									</label>
								</div>
							</div>

							<div class="input-field button">
								<input
									id="button"
									type="button"
									value="Signup"
									onClick={handleSubmit}
								/>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Signup;
