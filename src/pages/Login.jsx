import { useState } from "react";
import { login } from "../utilities/login";
import "../App.css";
import { useNavigate } from "react-router-dom"; 

const Login = ({ setIsLoggedIn, setUsername }) => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [inputUsername, setInputUsername] = useState(''); 
  const navigate = useNavigate(); 

  const submitHandler = async (event) => {
    event.preventDefault();
    const status = await login(email, inputUsername, password); 
    if (status === 200) {
      setIsLoggedIn(true);
      setUsername(inputUsername); 
      console.log(inputUsername);
      console.log("Login successful.");
      navigate("/"); 
    } else {
      setIsLoggedIn(false);
      console.log("Login failed.");
    }
  };

    return (
        <div>
            <hr />
            <form onSubmit={submitHandler} className="login-form">
                <h3>Please enter your email or username. Then type in you password to log in.</h3>
                <br></br>
                <input className="inputbox-style" onChange={(event)=> setEmail(event.target.value)} placeholder="Email" />
                <br />
                <input className="inputbox-style" onChange={(event)=> setInputUsername(event.target.value)} placeholder="Username" />
                <br />
                <input className="inputbox-style" onChange={(event)=> setPassword(event.target.value)} placeholder="Password" />
                <br />
                <button className="login-button" type="submit">LOGIN</button>
            </form>
            <hr />
        </div>  
    )
}

export default Login;
