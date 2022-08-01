import React from "react";
import "./feed.css";
import MessageSender from "./MessageSender";
import Stories from "./Stories";
const Feed = () => {
  return (
    <div className="feed">
      <Stories />
      <MessageSender />
    </div>
  );
};

export default Feed;
