import React, { Component } from "react";

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
            <th>
              User Name <i class="fa fa-sort-desc" aria-hidden="true"></i>
            </th>
            <th>
              Status <i class="fa fa-sort-desc" aria-hidden="true"></i>
            </th>
            <th>
              Role Name <i class="fa fa-sort-desc" aria-hidden="true"></i>
            </th>
            <th>
              Action <i class="fa fa-sort-desc" aria-hidden="true"></i>
            </th>
          </tr>
          <tbody>
            <tr className="userTable__List__body">
              <td>
                <div className="userTable__List__body-img"></div>
                <span>T Ritika Singh</span>
              </td>
              <td></td>
              <td></td>
              <td className="userTable__List__body-action">
                <i class="fa fa-trash-o" aria-hidden="true"></i>
                <i class="fa fa-pencil" aria-hidden="true"></i>
                <i class="fa fa-eye" aria-hidden="true"></i>
              </td>
            </tr>
            <tr className="userTable__List__body">
              <td>
                <div className="userTable__List__body-img"></div>
                <span>T Ritika Singh</span>
              </td>
              <td></td>
              <td></td>
              <td className="userTable__List__body-action">
                <i class="fa fa-trash-o" aria-hidden="true"></i>
                <i class="fa fa-pencil" aria-hidden="true"></i>
                <i class="fa fa-eye" aria-hidden="true"></i>
              </td>
            </tr>
            <tr className="userTable__List__body userTable__List__body">
              <td>
                <div className="userTable__List__body-img"></div>
                <span>T Ritika Singh</span>
              </td>
              <td></td>
              <td></td>
              <td className="userTable__List__body-action">
                <i class="fa fa-trash-o" aria-hidden="true"></i>
                <i class="fa fa-pencil" aria-hidden="true"></i>
                <i class="fa fa-eye" aria-hidden="true"></i>
              </td>
            </tr>
            <tr className="userTable__List__body userTable__List__body-active">
              <td>
                <div className="userTable__List__body-img"></div>
                <span>T Ritika Singh</span>
              </td>
              <td></td>
              <td></td>
              <td className="userTable__List__body-action">
                <i class="fa fa-trash-o" aria-hidden="true"></i>
                <i class="fa fa-pencil" aria-hidden="true"></i>
                <i class="fa fa-eye" aria-hidden="true"></i>
              </td>
            </tr>
            <tr className="userTable__List__body">
              <td>
                <div className="userTable__List__body-img"></div>
                <span>T Ritika Singh</span>
              </td>
              <td></td>
              <td></td>
              <td className="userTable__List__body-action">
                <i class="fa fa-trash-o" aria-hidden="true"></i>
                <i class="fa fa-pencil" aria-hidden="true"></i>
                <i class="fa fa-eye" aria-hidden="true"></i>
              </td>
            </tr>
            <tr className="userTable__List__body">
              <td>
                <div className="userTable__List__body-img"></div>
                <span>T Ritika Singh</span>
              </td>
              <td></td>
              <td></td>
              <td className="userTable__List__body-action">
                <i class="fa fa-trash-o" aria-hidden="true"></i>
                <i class="fa fa-pencil" aria-hidden="true"></i>
                <i class="fa fa-eye" aria-hidden="true"></i>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="pagination-container">
          <div className="pagination-container__select">
            <span>Show Results</span>
            <select name="" id="">
              <option value="1">1</option>
              <option value="1">2</option>
              <option value="1">3</option>
            </select>
          </div>
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                  <span class="sr-only">Previous</span>
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  1
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  2
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  3
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                  <span class="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default UserTable;
