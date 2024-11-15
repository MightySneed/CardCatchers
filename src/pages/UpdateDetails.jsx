import { useState } from "react";
import updateEmail from '../utilities/updateEmail';
import updatePassword from "../utilities/updatePassword";
import updateUsername from "../utilities/updateUsername";

const UpdateDetails = () => {
    const [isClicked, setIsClicked] = useState(false);
    const [selectedField, setSelectedField] = useState(null);
    const [inputValue, setInputValue] = useState("");

    const handleUpdateClick = (field) => {
        setSelectedField(field);
        setIsClicked(true);
        setInputValue(""); // Clear input when switching fields
    };

    const submit = () => {
        if (!inputValue) return;

        // Call the relevant update function based on selectedField
        if (selectedField === "email") {
            updateEmail(inputValue);
        } else if (selectedField === "username") {
            updateUsername(inputValue);
        } else if (selectedField === "password") {
            updatePassword(inputValue);
        }

        setIsClicked(false);
        setSelectedField(null); // Reset field selection after submission
    };

    return (
        <div>
            <br />
            <br />
            {isClicked && (
                <div>
                    <input
                        type="text"
                        placeholder={`Update ${selectedField}`}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <br />
                    <button className="load-more-bttn" type="submit" onClick={submit}>
                        Submit
                    </button>
                </div>
            )}
            <br />
            <button className="updt-email-bttn" onClick={() => handleUpdateClick("email")}>
                Update Email
            </button>
            <button className="updt-user-bttn" onClick={() => handleUpdateClick("username")}>
                Update Username
            </button>
            <button className="updt-pass-bttn" onClick={() => handleUpdateClick("password")}>
                Update Password
            </button>
        </div>
    );
};

export default UpdateDetails;
