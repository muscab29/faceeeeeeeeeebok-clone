import React from "react";
import "./sidebarRow.css";
import Avatar from "@mui/material/Avatar";

const SidebarRow = ({ title, icon, src }) => {
  return (
    <div className="div">
      <div className="sidebar__row">
        {src && <Avatar src={src} />}
        <p className="sidebar__icon"> {icon && icon} </p>
        <h4> {title} </h4>
      </div>
    </div>
  );
};

export default SidebarRow;
