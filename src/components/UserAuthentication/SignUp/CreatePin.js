import React, { useState, useEffect } from "react";
import classes from "./CreatePin.module.css";

const CreatePin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  return (
    <>
      <div className={classes.container}>
        <h1 className={classes.container__header}>Create PIN</h1>
        <p className={classes.container__subheader}>
          Transaction PIN is a 4-digit, which will be used to authorize your
          transactions
        </p>
        <div className={classes.container__shadow}>
          <form onSubmit={(event) => event.preventDefault()}>
            <div className={classes.container__pin}>
              <input
                className={classes["container__pin--password"]}
                type="password"
                maxlength="1"
                placeholder="*"
              />
              <input
                className={classes["container__pin--password"]}
                type="password"
                maxlength="1"
                placeholder="*"
              />
              <input
                className={classes["container__pin--password"]}
                type="password"
                maxlength="1"
                placeholder="*"
              />
              <input
                className={classes["container__pin--password"]}
                type="password"
                maxlength="1"
                placeholder="*"
              />
            </div>
            <div className={classes.container__content}>
              <p className={classes["container__content--message"]}>
                Provide your secret transaction pin
              </p>
              <button
                className={classes["container__content--button"]}
                type="submit"
              >
                Done
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreatePin;
