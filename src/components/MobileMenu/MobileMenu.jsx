import React from 'react'
import {Link} from "react-router-dom"
import "./MobileMenu.css"

const MobileMenu = ({showMobile}) => {
  return (
    <div className={showMobile ? "mobile-menu" : "mobile-menu hide-mobile-menu"}>
        <div className={showMobile ? "mobile-menu-content show-mobile" : "mobile-menu-content"}>
        <ul className="mobile-links">
            <li className={showMobile ? "mobile-link-item slide-item" : "mobile-link-item"}>
                <Link to="/about" className="mobile-link header-font">About</Link>
            </li>
            <li className={showMobile ? "mobile-link-item slide-item" : "mobile-link-item"}>
                <Link to="/location" className="mobile-link header-font">Location</Link>
            </li>
            <li className={showMobile ? "mobile-link-item slide-item" : "mobile-link-item"}>
                <Link to="/careers" className="mobile-link header-font">Careers</Link>
            </li>
        </ul>
        <button style={{"--i":3}} className={showMobile ? "btn primary-btn mobile-btn scaleitem" : "btn primary-btn mobile-btn"}>Get Scootin</button>
        </div>
    </div>
  )
}

export default MobileMenu