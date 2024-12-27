import React from "react";
import "./sidebar.css";
import {Users}  from "../dynamicData"
import CloseFriend from "../closefriend/CloseFriend";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <i class="fa fa-feed"></i>
            <span className="sidebarListItemText">Feed</span>
          </li>
          
          <li className="sidebarListItem">
          <i class='fab fa-rocketchat'></i>
            <span className="sidebarListItemText">Chats</span>
          </li>  

          <li className="sidebarListItem">
          <i class="fas fa-video"></i>
            <span className="sidebarListItemText">Videos</span>
          </li> 
          
           <li className="sidebarListItem">
          <i class='fas fa-layer-group'></i>
            <span className="sidebarListItemText">Groups</span>
          </li> 
          
           <li className="sidebarListItem">
          <i class='fas fa-bookmark'></i>
            <span className="sidebarListItemText">Bookmarks</span>
          </li> 
          
           <li className="sidebarListItem">
          <i class='far fa-question-circle'></i>
            <span className="sidebarListItemText">Questions</span>
          </li>
          
            <li className="sidebarListItem">
          <i class='fas fa-shopping-bag'></i>
            <span className="sidebarListItemText">Jobs</span>
            </li>

            <li className="sidebarListItem">
          <i class='fas fa-bahai'></i>
            <span className="sidebarListItemText">Events</span>
          </li>


          <li className="sidebarListItem">
          <i class='fas fa-graduation-cap'></i>
            <span className="sidebarListItemText">Courses</span>
          </li>

        </ul>
        <button className="sidebarButtun">Show More</button>
        <hr  className="sidebarHr"/>
        <ul className="sidebarFeriendList">
        {Users.map(u=>(<CloseFriend key={Users.id} user={u}/>))}
        
        </ul>
      </div>
    </div>
  );
}
