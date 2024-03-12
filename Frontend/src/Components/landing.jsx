import React from "react";
import NavBar from "./navBar";
import { Link } from "react-router-dom";
import Homeimg from "../assets/home.png";

const landing = () => {
  return (
    <>
      <NavBar />
      <div className="container-main" style={{ backgroundColor: "black" }}>
        <div
          id="page1"
          style={{
            height: "calc(100vh - 55.7px)",
            width: "100%",
            /* background-color: burlywood; */
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <div
            id="text"
            style={{
              width: "53vw",
              padding: "0px 75px",
              display: "flex",
              flexDirection: "column",
              gap: "26px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h3
              style={{
                fontSize: "4vw",
                textAlign: "center",
                lineHeight: "4.4vw",
                color: "rgb(53 108 205)",
              }}
            >
              College Campus Placement Management System
            </h3>
            <p
              style={{
                fontSize: "1.5vw",
                textAlign: "center",
                lineHeight: "2vw",
                color: "rgb(255, 255, 255)",
              }}
            >
              Welcome to Campus Recruitment Management System! We're dedicated
              to advancing education through innovative, user-friendly
              solutions. Our mission is to enhance learning by providing
              accessible, customer-centric services. We're committed to
              innovation, integrity, and making education accessible to all.
              Your success is our priority.
            </p>
            <button
              style={{
                cursor: "pointer",
                borderRadius: "50px",
                padding: "14px 30px",
                fontSize: "16px",
                textAlign: "center",
                color: "#fff",
                background:
                  "linear-gradient(90deg, rgb(47, 47, 182) 35%, rgba(0,212,255,1) 100%)",
              }}
            >
              Learn More
            </button>
          </div>
          <img
            src={Homeimg}
            alt="img"
            style={{
              position: "absolute",
              top: "127px",
              right: "0px",
              width: "50vw",
              zIndex: "1",
              overflow: "hidden",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default landing;
