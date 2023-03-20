import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className='NavBar'>
      <Link to="/home">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/users">Users</Link>
      <Link to="/contact">Contact</Link>

      <button
        onClick={() => {
          localStorage.removeItem("login")
          navigate("/")
        }}>Logout</button>

    </div>
  )
}

export default NavBar