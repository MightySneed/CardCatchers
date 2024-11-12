import { useState } from "react"

const UpdateDetails = () => {
    const [isClicked, setIsClicked] = useState(false)
    const updateEmail = () => {
        setIsClicked(!isClicked)
    }
    const updateUsername = () => {
        setIsClicked(!isClicked)
    }
    const updatePassword = () => {
        setIsClicked(!isClicked)
    }
    const submit = () => {
        setIsClicked(!isClicked)
    }

    return (
        <div>
            <br />
            <br />
            {isClicked && <div>
            <input type="text" placeholder="Update"/>
            <br />
            <button type="submit" onClick={submit}>Submit</button>
            </div>
            }
            <br />
            <button onClick={updateEmail}>Update Email</button>
            <button onClick={updateUsername}>Update Username</button>
            <button onClick={updatePassword}>Update Password</button>
        </div>
    )
}
export default UpdateDetails