import React, { useState } from "react";
import "./post.css";
import { Users } from "../dynamicData";
export default function Post({ post }) {
  // console.log(post)
  const [like, setLike] = useState(post.like);
  const [isliked, setIsLiked] = useState(false);

  const likeHandller = () => {
    setLike(isliked ? like - 1 : like + 1);
    setIsLiked(!isliked)
  };
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="pstTop">
          <div className="postTopLeft">
            <img
              src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
              alt=""
              className="postProfileImg"
            />
            <span className="postUserName">
              {Users.filter((u) => u.id === post?.userId)[0].userName}
            </span>
            <span className="postDate">{post.data}</span>
          </div>
          <div className="postTopRight">
            <i class="fas fa-grip-vertical"></i>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desk}</span>
          <img src={post.photo} alt="" className="postImg" />
        </div>
        <div className="postButtom">
          <div className="postBottomLeft">
            <img
              src="/assets/like.png"
              alt=""
              onClick={likeHandller}
              className="likeIcon"
            />
            <img
              src="/assets/icon-heart.png"
              onClick={likeHandller}
              alt=""
              className="likeIcon"
            />
            <span className="postLikeCounter">{like} people liked it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">Comments{post.comment} </span>
          </div>
        </div>
      </div>
    </div>
  );
}
