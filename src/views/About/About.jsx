import React from 'react'
import "./About.css"
import {Values,FAQ} from "./components"
import { RowSection } from '../Home/components'
import {Header,ItemsRow} from "../../components"
import {motion} from "framer-motion"
import { betterLivingImg, digitalLivingImg,ourTechImg, ourIntegrityImg, ourCommunityImg  } from '../../const'



const About = () => {
  const aboutSections = [
    {id:1,title:"Mobility for the digital era",btnText:false,blurb:"Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips.",img:digitalLivingImg,circleSide:"right",arrowClassname:"right-bottom",swap:false},
    {id:2,title:"Better urban living",btnText:false,blurb:"We’re helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride.",img:betterLivingImg,circleSide:"left",arrowClassname:"left-top",swap:true},
  ]

  const values =[
    {id:1,title:"Our tech",img:ourTechImg,blurb:"We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!"},
    {id:2,title:"Our integrity",img:ourIntegrityImg,blurb:"We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve."},
    {id:3,title:"Our community",img:ourCommunityImg,blurb:"We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees."},
]
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1 }} 
    className="home-view">
      <Header title="About" className="about"/>

      <div className="about-sections-parent">
      <div className="desktop-section">
       {aboutSections.map(s=>(
        <RowSection key={s.id} {...s} isMobile={false}/>
      ))} 
      </div>

      <div className="mobile-section">
      {aboutSections.map(s=>(
        <RowSection key={s.id} {...s} isMobile={true}/>
      ))} 
      </div>
      </div>
      {/* <Values/> */}
      <ItemsRow data={values} title="Our Values"/>
      <FAQ/>
    </motion.div>
  )
}

export default About