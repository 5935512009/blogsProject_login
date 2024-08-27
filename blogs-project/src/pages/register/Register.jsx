import React, { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const Register = () => {
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const [error, setError] = useState('');

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const url = "http://localhost:4001/api/users";
            const { data: res } = await axios.post(url, data);
            console.log('Registration successful:', res);
        } catch (err) {
            if (err.response && err.response.status >= 400 && err.response.status <= 500) {
                setError(err.response.data);
            }
        }
    };

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={data.firstName}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={data.lastName}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={data.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={data.password}
                    onChange={handleChange}
                    required
                />
                {error && <div>{error}</div>}
                <button type="submit">Register</button>
            </form>
            <div className="">
					<h1>welcome back</h1>
					<Link to="/Login">
						<button type="button" className="">
							Sing In
						</button>
					</Link>
				</div>
        </div>
    );
};

export default Register;
