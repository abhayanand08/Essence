import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const navbar = () => {
  return (
    <div className='main-navbar'>
      <nav>
        <div className="leftside">
          <Link to='/'><h2>Essence</h2></Link>
        </div>
        <div className="rightside">
          <ul>
            <Link to='/login'><li>Login</li></Link>
            <Link to='/register'><li>Register</li></Link>
          </ul>
          
        </div>
      </nav>
    </div>
  )
}

export default navbar;