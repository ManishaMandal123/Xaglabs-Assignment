import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
        <header className="navbar">
        <h1 className="logo">LOGO</h1>
        <nav>
          <ul>
            <li> <Link to="/">OUR TEAM</Link></li>
            <li> <Link to="/personal">PERSONAL DETAILS</Link>  </li>
            <li><Link to="/contact">CONTACT</Link></li>

          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header
