import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer' id='footer'> 
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Choose from a diverse menu featuring a delectable array bla bla....Choose the number and diverse menu featuring a delectable array of dishes crafted with the food in our menu, we welcome you and have a nice dishes. Thank you so much!</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />

            </div>
        </div>
        <div className="footer-content-right">
            <h2>COMPANY</h2>
            <ul>
                <Link to='/'><li>Home</li></Link>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GIT IN TOUCH</h2>
            <ul>
                <li>+1-222-222-2222</li>
                <li>contact.food@tomato.com</li>
            </ul>
        </div>
        
      </div>
      <hr />
      <p className="footer-copyright">Copyright @2024 by Tomato.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
