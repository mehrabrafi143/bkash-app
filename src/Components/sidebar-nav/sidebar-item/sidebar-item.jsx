import React from "react";
import { NavLink } from "react-router-dom";

const SidebarItem = ({ icon, lable, haschlid, notification = null }) => {
  return (
    <li>
      <NavLink to={lable === "Dashboard" ? "/user" : "/dd"}>
        <span>
          <img src={icon} alt="icon" />
        </span>
        <p>{lable}</p>
        {haschlid ? <i class="fa fa-angle-right" aria-hidden="true"></i> : null}
      </NavLink>
      <div className="sidebar__notification">{notification}</div>
    </li>
  );
};

export default SidebarItem;
