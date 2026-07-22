import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        cpassword: ""
    });

    const handleInput = (e) => {

        let key = e.target.name;
        let value = e.target.value;

        setFormData({
            ...formData,
            [key]: value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (formData.password !== formData.cpassword) {
            toast.error("Passwords do not match");
            return;
        }

        const response = await axios.get("http://localhost:4000/users");
        const users = response.data;

        let alreadyExists = false;

        for (let i = 0; i < users.length; i++) {

            if (users[i].email === formData.email) {
                alreadyExists = true;
                break;
            }

        }

        if (alreadyExists) {
            toast.error("Email already exists");
            return;
        }

        await axios.post("http://localhost:4000/users", {
            name: formData.name,
            email: formData.email,
            password: formData.password
        });

        toast.success("Account Created Successfully");

        navigate("/login");
    };

    return (
        <div className="login-big">

            <div className="login-page">

                {/* Left Side */}

                <div className="left-side">

                    <div className="overlay">

                        <div className="logo">
                            <h2>E-Shop</h2>
                            <p>Your trusted store</p>
                        </div>

                        <div className="content">

                            <h1>Join Us!</h1>

                            <h2>Create Your Account</h2>

                            <p>
                                Register today and enjoy
                                <br />
                                exclusive offers,
                                <br />
                                secure shopping,
                                <br />
                                and fast delivery.
                            </p>

                            <img
                                src="/images/login-cart.png"
                                alt="Shopping Cart"
                            />

                            <div className="features">

                                <div>
                                    <h4>⭐ Premium Quality</h4>
                                    <p>Trusted Products</p>
                                </div>

                                <div>
                                    <h4>🏷 Huge Discounts</h4>
                                    <p>Best Deals Everyday</p>
                                </div>

                                <div>
                                    <h4>🚚 Fast Delivery</h4>
                                    <p>Quick Shipping</p>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                {/* Right Side */}

                <div className="right-side">

                    <form onSubmit={handleSubmit}>

                        <h1>Create Account</h1>

                        <p className="sub-title">
                            Create your account to start shopping.
                        </p>

                        <label>Full Name</label>

                        <input
                            type="text"
                            placeholder="Enter your full name"
                            name="name"
                            value={formData.name}
                            onChange={handleInput}
                        />

                        <label>Email Address</label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            name="email"
                            value={formData.email}
                            onChange={handleInput}
                        />

                        <label>Password</label>

                        <input
                            type="password"
                            placeholder="Enter password"
                            name="password"
                            value={formData.password}
                            onChange={handleInput}
                        />

                        <label>Confirm Password</label>

                        <input
                            type="password"
                            placeholder="Confirm password"
                            name="cpassword"
                            value={formData.cpassword}
                            onChange={handleInput}
                        />

                        <button type="submit">
                            Create Account
                        </button>
                        
                        <p className="register-text">
                            Already have an account?
                            <Link to="/login"> Login</Link>
                        </p>

                    </form>

                </div>

            </div>

        </div>
    );
};

export default Register;