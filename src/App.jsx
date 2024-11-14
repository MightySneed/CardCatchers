import { Route, Routes, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './App.css'
import Welcome from './pages/Welcome'
import Register from './pages/Register'
import Login from './pages/Login'
import Search from './pages/Search';
import MyAccount from './pages/myAccount'
import MyCollections from './pages/MyCollections'
import UpdateDetails from './pages/UpdateDetails'
import TCs from './legalese/TermsAndConditions'
import PrivPol from './legalese/PrivacyPolicy'
import ViewAllCollections from './pages/ViewAllCollections'
import CookiePolicy from './legalese/CookiePolicy'
import Contact from './pages/Contact'
import About from './pages/About'
import logOutUtil from './utilities/logOutUtil'
import readCookie from './utilities/readCookie'


const App = () => {
  const [username, setUsername] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const logOut = () => {
    logOutUtil(isLoggedIn, setIsLoggedIn)
    console.log("You are now logged out. Your cookie expired.")
  }
useEffect (() => {
  const output = readCookie("jwt_token")
  console.log(output); 
  if (output !== '') {
    setIsLoggedIn(true);
  } else {
    setIsLoggedIn(false)}
}, [])
  return (
    <div id="AllParent">
      <div id="Navbar">
          <ul className='Navbarlist'>
            <li><Link to="/">Home</Link></li>
            { !isLoggedIn &&
            <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li> 
            </>}
            <li><Link to="/search">Search</Link></li>
            { isLoggedIn && 
            <>
              <li>Welcome {username}!</li>
              <li><Link to="/my-account">My Account</Link></li>
              <li><button className="no-bttn" onClick={logOut}>Log Out</button></li>
              </>}
            </ul>
        </div>

      <Routes>
        <Route path='/' element={<Welcome />}></Route>
        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} username={username} setUsername={setUsername} />}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/search' element={<Search username={username} setUsername={setUsername} />} />
        <Route path='/my-account' element={<MyAccount isLoggedIn={isLoggedIn} />}></Route>
        <Route path='/my-collections' element={<MyCollections />}></Route>
        <Route path='/update-details' element={<UpdateDetails />}></Route>
        <Route path='/terms-and-conditions' element={<TCs />}></Route>
        <Route path='/privacy-notice' element={<PrivPol />}></Route>
        <Route path='/all-collections' element={<ViewAllCollections />}></Route>
        <Route path='cookie-policy' element={<CookiePolicy />}></Route>
        <Route path='/contact-us' element={<Contact />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>

      <footer id='footer'>
        <Link to='/contact-us'>Contact Us</Link>
        <Link to='/about'>About</Link>
        <Link to='/terms-and-conditions'>Terms and Conditions</Link>
        <Link to='/privacy-notice'>Privacy Notice</Link>
        <Link to='/cookie-policy'>Cookie Policy</Link>
      </footer>
    </div>
  )
}

export default App