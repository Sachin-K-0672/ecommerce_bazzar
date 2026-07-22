import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaYoutube,
    FaCcVisa,
    FaCcMastercard,
} from "react-icons/fa";
import {
    SiPaytm,
    SiPhonepe,
} from "react-icons/si";

import LockIcon from '@mui/icons-material/Lock';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import LoopIcon from '@mui/icons-material/Loop';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const Footer = () => {
    return (
        <div className="footer">

            <div className="footer-top">

                <div className="footer-box">
                    <h2>
                        <img src="/public/images/e-commerce-logo.png" alt="E-Store Logo" /> <span>E</span> STORE
                    </h2>

                    <p>
                        Your one-stop destination for quality products at the best prices.
                    </p>

                    <div className="social-icons">
                        <FaFacebookF />
                        <FaInstagram />
                        <FaTwitter />
                        <FaYoutube />
                    </div>
                </div>

                <div className="footer-box">
                    <h3>Quick Links</h3>

                    <ul>
                        <li>Home</li>
                        <li>Shop</li>
                        <li>Categories</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div className="footer-box">
                    <h3>Customer Service</h3>

                    <ul>
                        <li>Help Center</li>
                        <li>Returns</li>
                        <li>Shipping</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>

                <div className="footer-box">
                    <h3>Newsletter</h3>

                    <p>Subscribe for latest offers and updates.</p>

                    <input
                        type="email"
                        placeholder="Enter your Email"
                    />

                    <button>SUBSCRIBE</button>
                </div>

            </div>

            <div className="footer-middle">

                <div>
                    <LockIcon/> Secure Payment
                </div>

                <div>
                    <AirportShuttleIcon/> Free Delivery
                </div>

                <div>
                    <LoopIcon/> Easy Returns
                </div>

                <div>
                    <SupportAgentIcon/> 24/7 Support
                </div>

            </div>

            <div className="footer-bottom">

                <p>
                    © 2026 E Store. All Rights Reserved.
                </p>

                <div className="payments">
                    <FaCcVisa />
                    <FaCcMastercard />
                    <SiPaytm />
                    <SiPhonepe />
                </div>

            </div>

        </div>
    );
};

export default Footer;