import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import register from "../utilities/register";
import TermsModal from "../utilities/TCSPPModal";
import "../App.css";

const Register = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [showModal, setShowModal] = useState(false);
    
    const navigate = useNavigate(); // Initialize navigate function

    // Handle showing the modal instead of submitting immediately
    const handleRegisterClick = (event) => {
        event.preventDefault();
        setShowModal(true); // Show modal on register button click
    };

    // Proceed with registration after terms are accepted
    const handleAcceptTerms = async () => {
        setShowModal(false); // Hide modal once accepted

        // Basic validation
        if (!email || !username || !password) {
            setMessage("Please fill in all fields.");
            return;
        }

        try {
            await register(email, username, password);
            setMessage("Registration successful!");
            navigate("/"); // Redirect to welcome page
        } catch (error) {
            setMessage("Registration failed. Please try again.");
            console.error("Registration error:", error);
        }
    };

    return (
        <div>
            <hr />
            <form onSubmit={handleRegisterClick} className="register-form">
                <input
                    type="email"
                    className="inputbox-style"
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Email"
                    value={email}
                />
                <br />
                <input
                    type="text"
                    className="inputbox-style"
                    onChange={(event) => setUsername(event.target.value)}
                    placeholder="Username"
                    value={username}
                />
                <br />
                <input
                    type="password"
                    className="inputbox-style"
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Password"
                    value={password}
                />
                <br />
                <button className="register-button" type="submit">REGISTER</button>
                <br />
            </form>
            <hr />
            {message && <p className="message">{message}</p>}
            
            {/* Display modal if showModal is true */}
            {showModal && <TermsModal onAccept={handleAcceptTerms} />}
        </div>
    );
};

export default Register;
