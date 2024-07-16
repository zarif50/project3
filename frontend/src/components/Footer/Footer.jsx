import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer'  id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
       <img src={assets.logo} alt=""/>
       <p>আমাদের ওয়েবসাইটে স্বাগতম। এখানে আপনি  খাবারের নতুন ধরণ, এবং বিভিন্ন স্বাদের মজাদার অপশন পেতে পারবেন। আমাদের সম্পর্কে আরও জানতে আমাদের সামাজিক যোগাযোগ পৃষ্ঠাগুলি দেখুন।</p>

            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon}  alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li> Delivery</li>
                    <li>privacy policy</li>
                </ul>
              </div>
         <div className="footer-content-right">
            <h2> GET IN TOUCH </h2>
            <ul> 
                <li>০১৯৭৮৪৯০৬৪</li>
                <li>tanzil.cse@starKabab.com</li>
            </ul>
             </div>
          </div> 
          <hr  />
          <p className="footer-copyright">Copyright 2024 @ Tomato.com -All Right reserved.</p> 
    </div>
  )
}

export default Footer
