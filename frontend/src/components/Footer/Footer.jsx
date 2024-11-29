import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                {/* <img src={assets.logo} alt="" /> */}
                <p>MealHub is your trusted partner for delicious meals delivered straight to your doorstep. From fresh ingredients to exceptional service, we are committed to making every dining experience delightful. Order from a wide variety of cuisines, track your orders in real time, and enjoy exclusive deals every day. Thank you for choosing MealHub</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>Get In Touch</h2>
                <ul>
                    <li>+358442349874</li>
                    <li>cont@mealhub.com</li>    
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2024 &copy; mealhub.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer