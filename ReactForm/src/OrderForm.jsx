import React,{useState} from "react"
import './OrderForm.css';
import OrderBtn from "./OrderBtn";
import ContactForm from "./CotactForm";

const OrderForm = () => {
    const [contacts, setContacts] = useState([])
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
            {contacts}
            <OrderBtn onButtonClick={handleBtnClick} />
        </>
    )
}

export default OrderForm;