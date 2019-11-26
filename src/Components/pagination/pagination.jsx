import React from "react";
import { Link } from "react-router-dom";
import _ from "lodash";

const Pagination = ({ pageSize, count, onPageChange, currentPage }) => {
  const pageCount = Math.ceil(count / pageSize);
  if (pageCount === 1) return null;

  const arr = _.range(1, pageCount + 1);

  return (
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        {arr.map(i => (
          <li
            className={
              currentPage === i ? "page-item active-item" : "page-item"
            }
            key={i}
            onClick={() => onPageChange(i)}
          >
            <Link className="page-link" to="#">
              {i}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
