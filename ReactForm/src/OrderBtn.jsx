import React, {useState} from "react";

const OrderBtn = ({onButtonClick}) => {
    return (    
        <div className="order-btns">
            <button onClick={() => onButtonClick("add")} >Add</button>
            <button onClick={() => onButtonClick("delete")}>Delete</button>
        </div>
    )
}

export default OrderBtn