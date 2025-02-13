import React from "react"
import './OrderForm.css';
import OrderBtn from "./OrderBtn";

const OrderForm = () => {
    return (
    <div className="order-container">
        <form className="order-form">
            Name <input />
            Email <input />
            Number of Tickets <input type="number" />
        </form>
        <OrderBtn />        
    </div>      
    )
}

export default OrderForm;