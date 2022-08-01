import React, { useContext } from "react";
import firebase from "firebase/compat/app";
import "./messageSender.css";
import Avatar from "@mui/material/Avatar";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import FilterOutlinedIcon from "@mui/icons-material/FilterOutlined";
import MoodOutlinedIcon from "@mui/icons-material/MoodOutlined";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import MissedVideoCallRoundedIcon from "@mui/icons-material/MissedVideoCallRounded";
import SentimentSatisfiedRoundedIcon from "@mui/icons-material/SentimentSatisfiedRounded";
import uuid from "react-uuid";
import { db } from "../firebase";
import { Appcontext } from "../context/context";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 440,
  bgcolor: "background.paper",
  //   border: "2px solid #000",
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,
  outline: "none",
  overflowY: "scroll",
  // height: "600px",
  scrollbarWidth: "thin",
  scrollbarColor: "blue orange",
};
const MessageSender = () => {
  const [open, setOpen] = React.useState(false);
  const [post, setColor] = React.useState("");
  const [img, setImg] = React.useState();
  const { user, addToPost } = useContext(Appcontext);

  // console.log(post);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const posts = {
      id: uuid(),
      avatar: "muscab",
      img: img,
      text: post,
      timestamp: new Date().toLocaleDateString("en-us", {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
      username: user?.email,
    };

    addToPost(posts);

    handleClose();
  };
  const onImageChange = (e) => {
    const [file] = e.target.files;
    setImg(URL.createObjectURL(file));
  };
  // console.log(img);
  return (
    <div className="messageSender">
      <div className="topMessager">
        <Avatar src="https://scontent.fmgq1-1.fna.fbcdn.net/v/t39.30808-6/294494602_2203788276463238_9018968524427880114_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=-CWTAR-py38AX_KN4wI&tn=FypzLZY8bUdnCL9J&_nc_ht=scontent.fmgq1-1.fna&oh=00_AT96Hm2ec9YhMLdIsvGG286vwl0JbbaDiw2a41mhxBV6lQ&oe=62DA043A" />
        <div className="message__input" onClick={handleOpen}>
          what is on your mind akram
        </div>
        {/* <form>
          <input
            placeholder={`what is on your mind akram`}
            className="message__input"
          />

          <button type="submit" onClick={handleSubmit} className="hide_btn">
            hidden button
          </button>
        </form> */}
      </div>
      <div className="buttomMessanger">
        <div className="msgOption">
          <MissedVideoCallRoundedIcon style={{ color: "red" }} />
          Live videio
        </div>
        <div className="msgOption" onClick={handleOpen}>
          <FilterOutlinedIcon style={{ color: "green" }} />
          Photo / video
        </div>
        <div className="msgOption" onClick={handleOpen}>
          <MoodOutlinedIcon style={{ color: "#ffcb4c" }} />
          Feeling/ Activity
        </div>
      </div>

      {/* ----------------------------------------------- */}
      <div>
        {/* <Button>Open modal</Button> */}
        <Modal
          sx={{ backgroundColor: "transparent" }}
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} style={{ height: `${img && "600px"}` }}>
            <div className="top-modal">
              <h2>Create Post</h2>
              <IconButton onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </div>
            <div className="top-lower">
              <Avatar src="https://scontent.fmgq1-1.fna.fbcdn.net/v/t39.30808-6/294494602_2203788276463238_9018968524427880114_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=-CWTAR-py38AX_KN4wI&tn=FypzLZY8bUdnCL9J&_nc_ht=scontent.fmgq1-1.fna&oh=00_AT96Hm2ec9YhMLdIsvGG286vwl0JbbaDiw2a41mhxBV6lQ&oe=62DA043A" />
              <div className="small-nav">
                <p>akram ibnu alhaytham</p>
                <div className="deep">
                  <PeopleRoundedIcon className="m-1" />
                  friends
                  <KeyboardArrowDownRoundedIcon className="m-1" />
                </div>
              </div>
            </div>
            <form action="" onSubmit={handleSubmit}>
              {/* <input type="text" style={{ width: "400px" }} />
              <input type="text" style={{ width: "400px" }} /> */}
              <input
                type="text"
                placeholder={`what is on your mind akram ?`}
                style={{
                  width: "400px",
                  height: "90px ",
                }}
                className="post-form"
                onChange={(e) => {
                  setColor(e.target.value);
                }}
              />

              {img && (
                <img
                  src={img}
                  alt=""
                  style={{
                    height: "220px",
                    width: "100%",
                    borderRadius: "4px",
                  }}
                />
              )}

              <div className="modal-bottom-1">
                <div className="box" style={{ cursor: "pointer" }}>
                  Aa
                </div>
                <SentimentSatisfiedRoundedIcon style={{ cursor: "pointer" }} />
              </div>
              <div className="modal-bottom-2">
                <input
                  type="file"
                  className="bottom-2"
                  onChange={onImageChange}
                />
                <FilterOutlinedIcon style={{ color: "green" }} className="in" />
              </div>
              <div className="btnSubmit">
                <button
                  type="submit"
                  className="btnSubmit "
                  style={{
                    backgroundColor: `${post && "#0096FF"}`,
                    border: "none",
                    borderRadius: "3px",
                  }}
                >
                  Post
                </button>
              </div>
            </form>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default MessageSender;
