import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import './css/editprofile.css';
import axios from 'axios';
import { useState } from "react";
import { useHistory } from "react-router-dom";

function Editprofile() {
    const history = useHistory();

    const [title, setTitle] = useState("");
     const [companyName, setCompanyName] = useState("");
     const [location, setLocation] = useState("");
     const [startDate, setStartDate] = useState("");
     const [endDate, setEndDate] = useState("");
     const [description, setDescription]=useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            const title = document.getElementById("title").value;
            const companyName = document.getElementById("company_name").value;
            const location = document.getElementById("location").value;
            const startDate = document.getElementById("start_month").value + " " + document.getElementById("start_year").value;;
            const endDate = document.getElementById("end_month").value + " " + document.getElementById("end_year").value;;
            const description = document.getElementById("description").value;

          const experience = { title, companyName,location,startDate,endDate,description};
          const result = axios.post("http://localhost:8082/experience/add", experience);
        //  const result1 = axios.post("http://localhost:8082/experience/update", experience);
       //  const result2 = axios.post("http://localhost:8082/experience/get/{id}", experience);
          alert(" successfully added ");
          setTitle("");
          setCompanyName("");
          setLocation("");
          setStartDate("");
          setEndDate("");
          setDescription("");

          console.log(experience);
    
          // history.push("/");
    
        } catch (error) {
    
          alert(error);
    
        }
    
      };
    return (
        <div>
            <div className='edit_profile_card'>
                <div className='edit_profile_header'>
                    <h1>Add experience</h1>
                    <div className='closeicon_style'>
                        <CloseIcon onClick={() => {
history.push('/Profile')}} />
                    </div>
                </div>

                <form className='form_style_1' onSubmit={handleSubmit}>
                    <label form="Title_input" >Title*</label>
                    <input type="text" className='title' id = "title" required/>
                    <label form="company_input" > CompanyName </label>
                    <input type="text" className='companyname' id = "company_name" required/>
                    <label form="location_input" > Location</label>
                    <input type="text" className='locations' id = "location" required />
                    
                    <label form="startdate_input" className='startdate_style' > StartDate </label>

                    <select name="month" id="start_month" className='month'>
                        <option value="january">January</option>
                        <option value="february">February</option>
                        <option value="march">March</option>
                        <option value="april">April</option>
                        <option value="may">May</option>
                        <option value="june">June</option>
                        <option value="july">July</option>
                        <option value="august">August</option>
                        <option value="september">September</option>
                        <option value="october">October</option>
                        <option value="november">November</option>
                        <option value="december">December</option>
                    </select>
                    <select name="year" id="start_year" className='year'>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                        <option value="2011">2011</option>
                        <option value="2010">2010</option>
                    </select>
                    <label form="enddate_input" className='enddate_style'>EndDate </label>
                    <select name="month" id="end_month" className='month'>
                        <option value="january">January</option>
                        <option value="february">February</option>
                        <option value="march">March</option>
                        <option value="april">April</option>
                        <option value="may">May</option>
                        <option value="june">June</option>
                        <option value="july">July</option>
                        <option value="august">August</option>
                        <option value="september">September</option>
                        <option value="october">October</option>
                        <option value="november">November</option>
                        <option value="december">December</option>
                    </select>
                    <select name="year" id="end_year" className='year' >
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                        <option value="2011">2011</option>
                        <option value="2010">2010</option>
                    </select>
                    <label form="discription_input" className='desc' >Description</label>
                    <input type="text" className='description' id = "description" />
                
                    <button type="submit" className="submit__button">Save</button> 
                </form>

            </div>
        </div>
    )
}

export default Editprofile;
