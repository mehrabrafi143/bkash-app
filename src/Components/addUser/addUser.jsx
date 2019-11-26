import React from "react";
import Form from "../form/form";
import Joi from "joi-browser";
import { AddUserFun, GetUser } from "../../services/userServices/userServices";
import Spiner from "../spiner/spiner";
import Select from "react-dropdown-select";
import { GetRoles } from "../../services/roleService/roleService";

class AddUser extends Form {
  state = {
    data: {
      userId: 0,
      employeeId: "",
      loginId: "",
      username: "",
      email: "",
      designation: "",
      phoneNumber: "",
      roleParam: ""
    },
    errors: {
      userId: 0,
      employeeId: "",
      loginId: "",
      username: "",
      email: "",
      designation: "",
      phoneNumber: "",
      roleParam: ""
    },
    genericErrors: "",
    servicePriceError: "",
    loader: false,
    title: "",
    roles: []
  };

  schema = {
    userId: Joi.number(),
    employeeId: Joi.string().required(),
    loginId: Joi.string().required(),
    username: Joi.string()
      .required()
      .max(50)
      .min(3),
    email: Joi.string()
      .required()
      .max(50)
      .min(5),
    designation: Joi.string().required(),
    phoneNumber: Joi.number(),
    roleParam: Joi.string().required()
  };

  async componentWillMount() {
    const id = this.props.match.params.id;
    this.renderTitle(id);
    try {
      const { data: roles } = await GetRoles();
      this.setState({ roles });
      if (id) {
        this.setState({ loader: true });
        const { data: usr } = await GetUser(id);
        if (usr) {
          const data = {
            userId: usr.userId,
            username: usr.username,
            password: usr.password,
            email: usr.email,
            phoneNumber: usr.phoneNumber
          };
          this.setState({ data, loader: false });
        }
      }
    } catch (error) {
      this.setState({ loader: false });
    }
  }

  renderTitle = id => {
    id === undefined
      ? this.setState({
          title: (
            <div className="">
              <i className="fa fa-plus"></i> <span> Add User</span>
            </div>
          )
        })
      : this.setState({
          title: (
            <div className="">
              <i className="fa fa-edit"></i>
              <span> Update User Information</span>
            </div>
          )
        });
  };

  setValue = v => {
    const { data } = this.state;
    if (v) {
      const roles = [];
      v.map(f => {
        if (!roles.includes(f.roleId)) roles.push(f.roleId);
      });
      data.roleParam = roles.join(",");
      this.setState({ data, selectedItems: [...v] });
    }
  };

  dosubmit = async () => {
    this.setState({ loader: true });
    try {
      const { data } = await AddUserFun(this.state.data);
      if (data) this.props.history.push("/user");
    } catch (error) {
      this.setState({ genericErrors: error.response.data.message });
    }
  };

  render() {
    const { loader, data, errors, title, roles } = this.state;

    return (
      <React.Fragment>
        <Spiner />
        <div className="section-top-title">{title}</div>
        <div className="row">
          <form className="col-6 form" onSubmit={this.handelSubmit}>
            {this.renderInput(
              "employeeId",
              data.employeeId,
              "Employee ID",
              errors.employeeId,
              "text",
              null,
              "fa fa-user"
            )}
            {this.renderInput(
              "loginId",
              data.loginId,
              "Employee ID",
              errors.loginId,
              "text"
            )}
            {this.renderInput(
              "username",
              data.username,
              "Name",
              errors.username,
              "text"
            )}
            {this.renderInput(
              "email",
              data.email,
              "Email",
              errors.email,
              "email"
            )}
            {this.renderInput(
              "designation",
              data.designation,
              "Designation",
              errors.designation,
              "text"
            )}
            {this.renderInput(
              "phoneNumber",
              data.phoneNumber,
              "phoneNumber",
              errors.phoneNumber,
              "text"
            )}
            <div className="form__element">
              <Select
                multi
                create
                placeholder="Select Roles"
                labelField="roleName"
                valueField="roleId"
                options={roles}
                values={this.state.selectedItems}
                onChange={v => this.setValue(v)}
                className="form-input"
              />
            </div>
            <div className="text-center mt-5">
              {this.renderButton("Register", "btn btn-primary")}
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default AddUser;
