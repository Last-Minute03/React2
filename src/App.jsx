import { useState } from 'react'
import './App.css'

export default function App() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('') 

  return (
    <div>
      <h1> Company Picnic RSVP </h1>
      <form>
        <label>Name :  <input type="text" value={name} onChange = {(e)=>{
            setName(e.target.value)
        }} />  
        </label>
        <br />
        <label>Email : <input type="text" value={email} onChange = {(v)=>{
            setEmail(v.target.value)
        }} />  
        </label>
        <br/>
        <button type="submit"><label>Add Guest</label></button>
      </form>
      <p>{name}</p>
      <p>{email}</p>
    </div>
  )
}