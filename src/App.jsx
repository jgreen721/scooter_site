import { useState } from 'react'
import {Routes, Route, useLocation} from "react-router-dom"
import {Navbar,SignUp,Footer, MobileMenu} from "./components"
import {Home,About,Location,Careers} from "./views"
import { AnimatePresence } from 'framer-motion'
import './App.css'

function App() {
  const location = useLocation()
  const [showMobile,setShowMobile] = useState(false)

  return (
    <div className="app">
      <Navbar showMobile={showMobile} setShowMobile={setShowMobile}/>
      <div className="app-content">
        <MobileMenu showMobile={showMobile}/>
        <AnimatePresence>
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/location" element={<Location/>}/>
        <Route path="/careers" element={<Careers/>}/>
      </Routes>
      </AnimatePresence>
      </div>
      <SignUp/>
      <Footer/>
    </div>
  )
}

export default App
