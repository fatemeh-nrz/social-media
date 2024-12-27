import React from "react";
import "./rightbar.css";
import { Users } from "../dynamicData";
import Online from "../online/Online";
export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayCountainer">
          <img src="/assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Pola Foster</b>and <b>3 other friends </b>hav a birthday today
          </span>
        </div>
        <img src="/assets/Ads-PNG.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends </h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };
  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitlt">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightBarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">New York</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Madrid</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightbarInfoKey">RelationShip</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitlt">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="/assets/profilepersion/pic-p-1.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName"></span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assets/profilepersion/pic-p-2.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName"></span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assets/profilepersion/pic-p-3.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName"></span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assets/profilepersion/pic-p-4.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName"></span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assets/profilepersion/pic-p-5.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName"></span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assets/profilepersion/pic-p-6.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName"></span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assets/profilepersion/pic-p-7.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName"></span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assets/profilepersion/pic-p-8.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName"></span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assets/profilepersion/pic-p-9.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName"></span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assets/profilepersion/pic-p-10.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName"></span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
       {/* {profile ? <ProfileRightbar /> :<HomeRightbar />}  */}
       <ProfileRightbar />
       <HomeRightbar />
      </div>
    </div>
  );
}
