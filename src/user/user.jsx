import React, { Component } from "react";
import SideBar from "./../Components/sidebar-nav/sidebar-nav";
import Mainbar from "./../Components/mainbar/mainbar";
import UserTable from "../Components/userTable/userTable";
import Footer from "./../Components/footer/footer";
class User extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Mainbar />
        <SideBar />
        <div className="main-body">
          <UserTable />
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default User;
