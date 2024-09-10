import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './login.css'

const Login = () => {
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:4001/api/auth";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data); // token
			window.location = "/";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<div className="login-page">
			<div className="login-path">
				<div className="login-top">
					<form className="login-form" onSubmit={handleSubmit}>
						<h1>Login to Your Account</h1>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className=""
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className=""
						/>
						<br/>
						{error && <div className="">{error}</div>}
						<button type="submit" className="">
							Sing In
						</button>
					</form>
				</div>
				<div className="login-bottom">
					<h1>New Here ?</h1>
					<Link to="/Register">
						<button type="button" className="">
							Sing Up
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;