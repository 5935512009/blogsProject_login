import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
export default function Navbar() {
  
  return (
    <>
      <div className="navbar">
        <div className="nav-menu">
          <ul className="nav-list">
            <li ><Link to="./Home">home</Link></li>
            <li ><Link to="./Blogs">blogs</Link></li>
            <li ><Link to="./Login">login</Link></li>
            <li ><Link to="./Register">register</Link></li>
          </ul>
        </div>
      </div>
    </>
  )
}
