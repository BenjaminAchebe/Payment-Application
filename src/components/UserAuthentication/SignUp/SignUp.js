import React, { useState, useEffect } from "react";
import SignUpQuote from "../../UI/AuthenticationQuote/SignUpQuote";
import classes from "./SignUp.module.css";


const SignUp = () => {
    const [enteredBusinessName, setEnteredBusinessName] = useState("");
    const [enteredFirstName, setEnteredFirstName] = useState("");
    const [enteredLastName, setEnteredLastName] = useState("");
    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredPhoneNumber, setEnteredPhoneNumber] = useState("");
    const [enteredPassword, setEnteredPassword] = useState("");
  
  
    async function signUpHandler (event) {
      event.preventDefault();
      try {
        const response = await fetch("http://ec2-34-238-76-176.compute-1.amazonaws.com/api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            "name": enteredBusinessName,
            "email": enteredEmail,
            "phone_number": enteredPhoneNumber,
            "password": enteredPassword,
          }),
        });
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.log(error);
        // console.error(error);
      }
    }
    
    useEffect(() => {
      signUpHandler();
    });
    const BusinessNameHandler = (event) => {
      setEnteredBusinessName(event.target.value)
    };
  
    const firstNameHandler = (event) => {
      setEnteredFirstName(event.target.value)
    };

    const lastNameHandler = (event) => {
      setEnteredLastName(event.target.value)
    };

    const emailHandler = (event) => {
      setEnteredEmail(event.target.value)
    };

    const phoneNumberHandler = (event) => {
      setEnteredPhoneNumber(event.target.value)
    };

    const passwordHandler = (event) => {
      setEnteredPassword(event.target.value)
    };
  

  return (
    <>
      <div className={classes.container}>
        <h1 className={classes.container__header}>Register your account</h1>
        <form onSubmit={signUpHandler}>
          <div className={classes.container__BusinessName}>
            <label
              className={classes["container__BusinessName--label"]}
              htmlFor="text"
            >
              Business Name
              <span className={classes["container__BusinessName--span"]}>
                *
              </span>
            </label>
            <input
              className={classes["container__BusinessName--input"]}
              type="text"
              id="text"
              placeholder="Enter text"
              required
              value={enteredBusinessName}
              onChange={BusinessNameHandler}
            />
          </div>
          <div className={classes.container__firstname}>
            <label
              className={classes["container__firstname--label"]}
              htmlFor="text"
            >
              First Name
              <span className={classes["container__firstname--span"]}>*</span>
            </label>
            <input
              className={classes["container__firstname--input"]}
              type="text"
              id="text"
              placeholder="Enter firstname"
              required
              value={enteredFirstName}
              onChange={firstNameHandler}
            />
          </div>
          <div className={classes.container__lastname}>
            <label
              className={classes["container__lastname--label"]}
              htmlFor="text"
            >
              Last Name
              <span className={classes["container__lastname--span"]}>*</span>
            </label>
            <input
              className={classes["container__lastname--input"]}
              type="text"
              id="text"
              placeholder="Enter lastname"
              required
              value={enteredLastName}
              onChange={lastNameHandler}
            />
          </div>
          <div className={classes.container__email}>
            <label
              className={classes["container__email--label"]}
              htmlFor="email"
            >
              Email <span className={classes["container__email--span"]}>*</span>
            </label>
            <input
              className={classes["container__email--input"]}
              type="email"
              id="email"
              placeholder="Enter email address"
              required
              value={enteredEmail}
              onChange={emailHandler}
            />
          </div>
          <div className={classes.container__phonenumber}>
            <label
              className={classes["container__phonenumber--label"]}
              htmlFor="number"
            >
              Phone Number
              <span className={classes["container__phonenumber--span"]}>*</span>
            </label>
            <input
              className={classes["container__phonenumber--input"]}
              type="number"
              id="number"
              placeholder="2347036448000"
              required
              value={enteredPhoneNumber}
              onChange={phoneNumberHandler}
            />
          </div>
          <div className={classes.container__password}>
            <label
              className={classes["container__password--label"]}
              htmlFor="password"
            >
              Create Password
              <span className={classes["container__password--span"]}>*</span>
            </label>
            <input
              className={classes["container__password--input"]}
              type="password"
              id="password"
              placeholder="........"
              required
              value={enteredPassword}
              onChange={passwordHandler}
            />
          </div>
          <div>
            <label className={classes.container__checkbox}>
              <input
                className={classes["container__checkbox--input"]}
                type="checkbox"
              />
              <span className={classes["container__checkbox--span"]}>
                I consent to the collection and processing of my personal data
                in line with the data regulations as described in Persent's
                <a href="/" className={classes["container__label--link"]}>
                  Privacy Policy
                </a>
              </span>
            </label>
          </div>
          <button className={classes.container__button} type="submit">
            Sign Up
          </button>
          <div className={classes["container__terms"]}>
            <p>
              By clicking the “Sign up” button, you agree to Persent's{" "}
              <a href="/" className={classes["container__terms--span"]}>Terms.</a>
            </p>
          </div>
          <div>
            <p className={classes.container__signup}>
              Already a user?{" "}
              <a href='/'className={classes["container__signup--link"]}>Login</a>
            </p>
          </div>
        </form>
      </div>
      <SignUpQuote/>
    </>
  );
};

export default SignUp;
