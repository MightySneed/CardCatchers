import { Route, Routes, Link } from 'react-router-dom'
import './App.css'
import Welcome from './pages/Welcome'
import Register from './pages/Register'
import Login from './pages/Login'
import Search from './pages/Search';
import MyAccount from './pages/myAccount'
import MyCollections from './pages/MyCollections'
import UpdateDetails from './pages/UpdateDetails'
import TCs from './assets/TermsAndConditions'
import { useState } from 'react'
import PrivPol from './assets/PrivacyPolicy'
import ViewAllCollections from './pages/ViewAllCollections'
import CookiePolicy from './assets/CookiePolicy'


const App = () => {

 
  return (
    <div id="AllParent">
      <div id="Navbar">
          <ul className='Navbarlist'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/search">Search</Link></li>
            <li><Link to="/my-account">My Account</Link></li>
            </ul>
        </div>


      <Routes>
        <Route path='/' element={<Welcome />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/search' element={<Search />} />
        <Route path='/my-account' element={<MyAccount />}></Route>
        <Route path='/my-collections' element={<MyCollections />}></Route>
        <Route path='/update-details' element={<UpdateDetails />}></Route>
        <Route path='/terms-and-conditions' element={<TCs />}></Route>
        <Route path='/privacy-notice' element={<PrivPol />}></Route>
        <Route path='/all-collections' element={<ViewAllCollections />}></Route>
        <Route path='cookie-policy' element={<CookiePolicy />}></Route>
      </Routes>

      <footer id='footer'>
        <h4>Contact Us</h4>
        <h4>About Us</h4>
        <Link to='/terms-and-conditions'>Terms and Conditions</Link>
        <Link to='/privacy-notice'>Privacy Notice</Link>
        <Link to='/cookie-policy'>Cookie Policy</Link>
      </footer>
    </div>
  )
}

export default App