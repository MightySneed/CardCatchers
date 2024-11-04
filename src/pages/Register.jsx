import { useState } from "react"
import register from "../utilities/register"

const Register = () => {
    const submitHandler = async (event) => {
        event.preventDefault()
        await register(email, username, password)
    }
    const [email, setEmail] = useState()
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    return (
        <form onSubmit={submitHandler}>
            <input onChange={(event)=>setEmail(event.target.value)} placeholder="Email"></input>
            <br />
            <input onChange={(event)=>setUsername(event.target.value)} placeholder="Username"></input>
            <br />
            <input onChange={(event)=>setPassword(event.target.value)} placeholder="Password"></input>
            <br />
            <button type="submit">REGISTER</button>
            <br />
        </form>
    )
}

export default Register