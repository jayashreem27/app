import React from "react";
import "./FooterLinks.scss"
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import logoImage from "../../assets/BellaModa.jpg"

const FooterLinks=()=>{
    return(
        <>
        <section className="contact-section">
            <div className="container contact">
                <div className="contact-icon">
                    <FaFacebook className="i"/>
                    <FaTwitter className="i"/>
                    <FaInstagram className="i"/>
                    <FaYoutube className="i"/>
                </div>
                <h2>Lets's Talk?</h2>
                <a href="#home" className="btn btn-dark">Make an enquiry</a>
            </div>
        </section>

        <section className="footer-section">
            <div className="container footer">
                <div className="footer-logo">
                    <img src={logoImage} alt=""/>
                </div>

                <div className="footer-menu">
                    <p className="link-heading">
                        Features
                    </p>
                    <ul className="nav-ul footer-links">
                       <li>
                        <a href="#home">Link Shortening</a>
                       </li>
                       <li>
                        <a href="#home">Brand Links</a>
                       </li>
                       <li>
                        <a href="#home">Analytics</a>
                       </li>
                       <li>
                        <a href="#home">Blog</a>
                       </li>
                    </ul>
                </div>

                <div className="footer-menu">
                    <p className="link-heading">
                        Resources
                    </p>
                    <ul className="nav-ul footer-links">
                       <li>
                        <a href="#home">Blog</a>
                       </li>
                       <li>
                        <a href="#home">Developer</a>
                       </li>
                       <li>
                        <a href="#home">Support</a>
                       </li>
                       <li>
                        <a href="#home">Docs</a>
                       </li>
                    </ul>
                </div>

                <div className="footer-menu">
                    <p className="link-heading">
                        Company
                    </p>
                    <ul className="nav-ul footer-links">
                       <li>
                        <a href="#home">About</a>
                       </li>
                       <li>
                        <a href="#home">Our Team</a>
                       </li>
                       <li>
                        <a href="#home">Career</a>
                       </li>
                       <li>
                        <a href="#home">Contact</a>
                       </li>
                    </ul>
                </div>

                <div className="footer-menu">
                    <p className="link-heading">
                       Patners
                    </p>
                    <ul className="nav-ul footer-links">
                       <li>
                        <a href="#home">About</a>
                       </li>
                       <li>
                        <a href="#home">Our Team</a>
                       </li>
                       <li>
                        <a href="#home">Career</a>
                       </li>
                       <li>
                        <a href="#home">Contact</a>
                       </li>
                    </ul>
                </div>

            </div>
        </section>
        </>)
    
}

export default FooterLinks