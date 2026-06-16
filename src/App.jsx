import { useState } from 'react'
import './App.css'

export default function App() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('') //start of phase 2

  return (
    <div>
      <h1>RSVP Practice</h1>
      <input type="text" value = {name} onChange = { (event) => {
        //we set the value to the name variable since name's value is a string
        // then with the onChange function we make it target the input 
        // with event.target and since we want the string in the event target (the input box)
        // we use setName to change the value of name to whatever is in the input box
        setName(event.target.value)
      } } />
      {/*  Then here we are just calling the name variable again with the updated value due to onChange */}
      <p>What you are typing : {name}</p>
    </div>
  )
}