import React from "react";
import css from "./Sidebar.css";
import Sidebarrow from "./Sidebarrow.js";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// learn selected

function Sidebar() {
  return (
    <div className="sidebar">
      <Sidebarrow selected Title="Home" Icon={HomeIcon} />
      <Sidebarrow Title="Trending" Icon={WhatshotIcon} />
      <Sidebarrow Title="Subscription" Icon={SubscriptionsIcon} />
      <hr />
      <Sidebarrow Title="Library" Icon={VideoLibraryIcon} />
      <Sidebarrow Title="History" Icon={HistoryIcon} />
      <Sidebarrow Title="Your videos" Icon={OndemandVideoIcon} />
      <Sidebarrow Title="Watch later" Icon={WatchLaterIcon} />
      <Sidebarrow Title="Liked videos" Icon={ThumbUpOffAltIcon} />
      <Sidebarrow Title="Show more" Icon={KeyboardArrowDownIcon} />
      <hr />
    </div>
  );
}

export default Sidebar;
