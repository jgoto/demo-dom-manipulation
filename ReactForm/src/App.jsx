import { useState } from 'react'
import './App.css'
import OrderForm from './OrderForm';


function App() {
  const [contacts, setContacts] = useState([{}]);

  return (
  <div>
    <OrderForm contacts={contacts} setContacts={setContacts} />
  </div>
      
  )
}

export default App
