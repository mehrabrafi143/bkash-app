import React, { Component } from "react";
import THead from "./thead/thead";
import Tbody from "./tbody/tbody";
class Table extends Component {
  state = {};
  render() {
    const { headerNames, data, orderBy, orderIcon } = this.props;
    return (
      <table className="userTable__List table list">
        <THead
          headerNames={headerNames}
          orderBy={orderBy}
          orderIcon={orderIcon}
        />
        <Tbody headerNames={headerNames} data={data} />
      </table>
    );
  }
}

export default Table;
