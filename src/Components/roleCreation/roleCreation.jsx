import React from "react";
import Form from "../form/form";
import Joi from "joi-browser";
import Spiner from "../spiner/spiner";
import Select from "react-dropdown-select";
import { AddRole } from "../../services/roleService/roleService";
import {
  GetTasks,
  GetTasksByRoleId
} from "../../services/taskService/taskService";
import { GetRole, UpdateRole } from "../../services/roleService/roleService";

class RoleCreatiion extends Form {
  state = {
    data: {
      roleName: "",
      taskParam: ""
    },
    errors: {
      roleName: "",
      taskParam: ""
    },
    genericErrors: "",
    servicePriceError: "",
    loader: false,
    title: "",
    tasks: [],
    selectedItems: []
  };

  schema = {
    roleName: Joi.string().required(),
    taskParam: Joi.string().required()
  };

  async componentWillMount() {
    const id = this.props.match.params.id;
    this.renderTitle(id);
    try {
      const { data: tasks } = await GetTasks();

      const { data: role } = await GetRole(id);
      const { data } = this.state;
      data.roleName = role.roleName;
      this.setState({ tasks });
      if (id) {
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
      const taskes = [];
      v.map(f => {
        if (!taskes.includes(f.taskId)) taskes.push(f.taskId);
      });
      data.taskParam = taskes.join(",");
      this.setState({ data, selectedItems: [...v] });
    }
  };

  dosubmit = async () => {
    this.setState({ loader: true });
    try {
      const { data } = await UpdateRole(this.state.data);
      if (data) this.props.history.push("/roles");
    } catch (error) {
      this.setState({ genericErrors: error.response.data.message });
    }
  };

  render() {
    const { loader, data, errors, title, tasks, selectedItems } = this.state;

    return (
      <React.Fragment>
        <Spiner />
        <div className="section-top-title">{title}</div>
        <div className="row">
          <form className="col-6 form" onSubmit={this.handelSubmit}>
            {this.renderInput(
              "roleName",
              data.roleName,
              "Role Name",
              errors.roleName,
              "text",
              null,
              "fa fa-user"
            )}
            <div className="form__element">
              <Select
                multi
                create
                placeholder="Select Roles"
                labelField="taskName"
                valueField="taskId"
                options={tasks}
                values={selectedItems}
                onChange={v => this.setValue(v)}
                className="form-input"
              />
            </div>
            <div className="text-center mt-5">
              {this.renderButton("Create", "btn btn-primary")}
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default RoleCreatiion;
