import React from "react";
import Avatar from "@mui/material/Avatar";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";

import "./story.css";
const Story = ({ imag, src, name, icon }) => {
  return (
    <div style={{ backgroundImage: `url(${imag})` }} className="story">
      {icon && (
        <AddCircleOutlinedIcon className="add__icon" fontSize="x-large" />
      )}
      {!icon && <Avatar src={src} className="avatar" />}
      <h4> {name} </h4>
    </div>
  );
};

export default Story;
