import React from 'react'
import "./csspart.css"

function AboutUspart() {
  return (
    <div className="about-section">
        <div className="inner-container">
            <h1 style={{color: "#E33C08"}}>About Us</h1>
            <p className="text">
                Welcome to ActivePlate.com , a dedicated platform on a mission to transform the way you approach health and well-being amidst your busy life. We understand the demands of modern, fast-paced lifestyles and the toll they can take on your health. That's why we're here to guide you towards a healthier and more fulfilling existence. We believe that through ease, customization, and health awareness, we can empower you to make lasting and positive changes in your life.
            </p>
            <div className="skills">
                <span style={{color: "#E33C08"}} > Healthy Diet</span>
                <span style={{color: "#E33C08"}} > Regular Exercise</span>
                <span style={{color: "#E33C08"}} > Your Health</span>
            </div>
        </div>
    </div>
    
  )
}

export default AboutUspart