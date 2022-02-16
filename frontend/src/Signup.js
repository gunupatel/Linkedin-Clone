import React, { Component } from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";
//mport UserServices from "./services/UserServices";
//import React, { useState, useEffect } from 'react'
import axios from 'axios';
import "./css/Signup.css";

function Signup() {
    const history = useHistory();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();

        try {
            const user = { email, password,name};
           // const result = axios.post("http://localhost:8086/login", user);

            axios.post("http://localhost:8086/login", user)
        .then(response => {

            alert(response.data.response);
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("password").value = "";
            

        });
        
        } catch (error) {

            alert(error);

        }

    };
    
    return (
        <div className="signup">
            <div className="header__title">
                <h1>Linked <span className="text__primary">in</span></h1>

                <div className="header__text">Make the most of your professional life</div>
            </div>

                <div className="Signup__email">
                    <form >
                        <label form="email-input" > Email or phone number</label>
                        <input type="email" id="email" required
                            onChange={(event) => setEmail(event.target.value)} />
                    </form>

                    <div className="Signup__password">
                        <form>
                            <label form="password-input">Password</label>
                            <input type="password" id="password"
                               required onChange={(event) => setPassword(event.target.value)} />
                            
                        </form>
                    </div>

                    <div className="Signup__password">
            <form>
            <label form="password-input">Name</label>
            <input type="text" id="name"
            required onChange={(event) => setName(event.target.value)} />
             
            </form>
        </div> 

                    <div className="Signup__text">
                        <small>
                            By Clicking Agree & Join, You Agree to the LinkedIn
                            <span className="text-primary">
                                <a href="#"> User Agreement,</a>
                                <a href="#">Privacy Policy,</a>
                                <a>and </a>
                                <a href="#">Cookie Policy.</a>
                            </span>
                        </small>
                    </div>

                    {/* <button type="submit" className="submit-btn" onClick={handleSubmit}>Signup</button> */}
                    <div className="form-group">
                        <input type="submit" value="Signup" className="submit-btn" onClick={handleSubmit} />


                    </div>
                    <p className="sign_in_text">
                        Already On LinkedIn? <a className="signin-text-css" onClick={() => {
                            history.push('/Login');
                        }}> Sign in</a>
                    </p>
                </div>

                <div className="Signup__footer">
                    <p>Linkedin &copy; 2021 </p>
                </div>
                
            </div>
            
            )
}

            export default Signup