import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <div>
        <div className="n-wrapper">
          <div className="n-left">
            <div className="n-name"> Shiv Nandan Jha</div>
            <span>toggle </span>
          </div>
          <div className="n-right">
            <div className="n-list">
              <ul>
                <li>Home</li>
                <li>Services</li>
                <li>Portfolio</li> <li>Experience</li>
                <li>Testimonials</li>
              </ul>
            </div>
            <button className="n-btn">Contact</button>
          </div>
        </div>
      </div>
    </>
  );
}
