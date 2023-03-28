import React from 'react'
import background from './background.jpeg'
import home from './main.module.css'
import Navbar from './Navbar'

export default function Home() {
  return (
    <>
    <Navbar/>
    <div className={home.main_container}>
            <div className={home.content_section}>
                <p className={home.free}>Totally Free</p>
                <h2><span> We </span> Let's Make your <br /> Weeding Memorable <br /> in onclick</h2>
                <p className={home.content}>The best luxury wedding planners in India to plan <br />your dream wedding</p>
                <button className={home.btn_getStared}> Explore </button>
                <button className={home.btn_howToUse}>Our Packages</button>
            </div>
            <div className={home.image_bg}>
                <img src={background} alt="logo" />
            </div>
        </div>
        </>
  )
}
