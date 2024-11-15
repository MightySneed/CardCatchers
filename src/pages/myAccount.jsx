import { useState } from "react"
import deleteAccount from "../utilities/deleteAccount"

const MyAccount = ({isLoggedIn}) => {
    const [isClicked, setIsClicked] = useState(false)

    const deleteaccountbtn = () => {
        console.log('delete button clicked')
        setIsClicked(true)
    }
    const DeleteAccount = () => {
        setIsClicked(!isClicked)
        deleteAccount()
    }
    const dontDelete = () => {
        setIsClicked(!isClicked)
    }

    return (
        <div>
            { isLoggedIn ? <>
            <br />
            <br />
            {isClicked && <div>
            <h3>Are you sure you wish to delete your account?</h3>
            <br />
            <h4>Please beware! All information and collections will be removed from the system.</h4>
            <br />
            <button className="yes-bttn" type="submit" onClick={DeleteAccount}>Yes</button>
            <br />
            <button className="no-bttn" type="submit" onClick={dontDelete}>No</button>
            </div>
            }
            <div className="bttn-container">
            <a href="/my-collections"><button className="collections-bttn">My Collections</button></a>
            <button className="del-acc-bttn" onClick={deleteaccountbtn}>Delete Account</button>
            <a href="/update-details"><button className="update-acc-bttn">Update Account Details</button></a>
            </div> 
            </> 
            : <><h2>You are not logged in.</h2></> }
        </div>
    )
}
export default MyAccount