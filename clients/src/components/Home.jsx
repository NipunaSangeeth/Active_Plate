import React from "react";
import "./css/home.css";
import backgroundImage from "../assets/img/Backgro1.jpg";

function Home() {
  return (
    <div className="homeMainContainer">
      <img
        src={backgroundImage}
        alt=""
        className="firstbackgroundImageOfHomePage"
      />
      <div className="imageText">
        <div style={{color: "white", fontSize: "25px"}}>
          <p >Welcome to ActivePlate.com, a website dedicated to helping you live a</p>
          <p>healthier life in the hectic world of today. To help you make
          long-lasting,</p>
          <p>good changes in your life, we provide personalised
          guidance and </p>
          <p>health awareness. Join us for a happier, healthier life.</p>
          </div>
      </div>
    </div>
  );
}

export default Home;
