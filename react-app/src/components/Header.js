import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'


function Header() {
  return (
    <div className='header'>
        <div className='logo'>
            {/* <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png"></img> */}
        </div>
        <div className='menu'>
            <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/about">About</Link>
                </li>
                <li>
                <Link to="/contact">Contact</Link>
                </li>
                <li>
                <Link to="/login">Login</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Header