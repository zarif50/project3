import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
 <p>ভালো অভিজ্ঞতার জন্য ডাউনলোড করুন<br/> Star Kebab</p>
 <div className="app-download-platforms">
    <img src={assets.play_store} alt="" />
    <img src={assets.app_store} alt="" />
 </div>
</div>
  )
}

export default AppDownload
