import React, { Component } from "react";
import SideBar from "./../Components/sidebar-nav/sidebar-nav";
import Mainbar from "./../Components/mainbar/mainbar";
import UserTable from "../Components/userTable/userTable";
class User extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Mainbar />
        <SideBar />
        <div className="main-body">
          <UserTable />
        </div>
      </React.Fragment>
    );
  }
}

export default User;
