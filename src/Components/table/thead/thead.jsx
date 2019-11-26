import React from "react";

const THead = ({ headerNames, orderBy, orderIcon }) => {
  return (
    <thead>
      <tr className="userTable__List__headers">
        {headerNames.map(header => (
          <th
            key={header.label || header.key}
            onClick={() => orderBy(header.path)}
          >
            {header.label} <i className={orderIcon} aria-hidden="true"></i>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default THead;
