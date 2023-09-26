import React from 'react'
import { ourTechImg, ourIntegrityImg, ourCommunityImg } from '../../../../const'
import "./Values.css"

const Values = () => {
    const values =[
        {id:1,title:"Our tech",img:ourTechImg,blurb:"We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!"},
        {id:2,title:"Our integrity",img:ourIntegrityImg,blurb:"We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve."},
        {id:3,title:"Our community",img:ourCommunityImg,blurb:"We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees."},
    ]
  return (
    <div className="values-parent">
        <h3 className="values-header header-font">Our values</h3>
        <ul className="values-list">
            {values.map(value=>(
                <li key={value.id} className="value-item">
                    <div className="value-img-div">
                        <img className="value-img" src={value.img} alt="value-img" />
                        <div className="value-count-div">
                            <h5 className="value-count">0{value.id}</h5>
                        </div>
                    </div>
                    <div className="value-item-content">
                        <h4 className="value-item-header header-font">{value.title}</h4>
                        <p className="value-blurb">{value.blurb}</p>
                    </div>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Values