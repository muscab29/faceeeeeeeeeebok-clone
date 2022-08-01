import React, { useContext, useState } from "react";
import "./post.css";
import Avatar from "@mui/material/Avatar";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import ThumbUpRoundedIcon from "@mui/icons-material/ThumbUpRounded";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import ReplyRoundedIcon from "@mui/icons-material/ReplyRounded";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CancelIcon from "@mui/icons-material/Cancel";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import CodeOffIcon from "@mui/icons-material/CodeOff";
import { Appcontext } from "../context/context";

const style = {
  position: "absolute",
  top: "68%",
  left: "57%",
  transform: "translate(-50%, -50%)",
  width: 330,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  outline: "none",
  border: "none",
  borderRadius: "4px",
};
const Post = ({ avatar, img, text, timestamp, username, id }) => {
  const [liked, setLiked] = useState(false);
  const { user, hidePost } = useContext(Appcontext);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  console.log(id);
  const hide = () => {
    hidePost(id);
    handleClose();
  };

  const toggler = () => {
    setLiked(!liked);
    console.log(liked);
  };
  return (
    <>
      <div className="post">
        <div className="post-top">
          <div className="post-top-left">
            <Avatar src={avatar} />
            <div className="top-post-next">
              <h4>{user?.email.slice(0, 5)}</h4>
              <p className="timestamp"> {timestamp}</p>
            </div>
          </div>
          <div className="post-top-right" onClick={() => handleOpen()}>
            <MoreHorizRoundedIcon className="post-dots" />
          </div>
        </div>
        <div className="post-text">{text}</div>
        <div className="post-img">{img && <img src={img} alt="" />}</div>
        <div className="post-info">
          <p>3</p>
          <p> comments</p>
        </div>
        <div className="post-bottom">
          <div className="post-bottom-aption" onClick={toggler}>
            <ThumbUpRoundedIcon
              style={{ color: `${liked ? "#1877f2" : ""}` }}
            />{" "}
            <p style={{ color: `${liked ? "#1877f2" : ""}` }}>Like</p>
          </div>
          <div className="post-bottom-aption">
            <ChatBubbleOutlineRoundedIcon /> <p>Comment</p>
          </div>
          <div className="post-bottom-aption">
            <ReplyRoundedIcon /> <p>Share</p>
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="del-option">
            <BookmarkBorderIcon />
            <h5>Save post</h5>
          </div>
          <div className="del-option">
            <VisibilityOffIcon />
            <h5>view edit story</h5>
          </div>
          <div className="del-option">
            <NotificationsNoneIcon />
            <h5>Turn on notification for this post</h5>
          </div>
          <div className="del-option">
            <CodeOffIcon />
            <h5>Embed</h5>
          </div>
          <div className="del-option" onClick={hide}>
            <CancelIcon />
            <h5>Hide post</h5>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default Post;
