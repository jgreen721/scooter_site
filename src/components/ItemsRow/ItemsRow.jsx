import React from 'react'
import "./ItemsRow.css"

const ItemsRow = ({data,title}) => {
  return (
    <div className="items-row-parent">
        <h3 className="items-row-header header-font">{title}</h3>
        <ul className="items-row-list">
            {data.map(item=>(
                <li key={item.id} className="items-row-item">
                    <div className="items-row-img-div">
                        <img className="items-row-img" src={item.img} alt="items-row-img" />
                        <div className="items-row-count-div">
                            <h5 className="items-row-count">0{item.id}</h5>
                        </div>
                    </div>
                    <div className="items-row-item-content">
                        <h4 className="items-row-item-header header-font">{item.title}</h4>
                        <p className="items-row-blurb">{item.blurb}</p>
                    </div>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default ItemsRow