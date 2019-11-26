import React, { Component } from "react";
import Table from "./../table/table";
import Pagination from "../pagination/pagination";
import ShowResult from "../showResults/showResults";
import { Link } from "react-router-dom";
import _ from "lodash";
import Paginate from "./../pagination/paginate/paginate";
import SearchBox from "../searchBox/searchBox";
import {
  GetInActiveEmployees,
  DeleteUser,
  UpdateUser,
  GetUser
} from "../../services/userServices/userServices";

class UserTableInActive extends Component {
  state = {
    data: [],
    pageSize: 10,
    currentPage: 1,
    currentOrder: {
      name: "name",
      order: "asc"
    },
    query: "",
    loader: false,
    orderIcon: "fa fa-sort-desc"
  };

  headerNames = [
    {
      label: "Name",
      content: usr => (
        <React.Fragment>
          <div className="userTable__List__body-img">
            <img src={require("../../assets/user/man.jpg")} alt="" />
          </div>
          <span>{usr.username}</span>
        </React.Fragment>
      ),
      path: "username"
    },
    { label: "Email", path: "email" },
    { label: "Status", path: "status" },
    {
      label: "Action",
      content: usr => (
        <span className="userTable__List__body-action">
          <button
            onClick={() => this.activateUser(usr.userId)}
            className="btn btn-view"
          >
            Activate
          </button>
        </span>
      )
    }
  ];

  activateUser = async id => {
    const { data: oldData } = this.state;
    try {
      const newData = oldData.filter(u => u.userId !== id);
      this.setState({ data: newData });
      const { data } = await GetUser(id);
      await UpdateUser(data);
    } catch (error) {
      this.setState({ data: oldData });
    }
  };

  async componentDidMount() {
    try {
      const { data } = await GetInActiveEmployees();
      if (data) this.setState({ data, loader: false });
    } catch (error) {
      console.log(error.response);
      this.setState({ loader: false });
    }
  }

  deleteUser = async id => {
    try {
      const { data: res } = await DeleteUser(id);
      const { data } = this.state;
      const filterdData = data.filter(d => d.userId !== id);
      this.setState({ data: filterdData });
    } catch (error) {}
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
      orderIcon
    } = this.state;

    let item = query.trim()
      ? data.filter(f =>
          f.username.toLowerCase().includes(query.toLowerCase().trim())
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
          <div className=" userTable__header__left">User List</div>
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
      </div>
    );
  }
}

export default UserTableInActive;
