import React from "react";
import Form from "./../form/form";
import Joi from "joi-browser";
import user from "../../assets/loginAssets/user.png";
import pl from "../../assets/loginAssets/password.png";
import aml_logo from "../../assets/loginAssets/aml_logo.png";
import bkash_logo from "../../assets/loginAssets/bkash_logo.png";
import bkash_logoIpad from "../../assets/loginAssets/bkash_logo_ipad.png";
import { getUserName, login } from "../../services/authService/authService";

class Login extends Form {
  state = {
    data: {
      username: "",
      password: ""
    },
    errors: {
      username: "",
      password: ""
    },
    loader: false
  };

  handelChangePage = () => {
    const user = getUserName();
    let location = user ? "/user" : "/login";
    this.props.history.push(location);
    return;
  };

  schema = {
    username: Joi.string()
      .required()
      .max(50)
      .min(3),
    password: Joi.string()
      .required()
      .max(100)
  };

  handelRedirect = () => {
    const user = getUserName();
    if (!user) return (window.location = "/login");
    return (window.location = "/user");
  };

  dosubmit = async () => {
    this.setState({ loader: true });
    const response = await login(this.state.data);
    response
      ? this.setState({
          loader: false,
          genericErrors: response
        })
      : this.handelRedirect();
  };

  componentWillMount() {
    return this.handelChangePage();
  }

  render() {
    const { data, errors } = this.state;
    return (
      <div className="loginForm">
        <div className="loginForm__bkashLogo">
          <img src={bkash_logo} alt="bkash logo" />
        </div>
        <div className="loginForm__section">
          <div className="loginForm__section__amlLogo">
            <img src={aml_logo} alt="AML Solution" />
          </div>
          <form
            className="loginForm__section__form"
            onSubmit={this.handelSubmit}
          >
            {this.renderInput(
              "username",
              data.username,
              "username",
              errors.username,
              "text",
              user
            )}
            {this.renderInput(
              "password",
              data.password,
              "Password",
              errors.password,
              "password",
              pl
            )}
            <div className="form__element mt-4 clearFix form__element-padding-left">
              <div className="form__element__left">
                <input type="checkbox" /> Remember Me
              </div>
              <div className="form__element__right">
                <a href="#">Forget Passsword</a>
              </div>
            </div>
            <div className="text-center mt-5">
              {this.renderButton("Login", "btn btn-primary")}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
