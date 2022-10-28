import React from "react";
import "./Intro.css";
import github from "../../img/github.png";
import linkedin from "../../img/linkedin.png";
import instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";

export default function intro() {
  return (
    <>
      <div>
        <div className="intro">
          <div className="i-left">
            <div className="i-name">
              <span>Hi! I am </span>
              <span>Shiv Nandan Jha</span>
              <span>
                Frontend Developer with High level of experience in Web
                Designing and development, producting and Quality Works{" "}
              </span>
              <button className="intro-btn n-btn">Hire Me</button>
              <div className="i-icons">
                <a href="/">
                  {" "}
                  <img src={github} alt="" />
                </a>
                <a href="/">
                  <img src={linkedin} alt="" />
                </a>
                <a href="/">
                  <img src={instagram} alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="i-right">
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={boy} alt="" />
            <img src={glassesimoji} alt="" />
            <div style={{ top: "-4%", left: "60%" }}>
              <FloatingDiv
                image={crown}
                text1="Front-End"
                text2=" Web Developer"
              />
            </div>
            <div style={{top:'18rem' , left:'0.7rem'}}>
              <FloatingDiv
                image={thumbup}
                text1="Certified from"
                text2="Meta × Coursera"
              />
            </div>
            <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
            <div className="blur" style={{
              background: '#C1F5FF', top: '17rem',
              width: '21rem',
              height: '11rem',
              left:'-9rem'
            }}></div>
          </div>
        </div>
      </div>
    </>
  );
}
