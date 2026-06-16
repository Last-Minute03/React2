import { useState } from 'react'
import './App.css'

export default function App() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('') 
// Per the request of the direction we made 2 state variables
  return (
    <div>
      <h1> Company Picnic RSVP </h1>
      <form>
        <label>Name :  <input type="text" value={name} onChange = {(e)=>{
            setName(e.target.value)
        }} />  
        </label> {/* here we re use the input onChange we did in part 1 to better suit the web application */}
        <br />
        <label>Email : <input type="text" value={email} onChange = {(v)=>{
            setEmail(v.target.value)
        }} />  
        </label>
        <br/>
        <button type="submit"><label>Add Guest</label></button>
      </form>
      <p>{name}</p> {/* Here we call the state variables back to see real time changes on the website as we put strings in the user input manually */}
      <p>{email}</p>
    </div>
  )
}
// part 2 complete