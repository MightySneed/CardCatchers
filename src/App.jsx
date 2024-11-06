import { Route, Routes, Link } from 'react-router-dom'
import './App.css'
import Welcome from './pages/Welcome'
import Register from './pages/Register'
import Login from './pages/Login'
import Search from './pages/Search'
import MyAccount from './pages/myAccount'
import { useState } from 'react'
import Game from './pages/game'
import SearchBar from './pages/SearchBar'


const App = () => {
  const [count, setCount] = useState(0)
  

  return (
    <div>

        <div id="Navbar">
                <ul className='Navbarlist'>
            <li><Link className="nav-text" to="/">Home</Link></li>
            <li><Link className="nav-text" to="/login">Login</Link></li>
            <li><Link className="nav-text" to="/register">Register</Link></li>
            <li><Game/></li>
            <li><SearchBar/></li>
            <li><Link className="nav-text" to="/my-account">My Account</Link></li>
            </ul>
        </div>
{/* Navbar present for now. LI/UL added to tie it to CSS for the time. */}
      <Routes>
        <Route  path='/' element={<Welcome />}></Route>
        <Route  path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/search' element={<Search />}></Route>
        <Route path='/my-account' element={<MyAccount />}></Route>
      </Routes>

      <footer id='footer'>
        <h4>Contact Us</h4>
        <h4>About Us</h4>
        <h4>Terms and Conditions</h4>
        <h4>Privacy Policy</h4>
      </footer>
    </div>
  )
}

export default App
