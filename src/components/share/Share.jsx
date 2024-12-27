import React from "react";
import "./share.css";
export default function share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src="/assets/profilepersion/pic-p-4.jpg"
            alt=""
            className="shareProfileImg"
          />
          <input
            placeholder="what is in your mind safak?"
            className="shareInput"
          />
        </div>
        <div className="shareHr"></div>
        <div className="shareButtom">
          <div className="shareOptions">
            <div className="shareOption">
              <i class="fas fa-photo-video shareIcon"style={{color:"red"}} ></i>
              <span className="shareOptionText">Photo or Video</span>
            </div>
            <div className="shareOption">
              <i class="fas fa-tag shareIcon"style={{color:"blue"}} ></i>
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <i class="fas fa-map-marker-alt shareIcon"style={{color:"green"}} ></i>
              <span className="shareOptionText" >Location</span>
            </div>
            <div className="shareOption">
              <i class="fas fa-smile shareIcon"  style={{color:"purple"}} ></i>
              <span className="shareOptionText">feelings</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}
