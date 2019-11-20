import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./Components/login/login";
import UserRoute from "./Components/protectedRoute/userRoute";
import User from "./user/user";
import LogOut from "./Components/logout/logout";
import NotFound from "./Components/not-found/notFound";

function App() {
  return (
    <div className="App">
      {/* <Switch>
        <Route path="/login" component={Login} />
        <UserRoute path="/user" component={User} />
        <Route path="/logout" component={LogOut} />
        <Route path="/not-found" component={NotFound} />
        <Redirect from="/" to="/login" exact />
        <Redirect to="/not-found" />
      </Switch> */}
      <Switch>
        <Route path="/user" component={User} />
        <Route path="/not-found" component={NotFound} />
        <Redirect from="/" to="/user" exact />
        <Redirect to="/not-found" />
      </Switch>
    </div>
  );
}

export default App;
