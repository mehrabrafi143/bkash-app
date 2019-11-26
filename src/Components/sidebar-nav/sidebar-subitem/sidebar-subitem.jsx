import React from "react";

const SideBarSubitem = ({ chlids }) => {
  return chlids ? (
    <ul>
      {chlids.map(chlid => (
        <li>
          <a href="#">{chlid.lable}</a>
        </li>
      ))}
    </ul>
  ) : null;
};

export default SideBarSubitem;
