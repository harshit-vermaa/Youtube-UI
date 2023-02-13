import React from "react";
import css from "./SearchPage.css";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
import TuneIcon from "@mui/icons-material/Tune";
import Channelimg from "../Channelimg/Channelimg.jpg";
import Tone from "../Thumbnails/TNtedx.jpg";

const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneIcon />
        <h1>filter</h1>
      </div>
      <hr />
      <ChannelRow
        image={Channelimg}
        channel="Harshit verma"
        verified
        subs="999M"
        noOfVideos={999}
        description="Welcome to my daily life part 69 Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem aspernatur culpa quod fugit laboriosam eum, maiores consectetur dignissimos harum tempora quo quis voluptate, assumenda numquam, sint cumque hic expedita voluptatibus sapiente aliquam provident possimus dolorum."
      />

      <hr />

      <VideoRow
        title="How to grow"
        thumbnail={Tone}
        channel="Harshit verma"
        subscribeno="999M"
        views="20.5M"
        timestamp="12.30"
        description="Wanna know about my life check this out!!......"
      />
      <VideoRow
        title="How to grow"
        thumbnail={Tone}
        channel="Harshit verma"
        subscribeno="999M"
        views="20.5M"
        timestamp="12.30"
        description="Wanna know about my life check this out!!......"
      />
      <VideoRow
        title="How to grow"
        thumbnail={Tone}
        channel="Harshit verma"
        subscribeno="999M"
        views="20.5M"
        timestamp="12.30"
        description="Wanna know about my life check this out!!......"
      />
      <VideoRow
        title="How to grow"
        thumbnail={Tone}
        channel="Harshit verma"
        subscribeno="999M"
        views="20.5M"
        timestamp="12.30"
        description="Wanna know about my life check this out!!......"
      />
      <VideoRow
        title="How to grow"
        thumbnail={Tone}
        channel="Harshit verma"
        subscribeno="999M"
        views="20.5M"
        timestamp="12.30"
        description="Wanna know about my life check this out!!......"
      />
    </div>
  );
};

export default SearchPage;
