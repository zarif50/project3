import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>আমাদের মেনু অন্বেষণ</h1>
        <p className='explore-menu-text'>একটি সুস্বাদু খাবারের সমাহার সহ একটি বৈচিত্র্যময় মেনু থেকে চয়ন করুন৷ আমাদের লক্ষ্য হল সুস্বাদু খাবারের মাধ্যমে গ্রাহককে সন্তুষ্ট করা৷</p>
         <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return(
                   <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}  key={index} className="explore-menu-list-item">
                    <img  className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                   </div> 
                )
            })}
         </div>
         <hr/>
    </div>
  )
}

export default ExploreMenu