import React, { Component } from "react";
import SideBar from "./../Components/sidebar-nav/sidebar-nav";
import Mainbar from "./../Components/mainbar/mainbar";
import UserTable from "../Components/userTable/userTable";
import Footer from "./../Components/footer/footer";
import { Route, Switch } from "react-router-dom";
import AddUser from "../Components/addUser/addUser";
import UserTableInActive from "../Components/userTable/inActiveUserTable";

class User extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Mainbar />
        <SideBar />
        <div className="main-body">
          <Switch>
            <Route path="/user/adduser/:id" component={AddUser} />
            <Route path="/user/adduser" component={AddUser} />
            <Route path="/user/inactive" component={UserTableInActive} />
            <Route path="/user" component={UserTable} />
          </Switch>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default User;
