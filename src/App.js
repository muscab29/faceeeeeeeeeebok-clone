import "./App.css";
import { useNavigate } from "react-router-dom";

import Feed from "./components/Feed";
import Header from "./components/Header";
import Post from "./components/Post";
import Sidebar from "./components/Sidebar";
import Sp from "./components/Sp";
import Sponsored from "./components/Sponsored";
import MissedVideoCallRoundedIcon from "@mui/icons-material/MissedVideoCallRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import Contacts from "./Contacts";
import Login from "./components/Login";
import { auth, db } from "./firebase";
import { useContext, useEffect, useState } from "react";
import { Appcontext, ContextProvider } from "./context/context";
function App() {
  const { user, posts } = useContext(Appcontext);
  // const [posts, setPost] = useState([]);
  const navigate = useNavigate();
  // useEffect(() => {
  //   console.log("----------------kokula-----------------");
  //   fetchPosts();
  // }, []);

  // const fetchPosts = async () => {
  //   const response = db.collection("akram11");
  //   const data = await response.get();
  //   console.log(data.docs);
  //   data.docs.map((item) => {
  //     setPost([...posts, item.data()]);
  //   });
  //   console.log(posts);
  // };
  // fetchPosts();

  if (!user) {
    navigate("/login");
  }
  console.log(posts);
  return (
    <div className="app">
      <>
        {" "}
        <Header />
        <div className="app__body">
          <Sidebar />
          <div>
            {" "}
            <Feed />
            <div>
              {" "}
              {posts &&
                posts.map((post, id) => {
                  return <Post {...post} key={id} />;
                })}
            </div>
          </div>

          <div className="sponsored">
            {/* <h5 className="text-hide">
            work with tony robbones and Dean gresiolwork with tony robbones and
            Dean gresiol work with tony robbones and Dean gresiol
          </h5> */}
            <h3>Sponsored</h3>
            <div className="fleex">
              {" "}
              <img src="https://scontent.fmgq1-1.fna.fbcdn.net/v/t45.1600-4/292408073_6279535540626_3584113729182005222_n.jpg?stp=cp0_dst-jpg_p296x100_q75_spS444&_nc_cat=100&ccb=1-7&_nc_sid=67cdda&_nc_ohc=nN53QecgDO4AX967Jcv&_nc_ht=scontent.fmgq1-1.fna&oh=00_AT-oV1lY3j06EuhOaFV6VhqEoMv-T0UPSOEtTugYCiyRVw&oe=62DCBFF7" />{" "}
              <h5>work with tony robbones and Dean gresiol</h5>
            </div>
            <div className="fleex">
              {" "}
              <img src="https://scontent.fmgq1-1.fna.fbcdn.net/v/t45.1600-4/287486363_23850954597140718_5155963617343161536_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=2aac32&_nc_ohc=XntDmz5CDNUAX-awKx-&_nc_ht=scontent.fmgq1-1.fna&oh=00_AT99IiOO4olOrjlNKTlOZcV15C8ylbtFODp4SJGh_eBgjA&oe=62DD44D8" />{" "}
              <h5>up to 50% discount</h5>
            </div>

            <div className="contact">
              <div className="contact-top">
                <h4>Contact</h4>
                <div>
                  <MissedVideoCallRoundedIcon
                    className="p-1"
                    style={{ cursor: "pointer" }}
                  />
                  <SearchRoundedIcon
                    className="p-1"
                    style={{ cursor: "pointer" }}
                  />
                  <MoreHorizRoundedIcon
                    className="p-1"
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </div>
              <div className="contact-bottom">
                <Contacts />
              </div>
            </div>
          </div>
        </div>{" "}
      </>
    </div>
  );
}

export default App;
