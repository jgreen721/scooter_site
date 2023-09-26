import React from 'react'
import "./SignUp.css"
import { appStore,googlePlay, semiCirclesIcon, whiteCirclesIcon } from '../../const'

const SignUp = () => {
  return (
    <section className="sign-up-section">
        <div className="sign-up-content">
            <div className="sign-up-header-div">
            <h2>Sign up and</h2>
            <h2>Scoot off today.</h2>
            </div>
            <ul className="platforms-btns-row">
                <li className="platform-item">
                    <a href="https://apple.come" target="_blank" className="platform-link">
                        <img src={appStore} alt="" />
                    </a>
                </li>
                <li className="platform-item">
                    <a href="https://google.come" target="_blank" className="platform-link">
                        <img src={googlePlay} alt="" />
                    </a>
                </li>
            </ul>
        </div>
        <div className="section-overlay">
            <img className="circle-icon circle-icon-one" src={semiCirclesIcon} alt="" />

        </div>
    </section>
  )
}

export default SignUp