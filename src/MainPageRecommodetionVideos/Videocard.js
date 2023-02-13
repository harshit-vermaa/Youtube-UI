import React from "react";
import "./Videocard.css";
import Avatar from "@mui/material/Avatar";

function Videocard({
  thumbnail,
  channelimg,
  title,
  avatar,
  channelname,
  views,
  time,
}) {
  return (
    <div className="videocard">
      <img src={thumbnail} alt="thumbnail" className="videocard__thumbnail" />
      <div className="videocard__info">
        <Avatar
          src={channelimg}
          alt={channelname}
          className="videocard__avatar"
        />
        <div className="videocard__text">
          <h4>{title}</h4>
          <p>{channelname}</p>
          <p>
            {views} ~ {time}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Videocard;
