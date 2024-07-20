import React, { forwardRef } from "react";
import { Avatar } from "@material-ui/core";
import InputOption from "./InputOption";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import "./Post.css";



const Post = forwardRef(({ name = "Anonymous", description = "", message = "", photoUrl = "" }, ref) => {
  // Ensure that name is a string and handle cases where it's empty
  const displayName = name ? name : "Anonymous";
  const displayInitial = displayName[0] ? displayName[0].toUpperCase() : "U";

  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <Avatar src={photoUrl}>{displayInitial}</Avatar>

        <div className="post__info">
          <h2>{displayName}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="post__body">
        <p>{message}</p>
      </div>

      <div className="post__buttons">
        <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray" />
        <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray" />
        <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray" />
        <InputOption Icon={SendOutlinedIcon} title="Send" color="gray" />
      </div>
    </div>
  );
});

export default Post;
