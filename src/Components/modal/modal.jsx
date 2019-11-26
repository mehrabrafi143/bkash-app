import React, { Component } from "react";
import $ from "jquery";
class Modal extends Component {
  state = {};

  handelModelShow = () => {
    $(".full-body").addClass("hide");
  };
  render() {
    const { modalUser } = this.props;
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
                    Name: <span>{modalUser.username}</span>
                  </h2>
                  <h2>
                    Email: <span>{modalUser.email}</span>
                  </h2>
                  <h2>
                    status: <span>{modalUser.status}</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
