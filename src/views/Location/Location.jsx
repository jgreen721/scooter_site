import React from 'react'
import {NotListed,Map} from "./components"
import { Header } from '../../components'

const Location = () => {
  return (
    <div className="location-view">
      <Header title="Locations" className="location"/>
      <Map/>
      <NotListed/>
    </div>
  )
}

export default Location