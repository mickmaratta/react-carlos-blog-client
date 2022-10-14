import React from 'react';
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">Carlos Blog</div>
        <div className="links">
          <Link className="link" to="/?cat"><h6>ART</h6></Link>
          <Link className="link" to="/?cat"><h6>SCIENCE</h6></Link>
          <Link className="link" to="/?cat"><h6>TECHNOLOGY</h6></Link>
          <Link className="link" to="/?cat"><h6>CINEMA</h6></Link>
          <Link className="link" to="/?cat"><h6>DESIGN</h6></Link>
          <Link className="link" to="/?cat"><h6>FOOD</h6></Link>
          <span>John</span>
          <span>Logout</span>
          <span className='write'>
            <Link className='link' to="write">Write</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar