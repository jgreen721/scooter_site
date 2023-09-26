import React from 'react'
import { whiteLogoIcon } from '../../const'
import {Link} from "react-router-dom";
import { facebookIcon,twitterIcon,instagramIcon } from '../../const';
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-content">
            <div className="footer-column">

                <div className="footer-logo-div">
                <Link to="/">

                    <img src={whiteLogoIcon} alt="" className="footer-logo" />
                  </Link>
                </div>
                <ul className="footer-links">
                  <li className="footer-item">
                    <Link className="footer-link" to="/about">
                      <p>About</p>
                    </Link>
                  </li>
                  <li className="footer-item">
                    <Link className="footer-link" to="/location">
                      <p>Location</p>
                    </Link>
                  </li>
                  <li className="footer-item">
                    <Link className="footer-link" to="/careers">
                      <p>Careers</p>
                    </Link>
                  </li>
                </ul>
            </div>
            <div className="footer-column">
              <ul className="media-links">
                <li className="media-link-item">
                  <a href="https://facebook.com" target="_blank">
    <img src={facebookIcon} alt="" />
                  </a>
                </li>
                <li className="media-link-item">
                  <a href="https://twitter.com" target="_blank">
    <img src={twitterIcon} alt="" />
                  </a>
                </li>
                <li className="media-link-item">
                  <a href="https://instagram.com" target="_blank">
    <img src={instagramIcon} alt="" />
                  </a>
                </li>
              </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer