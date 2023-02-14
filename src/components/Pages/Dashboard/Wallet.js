import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import classes from './Wallet.module.css';

const Wallet = () => {
  return (
    <div className={classes.container}>
    <nav>
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/send">Send</Link>
        </li>
        <li>
          <Link to="/wallet">Wallet</Link>
        </li>
        <li>
          <Link to="/beneficiary">Beneficiary</Link>
        </li>
        <li>
          <Link to="/transactions">Transactions</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
      </ul>
    </nav>
    </div>
  );
};

export default Wallet