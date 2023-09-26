import React from 'react'
import { rightArrowIcon, lineIcon } from '../../../../const'
import "./RowSection.css"


const RowSection = ({title,blurb,img,circleSide,arrowClassname,swap,isMobile}) => {
  // console.log(title,circleSide)
  
    return isMobile ?     
    <div className={`${circleSide}-circle-section section mobile-section`}>
    <div className="section-column">
        <div className="section-img-div">
          <img className="section-img" src={img} alt="" />
        </div>
    </div>
      
      <div className="section-column">
        <div className="section-content-card">
          <h2 className="section-header header-font">{title}</h2>
          <p className="section-blurb">{blurb}</p>
          <button className="btn primary-btn">Learn More</button>
        </div>
      </div>

      <img className={`${arrowClassname} section-arrow-icon`} src={rightArrowIcon} alt="" />
      {arrowClassname == "right-bottom" || arrowClassname == "right-bottom right-bottom-careers" && <img className={`right-bottom-line-icon line-${arrowClassname}`} src={lineIcon} alt="" />}
      </div>
    
    :  !swap ? 
    <div className={`section ${circleSide}-circle-section`}>
      
      <div className="section-column">
      <div className="section-content-card">
        <h2 className="section-header header-font">{title}</h2>
        <p className="section-blurb">{blurb}</p>
        <button className="btn primary-btn">Learn More</button>
      </div>
      </div>
      <div className="section-column">
        <div className="section-img-div">
          <img className="section-img" src={img} alt="" />
        </div>
      </div>
      <img className={`${arrowClassname} section-arrow-icon`} src={rightArrowIcon} alt="" />
      {arrowClassname == "right-bottom" || arrowClassname == "right-bottom right-bottom-careers" &&<img className={arrowClassname == 'right-bottom right-bottom-careers' ? 'right-bottom-line-icon right-bottom-line-careers' : "right-bottom-line-icon"} src={lineIcon} alt="" />}
    </div>
    :
    <div className={`${circleSide}-circle-section section`}>
      <div className="section-column">
          <div className="section-img-div">
            <img className="section-img" src={img} alt="" />
          </div>
      </div>
        
        <div className="section-column">
          <div className="section-content-card">
            <h2 className="section-header header-font">{title}</h2>
            <p className="section-blurb">{blurb}</p>
            <button className="btn primary-btn">Learn More</button>
          </div>
        </div>
    
        <img className={`${arrowClassname} section-arrow-icon`} src={rightArrowIcon} alt="" />
        {arrowClassname == "right-bottom" || arrowClassname == "right-bottom right-bottom-careers" &&<img className={`right-bottom-line-icon line-${arrowClassname}`} src={lineIcon} alt="" />}
  
      </div>
    
  
}

export default RowSection