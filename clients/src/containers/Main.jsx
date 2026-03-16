import React from "react";
import { CoppyRight, Header, Home, ServicesList } from "../components";
import AboutUs from "../components/AboutUs";
import FooterPage from "../components/FooterPage";

const Main = () => {
  return (
    <main
      className="w-screen min-h-screen flex items-center justify-center flex-col"
      style={{ backgroundColor: "#2b2b2b" }}
    >
      <Header />
      <Home />

      {/* Our service container */}
      <div
        style={{
          backgroundColor: "#000000",
          width: "100%",
          marginTop: "25px",
          marginBottom: "25px",
        }}
      >
        <div
          style={{
            height: "100px",
            color: "white",
            textAlign: "center",
            fontSize: "60px",
            paddingTop: "5px",
          }}
        >
          <h1>OUR SERVICES</h1>
        </div>
      </div>

      {/* Services */}
      <ServicesList />

      {/* About Us container */}
      <div
        style={{
          backgroundColor: "#000000",
          width: "100%",
          marginTop: "25px",
          marginBottom: "25px",
        }}
      >
        <div
          style={{
            height: "100px",
            color: "white",
            textAlign: "center",
            fontSize: "60px",
            paddingTop: "5px",
          }}
        >
          <h1>WHY CHOOSE US?</h1>
        </div>
      </div>

      {/* About Us */}
      <AboutUs />

      {/* footer */}
      <FooterPage />

      {/* footer */}
      <CoppyRight />
    </main>
  );
};

export default Main;
