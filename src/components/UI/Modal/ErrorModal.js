import React from "react";
import classes from './ErrorModal.module.css';
import close from '../../Assets/Icons/close.svg';
import error from '../../Assets/Icons/error.svg';

const ErrorModal = () => {
    return(
        <div className={classes.background}>
        <div className={classes.container}>
          <img className={classes.container__close} src={close}/>
          <img className={classes.container__image} src={error} />
          <h4 className={classes.container__header}>Insufficient Fund</h4>
          <p className={classes.container__subheader}>You do not have sufficient balance in your wallet, add money to continue transaction</p>
        </div>
      </div>
    )
};

export default ErrorModal