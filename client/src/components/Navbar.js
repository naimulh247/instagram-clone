import React from 'react'

const NavBar = ()=>{
    return(
        <nav>
        <div className="nav-wrapper">
            
          <a  className="brand-logo">Logo</a>
          <ul id="nav-mobile" className="right">
            <li><a >Sass</a></li>
            <li><a >Components</a></li>
            <li><a >JavaScript</a></li>
          </ul>
        </div>
      </nav>
    )
}

export default NavBar