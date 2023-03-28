import React from 'react'
import background from './background.jpeg'
import about from './main.module.css'
import Navbar from './Navbar'

export default function About() {
  return (
    <>
    <Navbar/>
    <div className={about.main_container}>
            <div className={about.content_section}>
                <p className={about.free}>About Us</p>
                <h2><span> We </span> Let's Make your <br /> Weeding Memorable <br /> in onclick</h2>
                <p className={about.content}>The best luxury wedding planners in India to plan <br /> your dream wedding</p>
                <button className={about.btn_getStared}> LinkedIn </button>
                <button className={about.btn_howToUse}>Contact Us</button>
            </div>
            <div className={about.image_bg}>
                <img src={background} alt="background" />
            </div>
        </div>
        </>
  )
}
