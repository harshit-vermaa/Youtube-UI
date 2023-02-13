import React, { useState } from "react";
import "./Header.css";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import "./Youtube.png";
import { NavLink } from "react-router-dom";

function Header() {
  const [ inputSearch,setinputSearch ] = useState('');
  return(
    <div className="header">
    <div className="header__left">
    <MenuIcon/>
    <NavLink to='/'>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1920px-YouTube_Logo_2017.svg.png" alt="Youtube" className="header__logo"/>
    </NavLink>
    </div>
    <div className="header__input">
    <input  onChange={ (e)=>{ setinputSearch(e.target.value) } } value={inputSearch}  type="text" placeholder="Search"/>
    <NavLink to={`/search/${inputSearch}`}>
    <SearchIcon className="header__inputButton"/>
    </NavLink>
    </div>
    <div className="header__icons">
    <VideoCallOutlinedIcon className="header__icon"/>
    <NotificationsNoneOutlinedIcon className="header__icon"/>
    <AccountCircleOutlinedIcon className="header__icon"/>
    </div>
  </div>
  )
  
}

export default Header;
