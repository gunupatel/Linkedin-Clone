import { Avatar } from "@mui/material"
import React from "react";
import { useEffect } from "react";
import './css/profile.css'
import { useHistory } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import axios from "axios";
import SimpleModal from './Setupprofile';


let payload = {
    name: "",
    location: "",
    jobposition: "",
    companyname: "",
    userName: ""
}
const user = localStorage.getItem("user");

 // console.log(user);
const Profile = () => {
    const [open, setOpen] = React.useState(false);
    const [data, setData] = React.useState(payload);
    const [user, setUser] = React.useState();
    const history = useHistory();
    const handleOpen = () => {

        setOpen(true);

    };
    const handleClose = () => {

        setOpen(false);

    };

    React.useEffect(() => {

        setUser(localStorage.getItem('userName'))
        setUser(localStorage.getItem('jobposition'))
        setUser(localStorage.getItem('location'))
        setUser(localStorage.getItem('companyname'))

        axios.get('http://localhost:8084/get/' + localStorage.getItem('userName')
        + localStorage.getItem('jobposition')
        + localStorage.getItem('location')
        + localStorage.getItem('companyname')
        )
        // axios.get('http://localhost:8084/get/')
        

            .then(response => {
                    //    localStorage.getItem('userName')
                console.log(response);

                setData({ ...data, companyname: response.data.companyname, name: response.data.name, userName: response.data.userName, 
                    jobposition: response.data.jobposition, location: response.data.location})

            })

    }, []);

    
    return (
        <div class="container">
            <header>
                <ArrowBackIcon className="arrow_style" onClick={() => { history.push('/Home') }} />
                <i class="fa fa-bars" aria-hidden="true" ></i>
            </header>
            <div class="row">
                <div class="left col-lg-4">
                    <div class="photo-left">


                        <img class="photo" src="https://images.pexels.com/photos/1324995/pexels-photo-1324995.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                       <div className="Buttons">

                      
                        <button className="Profile_Button" type="Button" onClick={handleOpen}>Setup Profile</button>
                        <button className="Edit_Button" type="Button" onClick={() => { history.push('/Editprofile') }}>Add Experiences</button>
                        </div>
                        <SimpleModal handleClose={handleClose} open={open} />
                        {/* <div class="active"></div> */}
                    </div>
                     {/* <div class="Pname">

                        <p classname="name">{data.name}</p>
                    </div>  */}

                    <p classname="name">{data.userName ? data.userName  : localStorage.getItem('userName')} <br/><br/>
                    {data.jobposition ? data.jobposition : localStorage.getItem('jobposition')}<br/> 
                    {data.location ? data.location : localStorage.getItem('location')}<br/>
                    {data.companyname ? data.companyname : localStorage.getItem('companyname')}
                    </p>
                    {/* <button className="Button" type="Button" onClick={() => { history.push('/Editprofile') }}>Add Experiences</button> */}
                </div>

                <div className="stat col-xs-4">
                    <p className="desc">{data.biog}</p>
                </div>

                {/* <p class="info">Software Developer</p>
                <p class="info">Capgemini Technology Service</p>
                <p class="info">Bengaluru,Karnataka,India <b classname="contact_style">.ContactInfo</b></p> */}

                <div class="stats row">
                    <div class="info1">
                        <div class="stat col-xs-4">
                            <p class="number-stat1">115 Connections</p>
                            <p class="number-stat2">20 Viewed Your Profile</p>

                        </div>

                    </div>

                </div>
            </div>
        </div>

    )
}
export default Profile