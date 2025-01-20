import React from 'react'
import { NavLink } from 'react-router'
import './Navbar.css'
import { FaBars } from "react-icons/fa";
function Navbar() {
  return (
    <div>
      <nav>
        <NavLink to='/'>
        <div className="nav-l">
          Furnish
        </div>
        </NavLink>
        <div className="nav-r">
          <NavLink to='/' style={({isActive})=> ({color: isActive ? "white" : "#40525A"})}>Home</NavLink>
          <NavLink to='/add' style={({isActive})=> ({color: isActive ? "white" : "#40525A"})}>Add</NavLink>
          <NavLink to='/wishlist' style={({isActive})=> ({color: isActive ? "white" : "#40525A"})}>Wishlist</NavLink>
          <NavLink>Blog</NavLink>
          <NavLink>Contact</NavLink>
          <button><FaBars /></button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
