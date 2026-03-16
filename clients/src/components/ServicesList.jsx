import React from "react";
import { mealPlan, Exercise, Combined, KosalaCom, PlusIcon, } from "../assets";
//import {  } from "../assets";
import "./css/serviceList.css";
import { Link } from "react-router-dom";

function ServicesList() {
  return (
    <div
      style={{
        width: "98.4%",
        marginLeft: "-20px",
        marginBottom: "25px",
        display: "flex",
        justifyContent: "space-between",
        paddingLeft: "10.2%",
        paddingRight: "10.2%",
      }}
    >
      {/* <section className="service" id="service"> */}
        <div
          id="service"
          style={{
            width: "23%",
            height: "24rem",
          }}
        >
          <div
            style={{
              textAlign: "center",
              color: "#E33C08",
              fontSize: "22px",
              fontWeight: "bold",
              marginLeft: "-3px",
            }}
          >
            <h1>Meal Planning Only</h1>
          </div>
          <div
            style={{
              marginTop: "2.5rem",
              backgroundColor: "#000000",
              height: "20rem",
              border: "none",
              borderRadius: "5%",
              position: "relative",
            }}
            className="ServiceCardContainer"
          >
            <div>
              <img src={mealPlan} alt="" className="ServiceCardImage" />
              <div className="middle">
                <div className="plusIconInMiddle">
                  <Link to="meal-plan">
                    <img src={PlusIcon} alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* </section> */}

      <div
        style={{
          width: "23%",
          height: "24rem",
        }}
      >
        <div
          style={{
            textAlign: "center",
            color: "#E33C08",
            fontSize: "22px",
            fontWeight: "bold",
            marginLeft: "-11px",
          }}
        >
          <h1>Exercise Only</h1>
        </div>
        <div
          style={{
            marginTop: "2.5rem",
            backgroundColor: "#000000",
            height: "20rem",
            border: "none",
            borderRadius: "5%",
            position: "relative",
          }}
          className="ServiceCardContainer"
        >
          <div>
            <img src={Exercise} alt="" className="ServiceCardImage" />
            <div className="middle">
              <div className="plusIconInMiddle">
                <Link to="exercise-only">
                  <img src={PlusIcon} alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "23%",
          height: "24rem",
        }}
      >
        <div
          style={{
            textAlign: "center",
            color: "#E33C08",
            fontSize: "22px",
            fontWeight: "bold",
          }}
        >
          <h1>The combined approach</h1>
        </div>
        <div
          style={{
            marginTop: "2.5rem",
            backgroundColor: "#000000",
            height: "20rem",
            border: "none",
            borderRadius: "5%",
            position: "relative",
          }}
          className="ServiceCardContainer"
        >
          <div>
            <img src={KosalaCom} alt="" className="ServiceCardImage" />
            <div className="middle">
              <div className="plusIconInMiddle">
                <Link to="TheCombined">
                  <img src={PlusIcon} alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesList;
