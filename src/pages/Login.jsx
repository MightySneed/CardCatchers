import { useState } from "react"
import {login} from "../utilities/login"
import "../App.css"

const Login = ({setIsLoggedIn}) => {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const submitHandler = async (event) => {
        event.preventDefault()
        const status = await login(email, username, password)
        if (status === 200) {
            setIsLoggedIn(true)
        } else {
            setIsLoggedIn(false)
        }
    }

    return (
        <div>
            <hr />
            <form onSubmit={submitHandler} className="login-form">
                <input className="inputbox-style" onChange={(event)=> setEmail(event.target.value)} placeholder="Email" />
                <br />
                <input className="inputbox-style" onChange={(event)=> setUsername(event.target.value)} placeholder="Username" />
                <br />
                <input className="inputbox-style" onChange={(event)=> setPassword(event.target.value)} placeholder="Password" />
                <br />
                
                <button className="login-button" type="submit">LOGIN</button>
            </form>
            <hr />
        </div>  
    )
}

export default Login