import React, { useContext } from "react";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import FlagIcon from "@mui/icons-material/Flag";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AddIcon from "@mui/icons-material/Add";
import GroupsIcon from "@mui/icons-material/Groups";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import ForumIcon from "@mui/icons-material/Forum";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import SettingsIcon from "@mui/icons-material/Settings";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import HelpIcon from "@mui/icons-material/Help";
import NightlightIcon from "@mui/icons-material/Nightlight";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import { Appcontext } from "../context/context";
import { auth } from "../firebase";
const style = {
  position: "absolute",
  top: "50%",
  left: "85%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  // border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  outline: "none",
  borderRadius: "5px",
};
const Header = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { user } = useContext(Appcontext);

  const login = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <>
      <div className="header">
        <div className="header__left">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/640px-Facebook_f_logo_%282021%29.svg.png"
            alt=""
          />
          <div className="header__input">
            <SearchIcon />
            <input
              type="text"
              placeholder="search facebook"
              className="input"
            />
          </div>
        </div>
        <div className="header__middle">
          <div className="header__option active">
            <HomeIcon fontSize="large" className="active__icon" />
          </div>

          <div className="header__option">
            <SubscriptionsOutlinedIcon fontSize="large" />
          </div>
          <div className="header__option">
            <StorefrontIcon fontSize="large" />
          </div>
          <div className="header__option">
            <GroupsIcon fontSize="large" />
          </div>
        </div>
        <div className="header__right">
          <IconButton>
            <img
              src="https://img.icons8.com/ios-glyphs/30/000000/circled-menu.png"
              className="sp"
            />
          </IconButton>
          <IconButton>
            <img
              src="https://img.icons8.com/ios-glyphs/30/000000/facebook-messenger.png"
              className="sp"
            />
          </IconButton>

          <IconButton>
            <img
              src="https://img.icons8.com/material-rounded/24/000000/appointment-reminders.png"
              className="sp"
            />
          </IconButton>
          <div className="header__info">
            <Avatar
              style={{ cursor: "pointer" }}
              src="https://scontent.fmgq1-1.fna.fbcdn.net/v/t39.30808-6/294494602_2203788276463238_9018968524427880114_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=-CWTAR-py38AX_KN4wI&tn=FypzLZY8bUdnCL9J&_nc_ht=scontent.fmgq1-1.fna&oh=00_AT96Hm2ec9YhMLdIsvGG286vwl0JbbaDiw2a41mhxBV6lQ&oe=62DA043A"
              onClick={handleOpen}
            />
          </div>
        </div>
      </div>

      {/* --------------------------- */}
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-av-top">
              <Avatar
                style={{ cursor: "pointer" }}
                src="https://scontent.fmgq1-1.fna.fbcdn.net/v/t39.30808-6/294494602_2203788276463238_9018968524427880114_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=-CWTAR-py38AX_KN4wI&tn=FypzLZY8bUdnCL9J&_nc_ht=scontent.fmgq1-1.fna&oh=00_AT96Hm2ec9YhMLdIsvGG286vwl0JbbaDiw2a41mhxBV6lQ&oe=62DA043A"
              />
              <h4> kuko </h4>
            </div>
            <div className="modal-av-bottom">
              <div className="modal-av-option">
                <div className="cr">
                  {" "}
                  <SettingsIcon />
                  <h4>Settings & privacy</h4>
                </div>
                <div>
                  {" "}
                  <ArrowForwardIosIcon />
                </div>
              </div>
              <div className="modal-av-option">
                <div className="cr">
                  {" "}
                  <HelpIcon />
                  <h4>Help & support</h4>
                </div>
                <div>
                  {" "}
                  <ArrowForwardIosIcon />
                </div>
              </div>
              <div className="modal-av-option">
                <div className="cr">
                  {" "}
                  <NightlightIcon />
                  <h4>Display & accessability</h4>
                </div>
                <div>
                  {" "}
                  <ArrowForwardIosIcon />
                </div>
              </div>
              <div className="modal-av-option">
                <div className="cr">
                  {" "}
                  <AnnouncementIcon />
                  <h4>Give feed back</h4>
                </div>
                <div>
                  {" "}
                  <ArrowForwardIosIcon />
                </div>
              </div>
              <div className="modal-av-option" onClick={login}>
                <div className="cr">
                  {" "}
                  <MeetingRoomIcon />
                  <h4>Logout</h4>
                </div>
                <div>
                  {" "}
                  <ArrowForwardIosIcon />
                </div>
              </div>
            </div>
            Privacy · Terms · Advertising · Ad Choices · Cookies · · Meta © 2022
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default Header;
