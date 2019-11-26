import React, { Component } from "react";
import _ from "lodash";
import $ from "jquery";

class Tbody extends Component {
  state = {
    classes: "userTable__List__body"
  };

  isFloat = n => {
    return Number(n) === n && n % 1 !== 0;
  };

  renderData = (item, hN) => {
    if (hN.content) return hN.content(item);

    const element = _.get(item, hN.path);

    if (this.isFloat(element)) return element.toFixed(2);

    return element || "N/A";
  };

  handelClasses = e => {
    const currentClasses =
      e.currentTarget.className === "userTable__List__body"
        ? "userTable__List__body userTable__List__body-active"
        : "userTable__List__body";
    $(".userTable__List__body").removeClass("userTable__List__body-active");
    e.currentTarget.className = currentClasses;
  };

  render() {
    const { data, headerNames } = this.props;
    const { classes } = this.state;
    return (
      <tbody>
        {data.map(item => (
          <tr key={item.id} className={classes} onClick={this.handelClasses}>
            {headerNames.map(hN => (
              <td key={hN.label || hN.key}> {this.renderData(item, hN)} </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default Tbody;

{
  /* <tr className="userTable__List__body">
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
      </tr> */
}
