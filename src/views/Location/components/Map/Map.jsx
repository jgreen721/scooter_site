import React from 'react'
import "./Map.css"

const Map = () => {
  return (
    <div className="map-container">
        <div className="map-content">
        <picture>
            <source media="(min-width: 950px)" srcSet="./assets/images/world-map-desktop.png"/>
            <source media="(min-width: 550px)" srcSet="./assets/images/world-map-tablet.png"/>
            <img className="map-img" src="./assets/images/world-map-mobile.png"/>
        </picture> 
        <div style={{"--i":'.5s'}} className="marker marker-one">
            <h5 className="dark-text z-50">New York</h5>
        </div>
        
        <div style={{"--i":'.75s'}} className="marker marker-two">
            <h5 className="dark-text z-50">London</h5>
        </div>
         
        <div style={{"--i":'1s'}} className="marker marker-three">
            <h5 className="dark-text z-50">Yokohoma</h5>
        </div> 
        <div style={{"--i":'1.25s'}} className="marker marker-four">
            <h5 className="dark-text z-50">Jakarto</h5>
        </div>
        </div>
        <div className="mobile-tags">
            <ul className="mobile-city-list">
                <li style={{"--i":".5s"}} className="mobile-city-item">
                    <h5 className="dark-text z-50">New York</h5>
                </li>
                <li style={{"--i":".75s"}} className="mobile-city-item">
                    <h5 className="dark-text z-50">London</h5>
                </li>
                <li style={{"--i":"1s"}} className="mobile-city-item">
                    <h5 className="dark-text z-50">Jakarta</h5>
                </li>
                <li style={{"--i":"1.25s"}} className="mobile-city-item">
                    <h5 className="dark-text z-50">Yokohoma</h5>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Map