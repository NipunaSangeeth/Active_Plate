import React from "react";
import { Capture1Co, Capture2 } from "../assets";

function AboutUs() {
  return (
    <div
      style={{
        width: "78%",
        marginLeft: "-20px",
        marginBottom: "25px",
        display: "flex",
        justifyContent: "space-between",
        paddingLeft: "10.2%",
        paddingRight: "10.2%",
      }}
    >
      <div
        style={{
          width: "34%",
          height: "24rem",
          backgroundColor: "#000000",
          border: "none",
          borderRadius: "5%",
        }}
      >
        <div>
          <img
            src={Capture1Co}
            alt=""
            style={{
              borderRadius: "16%",
              width: "8rem",
              height: "8rem",
              marginLeft: "28%",
              marginTop: "10%",
            }}
          />
        </div>
        <h1
          style={{
            color: "red",
            fontSize: "180%",
            color: "white",
            fontWeight: "bold",
            textAlign: "center",
            marginTop: "8%"
          }}
        >
          WORKOUT
        </h1>
        <h1 style={{
            marginTop: "11%",
            fontSize: "110%",
            color: "white",
            marginLeft: "5%"
        }}>
        A practice or exercise to test or
        improve one's fitness for athletic
        competition, ability, or performance.
        </h1>
      </div>

      <div
        style={{
          width: "34%",
          height: "24rem",
          backgroundColor: "#000000",
          border: "none",
          borderRadius: "5%",
        }}
      >
        <div>
          <img
            src={Capture2}
            alt=""
            style={{
              borderRadius: "16%",
              width: "8rem",
              height: "8rem",
              marginLeft: "28%",
              marginTop: "10%",
            }}
          />
        </div>
        <h1
          style={{
            color: "red",
            fontSize: "180%",
            color: "white",
            fontWeight: "bold",
            textAlign: "center",
            marginTop: "8%"
          }}
        >
          NUTRITION
        </h1>
        <h1 style={{
            marginTop: "11%",
            fontSize: "110%",
            color: "white",
            marginLeft: "5%"
        }}>
        Nutrition is how food affects the
        health of the body. Food is essential 
        - it provides vital for survival.
        </h1>
      </div>
    </div>
  );
}

export default AboutUs;
