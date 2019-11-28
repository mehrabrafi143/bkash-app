import React from "react";
import Form from "../form/form";
import Joi from "joi-browser";
import {
  AddUserFun,
  GetUserWithRole,
  UpdateUser
} from "../../services/userServices/userServices";
import Spiner from "../spiner/spiner";
import Select from "react-dropdown-select";
import { GetRoles } from "../../services/roleService/roleService";

class AddUser extends Form {
  state = {
    data: {
      userId: 0,
      empId: "",
      loginId: "",
      userName: "",
      email: "",
      designation: "",
      phoneNumber: "",
      roleParam: ""
    },
    errors: {
      userId: 0,
      empId: "",
      loginId: "",
      userName: "",
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
    empId: Joi.string().required(),
    loginId: Joi.string().required(),
    userName: Joi.string()
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
      if (id) {
        const { data: roles } = await GetRoles();

        this.setState({ loader: true, roles });
        const { data: usr } = await GetUserWithRole(id);
        if (usr) {
          const data = {
            userId: usr.userId,
            empId: usr.empId,
            loginId: usr.loginId,
            userName: usr.userName,
            email: usr.email,
            phoneNumber: usr.phoneNumber,
            designation: usr.designation
          };
          this.setState({ data, selectedItems: usr.roles, loader: false });
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
    const id = this.props.match.params.id;
    this.setState({ loader: true });
    try {
      if (!id) {
        const { data } = await AddUserFun(this.state.data);
        if (data && this.props.match.params.id)
          this.props.history.push("/user");
        else {
          this.props.history.push("/user/inactive");
        }
      } else {
        const { data } = await UpdateUser(this.state.data);
        this.props.history.push("/user");
      }
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
              "empId",
              data.empId,
              "Employee ID",
              errors.empId,
              "text",
              null,
              "fa fa-user"
            )}
            {this.renderInput(
              "loginId",
              data.loginId,
              "Login ID",
              errors.loginId,
              "text"
            )}
            {this.renderInput(
              "userName",
              data.userName,
              "Name",
              errors.userName,
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
