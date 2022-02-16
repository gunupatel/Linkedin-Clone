import React from 'react'
import {Avatar} from "@mui/material"
import "./css/header.css"


function Headeroptions({Icon, title , avatar}) {
    return (
        <div className='header__options'> 
        {
            Icon && <Icon></Icon>
        }
        {
          avatar && <Avatar className='sidebar__avatar' src='https://images.pexels.com/photos/1324995/pexels-photo-1324995.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'/>
        }
           
            <span>{title} </span>
        </div>
    )
}

export default Headeroptions
