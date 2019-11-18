import React, { Component } from "react";
import man from "../../assets/user/man.jpg";

class UserTable extends Component {
  state = {};
  render() {
    return (
      <div className="userTable">
        <div className="userTable__header">
          <div className=" userTable__header__left">User List</div>
          <div className=" userTable__header__right">
            <div class="has-search userTable__header__right-search">
              <span class="fa fa-search form-control-feedback"></span>
              <input
                type="text"
                class="form-control form-control-search"
                placeholder="Search"
              />
            </div>
            <i class="fa fa-table" aria-hidden="true"></i>
            <i class="fa fa-align-left fa-active" aria-hidden="true"></i>
          </div>
        </div>
        <table className="userTable__List table list">
          <tr className="userTable__List__headers">
            <th>dffs</th>
            <th>User Name</th>
            <th>Status</th>
            <th>Role Name</th>
            <th>Action</th>
          </tr>
          <tbody>
            <tr className="userTable__List__body">
              <td>
                <button className="btn btn-view">View</button>
              </td>
              <td>
                <div className="userTable__List__body-img"></div>
                <span>T Ritika Singh</span>
              </td>
              <td></td>
              <td></td>
              <td>
                <i class="fa fa-trash-o" aria-hidden="true"></i>
                <i class="fa fa-pencil" aria-hidden="true"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default UserTable;
