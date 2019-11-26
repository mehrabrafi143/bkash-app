import React from "react";

const SearchBox = ({ onQuery, query }) => {
  return (
    <div className="has-search userTable__header__right-search">
      <span className="fa fa-search form-control-feedback"></span>
      <input
        type="text"
        className="form-control form-control-search"
        placeholder="Search"
        onChange={onQuery}
        value={query}
      />
    </div>
  );
};

export default SearchBox;
