import React, { Component } from "react";
import Table from "./../table/table";
import Pagination from "../pagination/pagination";
import ShowResult from "../showResults/showResults";
import _ from "lodash";
import Paginate from "./../pagination/paginate/paginate";
import SearchBox from "../searchBox/searchBox";
import {
  GetActiveUsers,
  DeactivateUser,
  GetUserWithRole
} from "../../services/userServices/userServices";
import Modal from "../modal/modal";
import $ from "jquery";

class UserTable extends Component {
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
    modalUser: { roles: [] }
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
          <i
            class="fa fa-trash-o"
            aria-hidden="true"
            onClick={() => this.deactivateUser(usr.userId)}
          ></i>
          <i
            class="fa fa-pencil"
            onClick={() =>
              this.props.history.push("/user/adduser/" + usr.userId)
            }
            aria-hidden="true"
          ></i>
          <i
            class="fa fa-eye"
            onClick={() => this.handelModel(usr)}
            aria-hidden="true"
          ></i>
        </span>
      )
    }
  ];

  async componentDidMount() {
    try {
      const { data } = await GetActiveUsers();
      if (data) this.setState({ data, loader: false });
    } catch (error) {
      console.log(error.response);
      this.setState({ loader: false });
    }
  }

  handelModel = async usr => {
    const { data: modalUser } = await GetUserWithRole(usr.userId);
    this.setState({ modalUser });
    $(".full-body").removeClass("hide");
  };

  deactivateUser = async id => {
    const { data: oldData } = this.state;
    try {
      const newData = oldData.filter(d => d.userId !== id);
      this.setState({ data: newData });
      const { data: res } = await DeactivateUser(id);
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
      modalUser
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
        <Modal modalUser={modalUser} />
      </div>
    );
  }
}

export default UserTable;
