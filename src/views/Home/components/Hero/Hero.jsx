import React from 'react'
import "./Hero.css"
import { rightArrowIcon,lineIcon, whiteCirclesIcon } from '../../../../const'
import {motion} from "framer-motion";


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
  hidden: { opacity: 0,y:-25,scale:0 },
  show: { opacity: 1,y:0,scale:1 },
};

const Hero = () => {
  return (
    <header className="home-hero">
       <div className="hero-overlay">
            {/* <div className="arrow-div-container"> */}
              {/* <img className="line-icon mobile-line-icon" src={lineIcon} alt="" /> */}
              <img className="right-arrow mobile-right-arrow" src={rightArrowIcon} alt="" />
            {/* </div> */}
            <img className="white-circles-hero-img" src={whiteCirclesIcon} alt="" />
        </div> 
        <motion.div variants={container} initial="hidden" animate="show"  className="hero-card">
            <motion.div variants={listItem} className="hero-header">
            <h1 className="hero-h1 desktop-h1 header-font">Scooter sharing</h1>
            <h1 className="hero-h1 desktop-h1 header-font">made simple</h1>
            {/* <h1 className="hero-h1 mobile-hero-header header-font">Scooter sharing made simpleeeeee</h1> */}
            </motion.div>
            <h1 className="hero-h1 mobile-hero-header header-font">Scooter sharing made simple</h1>

            <div className="hero-arrow-blurb-row">
            <img className="desktop-line-icon" src={lineIcon} alt="" />
            <div className="hero-blurb-btn-div">
            <motion.p variants={listItem} className="hero-blurb">
            Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient 
  locations in each of our cities. Use our app to locate the nearest bike, unlock 
  it with a tap, and you’re away!
            </motion.p>
            <motion.button variants={listItem} className="btn header-btn primary-btn">Get Scootin</motion.button>
            </div>
            <img className="desktop-right-arrow" src={rightArrowIcon} alt="" />

            </div>
            {/* <img className="right-arrow" src={rightArrowIcon} alt="" /> */}

        </motion.div>
    </header>
  )
}

export default Hero