import React from 'react'
import "./ProcessList.css";
import {scooterIcon, locateIcon,rideIcon} from "../../../../const"
import {motion} from "framer-motion";


const parentVar={
    shrink:{
        scale:0
    },
    scaleup:{
        scale:1,
        transition:{
            delayChildren:.5,
            staggerChildren:.5
        }
    }
}

const itemVar={
    shrink:{
        scale:0
    },
    scaleup:{
        scale:1,
        transition:{
            duration:2
        }
       
       
      
    }
}


const ProcessList = () => {
    var processList=[
        {id:1,icon:scooterIcon,title:"Locate with app",blurb:"Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away."},
        {id:2,icon:locateIcon,title:"Pick your scooter",blurb:"We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost."},
        {id:3,icon:rideIcon,title:"Enjoy the ride",blurb:"Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you’re off! Always lock bikes away from walkways and accessibility ramps."},
    ]
  return (
    <div className="process-list-container">
        <motion.ul variants={parentVar} initial="shrink" animate="scaleup" className="process-list">
        {/* <div className="gray-line"></div> */}

            {processList.map(p=>(
                <motion.li variants={itemVar} key={p.id} className="process-item">
                    <img className="process-item-img" src={p.icon} alt="" />
                    <div>
                    <h4 className="process-item-header">{p.title}</h4>
                    <p className="process-item-blurb">{p.blurb}</p>
                    </div>
                </motion.li>
            ))}
        </motion.ul>
    </div>
  )
}

export default ProcessList