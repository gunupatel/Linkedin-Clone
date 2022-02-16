import React, { useState } from 'react'
import "./css/feed.css"
// import CreateIcon from '@mui/icons-material/Create';
import { Avatar } from "@mui/material"
import InputOption from './InputOption';
import Post from './Post';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EventIcon from '@mui/icons-material/Event';
import AssignmentIcon from '@mui/icons-material/Assignment';
import axios from 'axios';
import { useEffect } from 'react';

 let d = {
   userName: "Gunjan",
   photoUrl: "https://wallpapercave.com/wp/wp5107168.jpg",
   name: "Gunjan Kumari",
   description: "I am extremely delightful to share that I have joined Capgemini Technology Services as Software Developer and I am looking forward to enhancing my career and being ready to explore the opportunities that come up with this role hoping to contribute to the future of Capgemini Technology Service."
   
 }
 let payload = {
   userName: "",
   photoUrl: "https://images.pexels.com/photos/1324995/pexels-photo-1324995.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
   name: "",
   description: ""
 }

function Feed() {
  const [post, setPosts] = React.useState(payload);
  const [getPost,setGetPost] = React.useState([]);

  const getPostFromDb =()=>{
    axios.get('http://localhost:8083/post/getPost/'+localStorage.getItem('user')).then((res)=>{
       console.log(res)
       setGetPost(res.data)
    })
  }

    React.useEffect(()=>{
      getPostFromDb();
    },[post])

  const handlePost=(e)=>{
    const {value} = e.target;
    setPosts({...post,description:value,userName:localStorage.getItem('user'),name:localStorage.getItem('user')})
}

  const {description} = post;

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!post){
        return alert("description is Required.")
    }
    const headers = {
        'Content-Type': 'application/json'           
      }
    const json = JSON.stringify(post);
    axios.post('http://localhost:8083/post/sendPost',
       json,{ headers: headers}
    )
    .then(response =>{
        console.log(response);
        // after sending the tweet again we are retriving it on frontend to show it 
        getPostFromDb();
        setPosts(payload);
        document.getElementById('postInput').value = '';
    } )
  }

 

  return (
    <div className='feed'>
      <div className="feed__inputContainer" >
        <div className='feed__input'>
          <Avatar src="https://images.pexels.com/photos/1324995/pexels-photo-1324995.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
          <form >
            <input type="text" id ='postInput'  placeholder='Start a post' onChange={handlePost} />
            {/* <button input type="submit" >Send </button>  */}
            <button onClick={handleSubmit} type='submit'>send</button>
          </form>
        </div>


        <div className='feed__inputOptions'>

          <InputOption Icon={InsertPhotoIcon} title='Photo'
            color='#70B5F9' />
          <InputOption Icon={YouTubeIcon} title='Video'
            color='#E7A33E' />
          <InputOption Icon={EventIcon} title='Event'
            color='#C0CBCD' />
          <InputOption Icon={AssignmentIcon} title='Writer article'
            color='#7FC15E' />
        </div>
        
        
    
      {
              //map is  equivalent to for loop 
              //here i am mapping on getTweet array  to show the posts on ui
              //item is each element inside the array  
              //[a,b,c,d]
            getPost.length>0?getPost.slice(0).reverse().map((item)=>{
              console.log("line 147 " + item);
                return <Post item={item} key={item.id} />
            }):null

       }
           {
           <Post item ={d}/>
       }  

        </div>

      </div>




  )
}

export default Feed
