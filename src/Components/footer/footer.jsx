import React from "react";
import datasoft from "../../assets/footer/data-soft.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <p>
        Developed by{" "}
        <a href="https://confident-ride-7d2066.netlify.com/" target="#">
          Mehrab Karim
        </a>
        <span> &copy; 2019</span>
      </p>
    </div>
  );
};

export default Footer;
