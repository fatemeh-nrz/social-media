import React from "react";
import "./online.css";
export default function Online({user}) {
  return (
    <li className="righbarFriend">
      <div className="rightbarProfileImgContainer">
        <img
          src={user.profilePicture}
          alt=""
          className="rightbarProfileImg"
        />
        <span className="rightbarOnline"></span>
        <span className="rightbarUserName">{user.userName}</span>
      </div>
    </li>
  );
}
