import React, { Component } from "react";
import Table from "./../table/table";
import Pagination from "../pagination/pagination";
import ShowResult from "../showResults/showResults";
import _ from "lodash";
import Paginate from "./../pagination/paginate/paginate";
import SearchBox from "../searchBox/searchBox";
import RoleModal from "../modal/roleModal";
import $ from "jquery";
import { GetRoles, DeleteRole } from "../../services/roleService/roleService";
import { GetTasksByRoleId } from "../../services/taskService/taskService";

class RoleTable extends Component {
  state = {
    data: [],
    pageSize: 5,
    currentPage: 1,
    currentOrder: {
      name: "name",
      order: "asc"
    },
    query: "",
    loader: false,
    orderIcon: "fa fa-sort-desc",
    role: {},
    taskes: []
  };

  headerNames = [
    {
      label: "Role Name",
      path: "roleName"
    },
    {
      label: "Action",
      content: role => (
        <span className="userTable__List__body-action">
          <i
            class="fa fa-trash-o"
            aria-hidden="true"
            onClick={() => this.deleteRole(role.roleId)}
          ></i>
          <i
            class="fa fa-pencil"
            onClick={() =>
              this.props.history.push("/user/addRole/" + role.roleId)
            }
            aria-hidden="true"
          ></i>
          <i
            class="fa fa-eye"
            onClick={() => this.handelModel(role)}
            aria-hidden="true"
          ></i>
        </span>
      )
    }
  ];

  async componentDidMount() {
    try {
      const { data } = await GetRoles();

      if (data) this.setState({ data, loader: false });
    } catch (error) {
      console.log(error.response);
      this.setState({ loader: false });
    }
  }

  handelModel = async role => {
    const { data: taskes } = await GetTasksByRoleId(role.roleId);
    this.setState({ role: role, taskes });
    $(".full-body").removeClass("hide");
  };

  deleteRole = async id => {
    console.log(id);

    const { data: oldData } = this.state;
    try {
      const newData = oldData.filter(d => d.roleId !== id);
      this.setState({ data: newData });
      const { data: res } = await DeleteRole(id);
    } catch (error) {
      this.setState({ data: oldData });
    }
  };

  handelQuery = e => {
    const query = e.currentTarget.value;
    this.setState({ query, currentPage: 1 });
  };

  handelOrder = path => {
    const currentOrder = { ...this.state.currentOrder };
    if (currentOrder.name === path && currentOrder.order === "asc")
      currentOrder.order = "desc";
    else currentOrder.order = "asc";

    currentOrder.name = path;
    const orderIcon =
      currentOrder.order === "desc" ? "fa fa-sort-desc" : "fa fa-sort-asc";
    this.setState({ currentOrder, orderIcon });
  };

  handelPageChange = pagenum => {
    this.setState({ currentPage: pagenum });
  };

  handelPazeSizeChange = val => {
    this.setState({ pageSize: val.currentTarget.value });
  };

  render() {
    const {
      loader,
      pageSize,
      data,
      currentPage,
      currentOrder,
      query,
      orderIcon,
      role,
      taskes
    } = this.state;

    let item = query.trim()
      ? data.filter(f =>
          f.roleName.toLowerCase().includes(query.toLowerCase().trim())
        )
      : data;

    const count = item.length;

    const employee = Paginate(item, pageSize, currentPage);
    const filterdemployee = _.orderBy(
      employee,
      currentOrder.name,
      currentOrder.order
    );

    return (
      <div className="userTable">
        <div className="userTable__header">
          <div className=" userTable__header__left">Role List</div>
          <div className=" userTable__header__right">
            <SearchBox onQuery={this.handelQuery} query={query} />
            <i className="fa fa-table" aria-hidden="true"></i>
            <i className="fa fa-align-left fa-active" aria-hidden="true"></i>
          </div>
        </div>
        <Table
          headerNames={this.headerNames}
          data={filterdemployee}
          orderBy={this.handelOrder}
          orderIcon={orderIcon}
        />
        <div className="pagination-container">
          <ShowResult
            pageSize={pageSize}
            onPageSizeChange={this.handelPazeSizeChange}
          />
          <Pagination
            onPageChange={this.handelPageChange}
            pageSize={pageSize}
            count={count}
            currentPage={currentPage}
          />
        </div>
        <RoleModal role={role} taskes={taskes} />
      </div>
    );
  }
}

export default RoleTable;
