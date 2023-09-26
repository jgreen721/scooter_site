import React, {useState} from 'react'
import {chevronIcon} from "../../../../../const"


const FAQItem = ({faqitem}) => {
    const [showAnswer,setShowAnswer] = useState(false)
  return (
    <li key={faqitem.id} className="faq-item">
    <div className="faqitem-header">
        <h4 className="bold faqitem-header">{faqitem.question}</h4>
        <img onClick={()=>setShowAnswer(!showAnswer)} className={showAnswer ? "arrow-icon flip-arrow" : "arrow-icon"} src={chevronIcon} alt="chev-icon" />
    </div>
    <div className={showAnswer ? "faq-answer-div show-answer" : "faq-answer-div"}>
       <p className="faqitem-answer"> {faqitem.answer} </p>
    </div>
</li>
  )
}

export default FAQItem