import React, { useContext, useEffect } from 'react'
import './OrderConfirmation.css';
import { useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
const OrderConfirmation = () => {
    const { resetCart} = useContext(StoreContext);
    const navigate = useNavigate();
    useEffect(() =>{
   resetCart();

    },[resetCart]);
    const handleReturnHome = () =>{
        navigate('/');
    };
  return (
    <div className="order-confirmation">
      <h1>Order has been placed!</h1>
      <button onClick={handleReturnHome}>Return to Home</button>
    </div>
  );
};

export default OrderConfirmation
