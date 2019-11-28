import React, { Component } from "react";
import SideBar from "./../Components/sidebar-nav/sidebar-nav";
import Mainbar from "./../Components/mainbar/mainbar";
import UserTable from "../Components/userTable/userTable";
import Footer from "./../Components/footer/footer";
import { Route, Switch } from "react-router-dom";
import AddUser from "../Components/addUser/addUser";
import UserTableInActive from "../Components/userTable/inActiveUserTable";
import RoleCreatiion from "../Components/roleCreation/roleCreation";
import RoleTable from "../Components/roleTable/roleTable";
import QuestionSelection from "../Components/questionSelection/questionSelection";

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
            <Route path="/user/question" component={QuestionSelection} />
            <Route path="/user/adduser" component={AddUser} />
            <Route path="/user/inactive" component={UserTableInActive} />
            <Route path="/user/roles" component={RoleTable} />
            <Route path="/user/addRole/:id" component={RoleCreatiion} />
            <Route path="/user/addRole/" component={RoleCreatiion} />
            <Route path="/user" component={UserTable} />
          </Switch>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default User;
