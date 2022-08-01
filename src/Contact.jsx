import React from "react";
import "./contact.css";
import Avatar from "@mui/material/Avatar";
const Contact = ({ name, img }) => {
  return (
    <div className="contact-flex">
      <Avatar style={{ height: "35px", width: "35px" }} src={img} />
      <p>{name}</p>
    </div>
  );
};

export default Contact;
