import React from "react";
import "./profile.css";
// import './index.css';

import Topbar from "../components/topbar/Topbar";
import Sidebar from "../components/sidebar/Sidebar";
import Feed from "../components/feed/Feed";
import Rightbar from "../components/rightbar/Rightbar";
export default function Profile() {
  return (
    <div>
      <Topbar />
      <div className="profile">
        <Sidebar />

        <div className="profileRight">
          <div className="profileRighrTop">
            <div className="profileCover">
              <img
                src="assets/post/post-4.jpg"
                alt=""
                className="profileCoverImg"
              />
              <img
                src="assets/profilepersion/pic-p-1.jpg"
                alt=""
                className="profileUserImg"
              />
            </div>
            <div className="profileInf">
              <h4 className="profileInfoName">Safak Kacaols</h4>
              <span className="profileInfoDesk">Hello My Friends</span>
            </div>
          </div>
          <div className="profileRighrBottom">
          <Feed />
          <Rightbar Profile/>
          </div>
         
        </div>
      </div>
    </div>
  );
}
