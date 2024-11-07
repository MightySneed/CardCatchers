import { Route, Routes, Link } from 'react-router-dom'
import './App.css'
import Welcome from './pages/Welcome'
import Register from './pages/Register'
import Login from './pages/Login'
import Search from './pages/SearchYGO'
import MyAccount from './pages/myAccount'
import { useState } from 'react'
import Game from './pages/game'
import SearchBar from './pages/SearchBar'
import SearchBarYGO from './pages/SearchYGO'
import SearchBarMTG from './pages/SearchMTG'
import SearchBarPOK from './pages/SearchPOK'


const App = () => {
  const [count, setCount] = useState(0)
  const [GameSelect, setGameSelect] = useState(`YGO`)
  

  return (
    <div>

        <div id="Navbar">
                <ul className='Navbarlist'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
            <Game setGameSelect={setGameSelect}/>
            {/* <li>
            {(GameSelect === `YGO`) && <><SearchBarYGO/> <p>YGO</p></>}
            LEGACY SEARCHBARS
            {(GameSelect === `MTG`) && <><SearchBarMTG/> <p>MTG</p></>}
            {(GameSelect === `POK`) && <><SearchBarPOK/> <p>POK</p></>}
            </li> */} 
            <li><Link to="/my-account">My Account</Link></li>
            </ul>
        </div>
        <div>
        <>
        {(GameSelect === `YGO`) && <><SearchBarYGO/> <p>YGO</p></>}
        {(GameSelect === `MTG`) && <><SearchBarMTG/> <p>MTG</p></>}
        {(GameSelect === `POK`) && <><SearchBarPOK/> <p>POK</p></>}
        </>
        </div>
{/* Navbar present for now. LI/UL added to tie it to CSS for the time. */}
      <Routes>
        <Route path='/' element={<Welcome />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/search' element={<Search />}></Route>
        <Route path='/my-account' element={<MyAccount />}></Route>
      </Routes>
    </div>

  )
}

export default App
