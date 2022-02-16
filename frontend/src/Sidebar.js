import React from 'react'
import "./css/sidebar.css"
import { useHistory } from "react-router-dom";
import { Avartar, Avatar } from "@mui/material"
function Sidebar() {

    // const recentItem = (topic) => (
    //     <div className='sidebar__recentItem'>
    //         <span className='sidebar__hash'>#</span>
    //         <p>{topic}</p>
    //     </div>
    // )
    const user = localStorage.getItem("user");

  console.log(user);
    const history = useHistory();
    return (
       
        <div className='sidebar'>
            <div className='sidebar__profile'>
                <img src="https://www.freecodecamp.org/news/content/images/2021/06/w-qjCHPZbeXCQ-unsplash.jpg" alt=''/>
                
              
                    <div className='profile__details'>
                          <Avatar className='sidebar__avatar' src='https://images.pexels.com/photos/1324995/pexels-photo-1324995.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'/>  
                         {/* <Avatar src="https://wallpapers.com/images/high/hd-mobile-screen-wallpaper-ku0t2z487rn2qloc.jpg"/>   */}
                        <h4 onClick={() => {
                history.push('/Profile')}}>{user}</h4>
                        <p>Software Developer</p>
                   
                    </div>
                   <div className='profile__stats'>
                       <span > Who viewed your profile</span>
                       <span className='stat__number'>20</span>
                   </div>

                   <div className='profile__stats'>
                       <span >Connections <br/><b>Grow your network</b></span>
                       <span className='stat__number'>130</span>
                   </div>

            </div>
            <div className='sidebar__recent'>
                  <p>Recent</p>
                  <p className="hash"><span># </span>branding   </p>
                  <p className="hash"><span>#</span> marketing </p>
                  <p className="hash"><span>#</span> webdevelopment </p>
                  <p className="hash"><span>#</span> programming </p>
                  <p className="hash"><span>#</span> reactjs </p>
                  <p className="hash"><span>#</span> reduxtoolkit </p>

              </div>
        </div>
    )
}

export default Sidebar

