import { Route, Routes, Link } from 'react-router-dom'
import './App.css'
import Welcome from './pages/Welcome'
import Register from './pages/Register'
import Login from './pages/Login'
import Search from './pages/Search'
import MyAccount from './pages/myAccount'
import Game from './pages/game'
import SearchBar from './pages/SearchBar'
import MyCollections from './pages/MyCollections'
import UpdateDetails from './pages/UpdateDetails'
import TCs from './assets/TermsAndConditions'


const App = () => {  

  return (
    <div>
      <div id="Navbar">
          <ul className='Navbarlist'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Game/></li>
            <li><SearchBar/></li>
            <li><Link to="/my-account">My Account</Link></li>
          </ul>
      </div>      {/* Navbar present for now. LI/UL added to tie it to CSS for the time. */}
      <Routes>
        <Route path='/' element={<Welcome />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/search' element={<Search />}></Route>
        <Route path='/my-account' element={<MyAccount />}></Route>
        <Route path='/my-collections' element={<MyCollections />}></Route>
        <Route path='/update-details' element={<UpdateDetails />}></Route>
        <Route path='/terms-and-conditions' element={<TCs />}></Route>
      </Routes>
      <footer id='footer'>
        <h4>Contact Us</h4>
        <h4>About Us</h4>
        <Link to='/terms-and-conditions'>Terms and Conditions</Link>
        <h4>Privacy Policy</h4>
      </footer>
    </div>
  )
}

export default App