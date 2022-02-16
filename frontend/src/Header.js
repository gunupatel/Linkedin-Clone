import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import "./css/header.css"
import Headeroptions from './Headeroptions';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar } from "@mui/material"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import LockIcon from '@mui/icons-material/Lock';
import { useHistory } from "react-router-dom"
// import { useHistory } from "react-router-dom";
// import React, { useEffect, useState } from "react";

function Header() {
    const history = useHistory();
    return (
        <div className='header'>
            <div className='header__left'>
                 <div className='header__log'>
                        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png"/>
                 </div>
                 <div className='header__search'>
                     <SearchIcon />
                     <input type="text" placeholder='Search'/>
                 </div>
            </div>
                 <div className='header__right'>
                     <Headeroptions Icon={HomeIcon } title="Home" />
                     <Headeroptions Icon={PeopleIcon } title="My Network" />
                     <Headeroptions Icon={BusinessCenterIcon } title="Jobs" />
                     <Headeroptions Icon={MessageIcon } title="Messaging" />
                     <Headeroptions Icon={NotificationsIcon } title="Notification" />
 
                     <Headeroptions avatar={Avatar }   
                     
                      title="Me" />
                      {/* <Headeroptions Icon={LockIcon} onClick={() => {
                          history.push('/')}}/> */}
                      <LockIcon classname="logout_bottom"onClick={() => {
                          history.push('/')}}>Signout</LockIcon> 
                     {/* <Headeroptions Icon={ArrowDropDownIcon} />
                     <Headeroptions title= "Try Premium for free"/> */}
                 </div>
            </div>
        
    )
}

export default Header
