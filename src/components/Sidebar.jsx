import React from "react";
import "./sidebar.css";
import SidebarRow from "./SidebarRow";
import { siderows } from "./utils";
const Sidebar = () => {
  return (
    <div className="sm">
      {siderows.map((row, indx) => {
        return (
          <div className="sidebarr" key={indx}>
            <SidebarRow {...row} key={indx} />
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
