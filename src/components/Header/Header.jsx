import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets'





const Header = () => {


  
  return (
    <div className='header'>
       { <img src={assets.header_img}alt="" className="header" /> }
        <div className="header-contents">
            <h2>এখানে আপনার পছন্দের খাবার অর্ডার করুন</h2>

            
            <p>একটি বৈচিত্র্যময় মেনু থেকে বেছে নিন চমৎকার অভিজ্ঞতা এবং কাটলাইনারির দক্ষতার সাথে তৈরি করা খাবারের একটি মনোরম বিন্যাস। আমাদের লক্ষ্য হল আপনার আকাঙ্ক্ষা মেটানো।</p>
            <button>View Menu</button>
        </div>
    </div>
  )
}

export default Header