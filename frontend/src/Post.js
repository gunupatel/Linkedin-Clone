import { Avatar } from '@mui/material'
import React from 'react'
import "./css/Post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InputOption from './InputOption';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';


function Post({item}) {

    if(item == undefined){
        return <div>7</div>
    }
    return (
        <div className='posts'>
            <div className='post__header'>
                <div className='post__headerLeft'>
                    <Avatar src={item.photoUrl}/>
                    <div className='post_profile_details'>
                        <h3>{item.name}</h3>
                    </div>
                </div>
                <MoreVertIcon />               
            
             </div>

            <div className='post__body'>   
                    <div>                        
                    <p>{item.description}</p>
                    </div>
                    <div>
                        <img src = "https://www.consultancy.eu/illustrations/news/detail/2018-09-12-083751616-Capgemini-merges-consulting_-digital-and-creative-units-into-Capgemini-Invent-.jpg"></img>
                    </div>

                <div className='post__footer'>
                    <div className='post__footer__option'>
                        <ThumbUpIcon />
                        <span>Like</span>
                    </div>

                    <div className='post__footer__option'>
                        <CommentIcon />
                        <span>Comment</span>
                    </div>

                    <div className='post__footer__option'>
                        <ShareIcon />
                        <span>Share</span>
                    </div>

                    <div className='post__footer__option'>
                        <SendIcon/>
                        <span>Send</span>
                    </div>
                </div>
        </div>

    </div>
    )
}

export default Post












