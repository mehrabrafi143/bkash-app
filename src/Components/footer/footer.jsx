import React from "react";
import datasoft from "../../assets/footer/data-soft.png";
const Footer = () => {
  return (
    <div className="footer">
      <p>
        <span className="footer__img">
          <img src={datasoft} alt="" />
        </span>
        Designed by datasoft
        <span> &copy; 2019</span>
      </p>
    </div>
  );
};

export default Footer;
