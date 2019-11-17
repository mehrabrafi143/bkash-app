import React, { Component } from "react";
import SideBar from "./../Components/sidebar-nav/sidebar-nav";
import Mainbar from "./../Components/mainbar/mainbar";
class User extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Mainbar />
        <SideBar />
      </React.Fragment>
    );
  }
}

export default User;
