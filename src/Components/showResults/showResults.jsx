import React from "react";

const ShowResult = ({ onPageSizeChange }) => {
  return (
    <div className="pagination-container__select">
      <span>Show Results</span>
      <select name="" id="" onChange={e => onPageSizeChange(e)}>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
      </select>
    </div>
  );
};

export default ShowResult;
