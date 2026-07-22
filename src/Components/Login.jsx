import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";


const Login = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleInput = (e) => {
        const key = e.target.name;
        const value = e.target.value;

        setFormData({
            ...formData,
            [key]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await axios.get("http://localhost:4000/users");
        const users = response.data;

        let user = null;

        for (let i = 0; i < users.length; i++) {
            if (
                users[i].email === formData.email &&
                users[i].password === formData.password
            ) {
                user = users[i];
                break;
            }
        }

        if (user) {
            toast.success("Login Successful");

            localStorage.setItem("user", JSON.stringify(user));

            navigate("/");
        } else {
            toast.error("Invalid Email or Password");
        }
    };

    return (
       <div className="login-big">
         <div className="login-page">

            <div className="left-side">

                <div className="overlay">

                    <div className="logo">
                        <h2> E-Shop</h2>
                        <p>Your trusted store</p>
                    </div>

                    <div className="content">
                        <h1>Welcome Back!</h1>

                        <h2>Login to continue shopping</h2>

                        <p>
                            Explore amazing products <br />
                            and enjoy the best deals <br />
                            only for you.
                        </p>

                        <img
                            src="/images/login-cart.png"
                            alt="Shopping Cart"
                        />

                        <div className="features">
                            <div>
                                <h4>⭐ Best Quality</h4>
                                <p>100% Original Products</p>
                            </div>

                            <div>
                                <h4>🏷 Best Offers</h4>
                                <p>Amazing Discounts</p>
                            </div>

                            <div>
                                <h4>🔒 Secure Payment</h4>
                                <p>100% Safe & Secure</p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

            <div className="right-side">

                <form onSubmit={handleSubmit}>

                    <h1>Login</h1>

                    <p className="sub-title">
                        Welcome back! Please login to your account.
                    </p>

                    <label>Email Address</label>

                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleInput}
                    />

                    <label>Password</label>

                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleInput}
                    />

                    <button type="submit">
                        Login
                    </button>

                <p className="register-text">
                Don't have an account?
                <Link to="/register"> Create Account</Link>
            </p>

                </form>

            </div>

        </div>
       </div>
    )
}

export default Login;



// const user = users.find((elem) => {
//   return (
//     elem.email === formData.email &&
//     elem.password === formData.password
//   );
// });

// if (user) {
//   toast.success("Login Successful");

//   navigate("/");
// } else {
//   toast.error("Invalid Email or Password");
// }
