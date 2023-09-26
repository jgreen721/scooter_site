import React from 'react'
import {motion} from "framer-motion";
import "./Jobs.css"


const jobs_container = {
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
  
  const jobs_item = {
    hidden: { opacity: 0,x:-500 },
    show: { opacity: 1,x:0 },
  };

const Jobs = () => {
    const jobs=[
        {id:1,title:"General Manager",location:"Jakarta, Indonesia"},
        {id:2,title:"UI/UX Designer",location:"Yakahama, Indonesia"},
        {id:3,title:"Blog Content Copywriter",location:"New York, United States"},
        {id:4,title:"Graphic Designer",location:"New York, United States"},
        {id:5,title:"Fleet Supervisor",location:"Jakarta, Indonesia"},
        {id:6,title:"UX Analyst",location:"London, United Kingdom"}
     ]
  return (
    <div classNames="jobs-container">
        <motion.ul variants={jobs_container} initial="hidden" animate="show" className="jobs-list">
            {jobs.map(job=>(
                <motion.li variants={jobs_item} className="jobs-item">
                    <div>
                        <h2 className="header-font text-dark">{job.title}</h2>
                        <h4 className="header-font text-dark thin">{job.location}</h4>
                    </div>
                    <button className="btn primary-btn">Apply</button>
                </motion.li>
            ))}
        </motion.ul>
    </div>
  )
}

export default Jobs