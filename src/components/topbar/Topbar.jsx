import React from "react";
import "./Topbar.css";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">SocialApp</span>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
          <i class="fas fa-search"></i>
          <input
            placeholder="search for friend ,post or video"
            className="searchInput"
          />
        </div> 
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">HomePage</span>
          <span className="topbarLink">timeLine</span>
        </div>

        <div className="topbarIcons">
        <div className="topbarIconItem">
          <i class="fas fa-child"></i>
          <span className="topbarIconBadge">1</span>
        </div>
        <div className="topbarIconItem">
        <i class='fab fa-rocketchat'></i>
        <span className="topbarIconBadge">2</span>
        </div>
        <div className="topbarIconItem">
        <i class='fas fa-bell'></i>
        <span className="topbarIconBadge">1</span>
        </div>
        </div>
        <img src="/assets/profilepersion/pic-p-1.jpg"  className="topbarImg"></img>
      </div>
    </div>
  );
}
