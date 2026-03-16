import React from "react";
import { Email, Fb, Insta } from "../assets"; //photos deka ganna

function FooterPage() {
  return (
    <div
      style={{
        display: "flex",
        fontSize: "14px",
        justifyContent: "space-between",
        padding: "40px",
        marginBottom: "25px",
        width: "100%",
      }}
    >
      <div
        style={{
          alignItems: "left",
          width: "22%",
        }}
      >
        <h1
          style={{
            fontSize: "26px",
            color: "#E33C08",
            fontWeight: "bold",
          }}
        >
          ACTIVE PLATE
        </h1>
        <p
          style={{
            color: "white",
            fontSize: "15px",
            marginTop: "6%",
          }}
        >
          Fitness is a terrific hobby to have because it emphasises living a
          healthy, clean lifestyle.
        </p>
        <h1
          style={{
            fontSize: "25px",
            color: "white",
            fontWeight: "bold",
            marginTop: "14%",
          }}
        >
          Social Links
        </h1>
        <div style={{ display: "flex"}}> 
          <img src={Fb} alt="" style={{width: "3rem", height: "3rem",}} />
          <img src={Insta} style={{width: "3.4rem", height: "3rem"}} />
        </div>
      </div>
      <div
        style={{
          marginLeft: "-55px",
          width: "22%",
        }}
      >
        <h1
          style={{
            fontSize: "26px",
            color: "white",
            fontWeight: "bold",
          }}
        >
          Quick Links
        </h1>
        <div
          style={{
            fontSize: "15px",
            color: "white",
            marginTop: "3%",
            fontWeight: "5%",
          }}
        >
          <h1 style={{ padding: "9px" }}>*Home</h1>
          <h1 style={{ padding: "9px" }}>*Menu</h1>
          <h1 style={{ padding: "9px" }}>*Service</h1>
          <h1 style={{ padding: "9px" }}>*About Us</h1>
        </div>
      </div>
      <div
        style={{
          marginLeft: "-55px",
          width: "22%",
        }}
      >
        <h1
          style={{
            fontSize: "26px",
            color: "white",
            fontWeight: "bold",
          }}
        >
          Services
        </h1>
        <div
          style={{
            fontSize: "15px",
            color: "white",
            marginTop: "3%",
            fontWeight: "5%",
          }}
        >
          <h1 style={{ padding: "9px" }}>*Exercise Only</h1>
          <h1 style={{ padding: "9px" }}>*Meal Planning Only</h1>
          <h1 style={{ padding: "9px" }}>*The combined Approach</h1>
        </div>
      </div>
      <div
        style={{
          marginLeft: "-55px",
          width: "22%",
        }}
      >
        <h1
          style={{
            fontSize: "26px",
            color: "white",
            fontWeight: "bold",
          }}
        >
          Working Hours
        </h1>
        <h1
          style={{
            color: "white",
            fontSize: "18px",
            fontWeight: "bold",
            marginTop: "12px",
          }}
        >
          Monday–Saturday:
        </h1>
        <h1 style={{ color: "white", fontSize: "15px" }}>5.30AM–9.30PM</h1>
        <h1
          style={{
            color: "white",
            fontSize: "18px",
            fontWeight: "bold",
            marginTop: "18px",
          }}
        >
          Sunday:
        </h1>
        <h1 style={{ color: "white", fontSize: "15px" }}>Closed</h1>
        <h1
          style={{
            fontSize: "26px",
            color: "#E33C08",
            fontWeight: "bold",
            marginTop: "15px",
          }}
        >
          Send Email
        </h1>
        <div style={{display: "flex"}}>
          <img style={{width: "2rem", height: "2rem", marginTop: "0.2%" }} src={Email} alt="" />
          <h1 style={{color: "white", fontSize: "15px", marginTop: "2%" }}>Activeplate@gmail.com</h1>
        </div>
      </div>
    </div>
    
  );
}

export default FooterPage;
