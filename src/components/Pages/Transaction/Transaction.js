import React from "react";
import classes from "./Transaction.module.css";
import Notransaction from "../../Assets/Icons/no transaction.svg";

const Transaction = () => {
  return (
    <div className={classes.container__transaction}>
      <img src={Notransaction}></img>
    </div>
  );
};

export default Transaction;
