import { useState } from "react"

const MyAccount = () => {
    const [isClicked, setIsClicked] = useState(false)
    
    const deleteAccount = () => {
        setIsClicked(!isClicked)
        // deleteUser.js from backend to be linked here.
    }
    const dontDelete = () => {
        setIsClicked(!isClicked)
    }

    return (
        <div>
            {isClicked && <div>
            <h3>Are you sure you wish to delete your account?</h3>
            <br />
            <h4>Please beware! All information and collections will be removed from the system.</h4>
            <br />
            <button className="yes-bttn" type="submit" onClick={deleteAccount}>Yes</button>
            <br />
            <button className="no-bttn" type="submit" onClick={dontDelete}>No</button>
            </div>
            }
            <div className="bttn-container">
            <a href="/my-collections"><button className="collections-bttn">My Collections</button></a>
            <button className="del-acc-bttn">Delete Account</button>
            <a href="/update-details"><button className="update-acc-bttn">Update Account Details</button></a>
            </div>
        </div>
    )
}
export default MyAccount