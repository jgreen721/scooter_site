import React from 'react'
import "./NotListed.css"

const NotListed = () => {
  return (
    <div className="not-listed-container">
        <div className="not-listed-content">
            <div className="not-listed-column">
                <h1 className="header-font not-listed-header text-dark">Your City Not Listed?</h1>
            </div>
            <div className="not-listed-column">
                <p className="not-listed-blurb text-dark"> If you’d like to see Scoot in your hometown, be sure to let us know. We track 
  requests and plan launches based on demand. Feel free to message us by clicking 
  the link or messaging us on social.</p>
            </div>
            <div className="not-listed-column">
                <button className="btn primary-btn">Message Us</button>
            </div>
        </div>
    </div>
  )
}

export default NotListed