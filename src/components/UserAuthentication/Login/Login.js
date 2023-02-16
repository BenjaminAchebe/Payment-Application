import React, { useState, useEffect } from "react";
import LoginQuote from "../../UI/AuthenticationQuote/LoginQuote";
import classes from "./Login.module.css";

const Login = () => {
  const [enteredPhone, setEnteredPhone] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");


  async function loginHandler (event) {
    event.preventDefault();
    try {
      const response = await fetch("http://ec2-34-238-76-176.compute-1.amazonaws.com/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "email": enteredPhone,
          "password": enteredPassword,
        }),
      });
      const data = await response.json();
    } catch (error) {
      console.error(error);
    }
  }
  
  const setPhoneEmailHandler = (event) => {
    setEnteredPhone(event.target.value)
  };

  const setPasswordHandler = (event) => {
    setEnteredPassword(event.target.value)
  };
  

  return (
    <>
      <div className={classes.container}>
        <h1 className={classes.container__header}>Welcome Back!</h1>
        <h6 className={classes.container__subheader}>
          Securely login into your Persent account
        </h6>
        <form onSubmit={loginHandler}>
          <div className={classes.container__email}>
            <label
              className={classes["container__email--label"]}
              htmlFor="text"
            >
              Phone / Email address{" "}
              <span className={classes["container__email--span"]}>*</span>
            </label>
            <input
              className={classes["container__email--input"]}
              type="text"
              id="text"
              placeholder="Enter phone or email"
              required
              value={enteredPhone}
              onChange={setPhoneEmailHandler}
            />
          </div>
          <div className={classes.container__password}>
            <label
              className={classes["container__password--label"]}
              htmlFor="password"
            >
              Password{" "}
              <span className={classes["container__password--span"]}>*</span>
            </label>
            <input
              className={classes["container__password--input"]}
              type="password"
              id="password"
              placeholder="Enter password"
              required
              value={enteredPassword}
              onChange={setPasswordHandler}
            />
          </div>
          <div>
            <label className={classes.container__checkbox}>
              <input
                className={classes["container__checkbox--input"]}
                type="checkbox"
              />
              Remember me
            </label>
            <a className={classes.container__passwordCheck}>Forgot Password?</a>
          </div>
          <button className={classes.container__button} type="submit">
            Login
          </button>
          <div>
            <p className={classes.container__signup}>
              Don't have an account?{" "}
              <a className={classes["container__signup--link"]}>Sign Up</a>
            </p>
          </div>
        </form>
      </div>
      <LoginQuote/>
    </>
  );
};

export default Login;
