import React from "react";

import "./Comments.css";
const moment = require("moment");

const Comments = ({ comment }) => {
  const fullDate = new Date(comment.commentCreated);
  const timestamp = moment(fullDate).fromNow();

  if (comment.commentUserId.profilePic === undefined) {
    comment.commentUserId.profilePic = "https://shorturl.at/bGLT2";
  }

  return (
    <>
      <div class="comments-container">
        <div class="comment-header">
          <img
            class="comment-profile-image"
            src={comment.commentUserId.profilePic}
            alt="kyle"
          />
          <div class="comment-username">{comment.commentUserId.usersName}</div>
          <div class="comment-time">grumbled back {timestamp}</div>
          <div class="comment-name-and-time-container"></div>
        </div>
        <div class="comment">{comment.message}</div>
      </div>
    </>
  );
};
export default Comments;
