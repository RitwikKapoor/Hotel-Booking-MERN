import React from "react";
import "./Footer.css";
import logo2 from "../../assets/logo2.png";

const Footer = () => {
  return (
    <div className="paddings innerWidth flexCenter f-container">
      <div className="flexColStart f-left">
        <img src={logo2} width={120} />
        <span className="secondaryText">
          Lorem ipsum dolor sit amet consectetur adipisicing <br />
          elit. Repellat, atque! Nihil, eum rerum. Provident, eaque?
        </span>
      </div>
      <div className="flexColStart f-right">
        <span className="primaryText">Information</span>
        <span className="secondaryText">145 New York, FL 4571, USA</span>
        <div className="flexCenter f-menu">
          <span>Property</span>
          <span>Services</span>
          <span>Product</span>
          <span>About Us</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
