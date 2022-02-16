import React from 'react'
import { useHistory } from "react-router-dom";
import './css/Login.css';
import axios from 'axios';
import { useState } from "react";
function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e) => {

        e.preventDefault();
        const user = { email, password };
        const result = axios
            .post("http://localhost:8086/auth", user)
            .then((response) => {
                console.log(response);
                if (response.data.response == "User not found") {
                    alert("Invalid Email or Password.");
                } else {
                    alert("Login Successfully.");
                    console.log(user);
                    localStorage.setItem("user", response.data.name);
                    history.push("/Home");

                    // window.location.href = "/";

                }

            });

    };
    // const handleSubmit = (e) => {

    //     e.preventDefault();
    //     try {
    //         const user = { email, password };
    //         axios.post("http://localhost:8086/auth", user)
    //             .then(response => {

    //                 if (response.data === true) {
    //                     alert("Login Successful");
    //                     history.push("/Home");
    //                 }
    //                 else {
    //                     alert("Invalid EmailId and Password");
    //                 }
    //             });

    //     } catch (error) {

    //         alert(error);

    //     }

    // };
    return (
        <div className='login_card'>
            <div className='login'>
                <div className='login__header'>
                    <h1>Sign in</h1>
                    <p className='text'>Stay updated on your professional world</p>
                    <form onSubmit={handleSubmit} >
                        <div className='label-css-form-login'>
                            <label form="login_email__input">Email or phone number</label>
                        </div>
                        <div className='label-css-form-login'>
                            <input type="email" required onChange={(event) => setEmail(event.target.value)} />
                        </div>
                        <div className='label-css-form-login'>
                            <label form="login_password__input">Password</label>
                        </div>
                        <div className='label-css-form-login'>
                            <input type="password" required onChange={(event) => setPassword(event.target.value)} />
                        </div>
                        <div className='forget__password'>
                            <p>forget password?</p>
                        </div>
                        <div className='sign-in-button'>
                            <input type="submit" value="Sign in" className="submit-btn sign-in-button" />

                        </div>
                    </form>
                    <div className='login__footer'>
                        <p className="sign_in_text">
                            New to LinkedIn? <a className="signin-text-css" onClick={() => {
                                console.log('Clicked');
                                history.push('/Signup');
                            }}>Join now</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
