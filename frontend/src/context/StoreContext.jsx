import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
import axios from "axios";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
 // const url = "http://localhost:4000";
 // const url ="  const url ="REACT_APP_API_URL=https://project3-api.vercel.app";
 const url = process.env.REACT_APP_API_URL;
  const [token, setToken] = useState("");

  const addToCart = async (itemId) => {
    if(!cartItems[itemId]){
      setCartItems((prev)=>({...prev,[itemId]:1}))
    }
    else{
      setCartItems((prev)=>({...prev,[itemId]:prev[itemId] +1}))
    }
    if(token){
           await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
    }
  }

 const removeFromCart = async(itemId) =>{
   setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
   if(token){
      await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
   }
 }

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItems[item];
        }
      }
    }
    return totalAmount;
  };
  

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
  }, []);

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
