import React, { Component } from "react";
import $ from "jquery";
class RoleModal extends Component {
  state = {};

  handelModelShow = () => {
    $(".full-body").addClass("hide");
  };
  render() {
    const { role, taskes } = this.props;
    return (
      <div className="full-body hide">
        <div className="overlay">
          <div className="popup">
            <a href="#" className="close" onClick={this.handelModelShow}>
              &times;
            </a>
            <div className="row">
              <div className="col-6">
                <div className="popup__img">
                  <img src={require("../../assets/user/man.jpg")} alt="" />
                </div>
              </div>
              <div className="col-6">
                <div className="popup__content">
                  <h2>
                    Name: <span>{role.roleName}</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <h2>Taskes</h2>
              <div className="col-6">
                <div className="popup__content">
                  {taskes.map(task => (
                    <h2>
                      <span>{task.taskName}</span>
                    </h2>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RoleModal;
