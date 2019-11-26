import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import SideBarSubitem from "./../sidebar-subitem/sidebar-subitem";

class SidebarItem extends Component {
  state = {
    classes: "fa fa-angle-right",
    showChlid: false
  };

  changeIcon = () => {
    if (this.state.classes === "fa fa-angle-right")
      this.setState({ classes: "fa fa-angle-down", showChlid: true });
    else {
      this.setState({ classes: "fa fa-angle-right", showChlid: false });
    }
  };

  render() {
    const { icon, lable, path, haschlid, notification = null } = this.props;
    const { classes, showChlid } = this.state;
    return (
      <li>
        <NavLink to={path}>
          <span>
            <img src={icon} alt="icon" />
          </span>
          <p>{lable}</p>
          {haschlid ? (
            <i class={classes} onClick={this.changeIcon} aria-hidden="true"></i>
          ) : null}
        </NavLink>
        <div className="sidebar__notification">{notification}</div>
        {showChlid ? <SideBarSubitem chlids={haschlid} /> : null}
      </li>
    );
  }
}

export default SidebarItem;
