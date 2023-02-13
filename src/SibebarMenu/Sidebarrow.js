import React from "react";
import css from "./Sidebarrow.css";

function Sidebarrow({ Icon, Title }) {
  return (
    <div className="sidebarrow">
      <Icon className="sidebarrow__icon" />
      <p className="sidebarrow__title">{Title}</p>
    </div>
  );
}

export default Sidebarrow;
