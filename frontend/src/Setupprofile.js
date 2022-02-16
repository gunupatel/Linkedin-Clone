import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import './css/setupprofile.css';
import axios from 'axios';
//import CloseIcon from '@material-ui/icons/Close';
import CloseIcon from '@mui/icons-material/Close';
// import { useHistory } from "react-router-dom";


function getModalStyle() {
    //const history = useHistory();
  const top = 50
  const left = 50 

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 500,
    height: 500,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4, 5, 3),
  },
}));
let payload ={
    name : "",
    jobposition: "",
    location : "",
    companyname: "",
    userName:""
    }
    

export default function SimpleModal({handleClose,open}) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  const [bio , setBio] = useState(payload);

  const handleChange=(e)=>{
    const {name,jobposition,location,companyname, value}= e.target ;
    // const {jobposition , value1}= e.target ;
    // const {location , value2}= e.target ;
    // const {companyname, value3}= e.target ;
    setBio({...bio,[name]:value,[jobposition]:value,[location]:value,[companyname]:value})

  }
  const {name,jobposition,location,companyname }= bio;
  const saveBio =(e) =>{
    e.preventDefault();
  
    const headers = {
        'Content-Type': 'application/json'
        
      }
    
    const user={name,jobposition,location,companyname}
    axios.post('http://localhost:8084/add',
       user,{ headers: headers}

    )
    .then(response =>{
        console.log(response);
        localStorage.setItem("userName",response.data.userName);
        localStorage.setItem("jobposition",response.data.jobposition);
        localStorage.setItem("location",response.data.location);
        localStorage.setItem("companyname",response.data.companyname);
        handleClose();
        window.location.reload();
    } )

    setBio(payload);
}
  const body = (
    <div style={modalStyle} className={classes.paper}>

            <div className='outer_modal'>
                
       <form onSubmit={saveBio} className='form_style'>
       {/* <div className='closeicon_style'> */}
            <CloseIcon  className='closeicon_style' />
                    {/* </div> */}
                    <label form="name_input" >Name*</label>
                    <input type="text" className='Name' name = "name" value={name} onChange={handleChange}/>
                    <br/>
                    <label form="web_input" >Job Position</label>
                    <input type="text" className='website' name = "jobposition" value={jobposition} onChange={handleChange} 
                    
                    />
                    <br/>
                    <label form="location_input" >Location</label>
                    <select name="location" id="start_month" className='location' value={location} onChange={handleChange}>
                    <option >Select Your Location</option>
                        <option value="Bangalore,Karnataka,India">Bangalore</option>
                        <option value="Kolkata,West Bengal,India">Kolkata</option>
                        <option value="Mumbai,Maharashtra,India">Mumbai</option>
                        <option value="Lucknow,Uttar Pardesh,India">Lucknow</option>
                        <option value="Puri,Orissa,India">Puri</option>
                        <option value="Noida,New Delhi,India">Delhi</option>
                        <option value="Chennai,TamilNadu,India">Chennai</option>
                        
                    </select>
                    {/* <input type="text" className='location' name = "location" value={location} onChange={handleChange}/> */}
                    <br/>
    
                    <label form="bio_input" className='biogr' >Company Name</label>
                    <input type="text" className='company-name' name = "companyname" value={companyname} onChange={handleChange}/>
                    <br/>
                    <button type="submit" className="submit" >Submit</button>
                </form>
                </div>
      <SimpleModal />
    </div>
  );

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}