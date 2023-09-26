import React from 'react'
import {motion} from "framer-motion";
import {Header, ItemsRow} from "../../components"
import { RowSection } from '../Home/components';
import { joinUsImg } from '../../const';
import {Jobs} from "./components"
import { ourTechImg, ourIntegrityImg, ourCommunityImg  } from '../../const'


const Careers = () => {
  const rowSectionData = {id:1,title:"Care to join our mission?",blurb:"We’re always looking for ambitious individuals to help us on our journey. If you’re passionate about our mission to provide clean, accessible transport to improve urban living we want to hear from you!",img:joinUsImg,circleSide:"right",arrowClassname:"right-bottom right-bottom-careers",swap:false}
  
  const values =[
    {id:1,title:"Our tech",img:ourTechImg,blurb:"We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!"},
    {id:2,title:"Our integrity",img:ourIntegrityImg,blurb:"We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve."},
    {id:3,title:"Our community",img:ourCommunityImg,blurb:"We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees."},
]
  return (
     <motion.div 
    initial={{ translateX: '-100vw' }}
    animate={{ translateX: 0 }}
    exit={{ translateX:'100vw' }}
    transition={{ duration: 1 }} 
    className="careers-view">
      <Header title="Careers" className="career"/>
      <RowSection {...rowSectionData}/>
      <ItemsRow title="Why join us?" data={values}/>
      <Jobs/>
      </motion.div>
  )
}

export default Careers