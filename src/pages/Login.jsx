import { useState } from "react";
import { login } from "../utilities/login";
import "../App.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Login = ({ setIsLoggedIn, isLoggedIn, username, setUsername }) => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize navigate function

  const submitHandler = async (event) => {
    event.preventDefault();
    const status = await login(email, username, password);
    if (status === 200) {
      await setIsLoggedIn(true);
      setUsername(username);
      console.log(username);
      console.log(isLoggedIn);
      console.log("Login successful.");
      navigate("/"); // Redirect to welcome page
    } else {
      await setIsLoggedIn(false);
      console.log("Login failed.");
    }
  };

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