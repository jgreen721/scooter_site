import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { logoIcon, closeIcon, hamburger } from '../../const';
import { motion, animate, stagger } from 'framer-motion';
import './Navbar.css';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren:1,
      staggerChildren: 1 // Stagger the children with a delay of 0.3s
       // Delay the entire animation by 1s
    },
  },
};

const listItem = {
  hidden: { opacity: 0,y:-25 },
  show: { opacity: 1,y:0 },
};

 const Navbar = ({showMobile, setShowMobile}) => {
//   useEffect(() => {
    // Use animate to trigger the animation after the component mounts
    // animate("show");
//   }, []);

  return (
    <nav className="nav">
      <div className="nav-logo-links-column">
        <div onClick={()=>setShowMobile(!showMobile)} className="mobile-nav-icon">
          <img className="burger-icon" src={showMobile ? closeIcon : hamburger} alt="" />
        </div>
        <div className="nav-logo-div">
          <Link to="/">
            <motion.img
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2, delay: 1 }}
              className="nav-logo"
              src={logoIcon}
              alt=""
            />
          </Link>
        </div>
        <motion.ul variants={container} initial="hidden" animate="show" className="nav-links">
          <motion.li variants={listItem} className="nav-link-item">
            <Link to="/about" className="nav-link">
              <p>About</p>
            </Link>
          </motion.li>
          <motion.li variants={listItem} className="nav-link-item">
            <Link to="/location" className="nav-link">
              <p>Location</p>
            </Link>
          </motion.li>
          <motion.li variants={listItem} className="nav-link-item">
            <Link to="/careers" className="nav-link">
              <p>Careers</p>
            </Link>
          </motion.li>
        </motion.ul>
      </div>
      <button className="btn nav-btn primary-btn">Get Scootin</button>
    </nav>
  );
};

export default Navbar;
