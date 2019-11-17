import React from "react";
import bell from "../../assets/dashboardAssets/mainbar/bell.png";
import search from "../../assets/dashboardAssets/mainbar/search.png";
import setting from "../../assets/dashboardAssets/mainbar/setting.png";
import raisul from "../../assets/dashboardAssets/mainbar/raisul.png";

const Mainbar = () => {
  return (
    <div className="mainbar">
      <ul className="mainbar__nav">
        <li>
          <img src={raisul} alt="raisul" className="mainbar__nav-pic" />
          <h2>FCA Analyst</h2>
          <i class="fa fa-chevron-down" aria-hidden="true"></i>
        </li>
        <li>
          <img src={search} alt="search" />
        </li>
        <li>
          <img src={bell} alt="bell" />
          <span className="badge badge-primary mainbar__nav__notification-num">
            2
          </span>
        </li>
        <li>
          <img src={setting} alt="setting" />
        </li>
      </ul>
    </div>
  );
};

export default Mainbar;
