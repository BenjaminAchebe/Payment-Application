import React, { useState } from "react";
import classes from './Login.module.css';




const Login = (props) => {
    const [enteredPhone, setEnteredPhone] = useState('')
    const [enteredPassword, setEnteredPassword] = useState('')

    const addUserHandler = (event) => {
        event.preventDefault();
    };

    const phoneChangeHandler = (event) => {
       setEnteredPhone(event.target.value) 
    };

    const passwordChangeHandler = (event) => {
        setEnteredPassword(event.target.value) 
     };

    return (
        <>
        <div>
            <p>Welcome Back!</p>
            <h6>Securely login into your Persent account</h6>
        </div>
        <form onSubmit={addUserHandler}>
            <label htmlFor="Phone / Email address">Phone / Email address</label>
            <input text="text" id="Phone / Email address" placeholder="Enter phone or email" onChange={phoneChangeHandler}></input>
            <label htmlFor="Password">Password</label>
            <input text="text" id="Password" placeholder="Enter password" onChange={passwordChangeHandler}></input>
            <button type="submit">Login</button>
        </form>
        </>
    )
};

export default Login
