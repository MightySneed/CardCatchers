import { useState } from "react"
import register from "../utilities/register"
import "../App.css"

const Register = () => {
    const submitHandler = async (event) => {
        event.preventDefault()
        await register(email, username, password)
    }
    const [email, setEmail] = useState()
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    return (
        <div>
            <hr />
        <form onSubmit={submitHandler} className="register-form">
            <input className="inputbox-style" onChange={(event)=>setEmail(event.target.value)} placeholder="Email"></input>
            <br />
            <input className="inputbox-style" onChange={(event)=>setUsername(event.target.value)} placeholder="Username"></input>
            <br />
            <input className="inputbox-style" onChange={(event)=>setPassword(event.target.value)} placeholder="Password"></input>
            <br />
            <button className="register-button" type="submit">REGISTER</button>
            <br />
        </form>
        <hr />
        </div>
    )
}

export default Register