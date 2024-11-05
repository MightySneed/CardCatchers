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
            <form onSubmit={submitHandler}>
                <input onChange={(event)=> setEmail(event.target.value)} placeholder="Email" />
                <br />
                <input onChange={(event)=> setUsername(event.target.value)} placeholder="Usernme" />
                <br />
                <input onChange={(event)=> setPassword(event.target.value)} placeholder="Password" />
                <br />
                <button type="submit">LOGIN</button>
            </form>
            <hr />
        </div>  
    )
}

export default Login