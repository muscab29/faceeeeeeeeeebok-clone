import React from "react";
import { friends } from "./components/utils";
import Contact from "./Contact";
import "./contacts.css";
const Contacts = () => {
  console.log(friends);

  return (
    <div>
      {friends.map((friend, ind) => {
        return (
          <div className="friends-list" key={ind}>
            <Contact {...friend} key={ind} />
          </div>
        );
      })}
    </div>
  );
};

export default Contacts;
