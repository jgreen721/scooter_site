import React from 'react'
import "./Header.css";
import { whiteCirclesIcon } from '../../const';

const Header = ({title,className}) => {
  return (
    <div className={`${className}-header header`}>
    <h2 className="header-h2">{title}</h2>
    <img src={whiteCirclesIcon} className="header-circles" alt="white-circles"/>
</div>
  )
}

export default Header