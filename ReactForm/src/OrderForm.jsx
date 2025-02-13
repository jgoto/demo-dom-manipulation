import React from "react"
import './OrderForm.css';

const OrderForm = () => {
    return (
    <div className="order-container">
        <form className="order-form">
            Name <input />
            Email <input />
            Number of Tickets <input type="number" />
        </form>
        <div>
            <button>Add</button>
            <button>Delete</button>
        </div>
        
    </div>      
    )
}

export default OrderForm;