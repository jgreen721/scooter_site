import React from 'react'
import {Hero,ProcessList,ParentSection} from "./components"
import "./Home.css"
import {motion} from "framer-motion"

const Home = () => {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 3 }} 
    className="home-view">
      <Hero/>
      <ProcessList/>
      <ParentSection/>
    </motion.div>
  )
}

export default Home