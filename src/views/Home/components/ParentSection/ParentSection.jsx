import React from 'react'
import {RowSection} from ".."
import { paymentsImg,telemetryImg, nearYouImg } from '../../../../const'
import "./ParentSection.css"

const ParentSection = () => {
    const sections =[
        {id:1,title:"Easy to use riding telemetry",btnText:"Learn More",blurb:"The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app.",img:telemetryImg,circleSide:"right",arrowClassname:"right-bottom",swap:false},
         {id:2,title:"Coming to a city near you",btnText:"Learn More",blurb:"Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year.",img:nearYouImg,circleSide:"left",arrowClassname:"left-top",swap:true},
        {id:3,title:"Zero hassle payments",btnText:"Learn More",blurb:"Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month.",img:paymentsImg,circleSide:"right",arrowClassname:"right-top",swap:false},
    ]
  return (
    <div className="parent-section-container">
      <div className="desktop-section">
       {sections.map(s=>(
        <RowSection key={s.id} {...s} isMobile={false}/>
      ))} 
      </div>

      <div className="mobile-section">
      {sections.map(s=>(
        <RowSection key={s.id} {...s} isMobile={true}/>
      ))} 
      </div>

    </div>
  )
}

export default ParentSection