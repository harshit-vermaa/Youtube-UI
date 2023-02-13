import React from 'react'
import "./VideoRow.css";

const VideoRow = ({title,thumbnail,channel,subscribeno,views,description,timestamp}) => {
  return (
    <div className="videoRow">
        <img src={thumbnail} alt="" />
        <div className="videoRow__text">
            <h3>{title}</h3>
            <p className='videoRow__headline'>
                {channel} ~ <span className='videoRow__subscribe'><span className='videoRow__subscribeno'>{subscribeno}</span> Subscribe</span> {views} ~ {timestamp}
            </p>
            <p className='videoRow__description'>{description}</p>
        </div>
    </div>
  )
}

export default VideoRow