import React,{useState} from "react"
import OrderBtn from "./OrderBtn";
import ContactForm from "./ContactForm";

const OrderForm = ({contacts, setContacts}) => {
    const handleBtnClick = (buttonId) => {
        if(buttonId==="add"){
            const newContact = <ContactForm />;
            setContacts(prev => [...prev, newContact]);
        }
        else{
            alert(`${buttonId} was clicked`)
        }
    }
    
    return (
        <>
            {contacts.map((contact, index) => (<ContactForm key={index} data={contact} />))}
            <OrderBtn onButtonClick={handleBtnClick} />
        </>
    )
}

export default OrderForm;