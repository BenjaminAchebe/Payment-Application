import React from "react";
import classes from "./SuccessModal.module.css";
import certificate from "../../Assets/Icons/certificate.svg";
import check from "../../Assets/Icons/check.svg";

const SuccessModal = () => {
  return (
    <>
      <div className={classes.heading__message}>
        <p>Transfer Successful</p>
      </div>
      <div className={classes.container__successs}>
        <img
          className={classes["container__successs--certificate"]}
          src={certificate}
        />
        <img className={classes["container__successs--check"]} src={check} />
        <h3 className={classes.container__messsage}>
          Congratulations your transfer is successful
        </h3>
        <h6 className={classes.container__summary}>
          Below is transfer summary
        </h6>
        <div className={classes["container__summary--outline"]}>
          <div className={classes["container__summary--label1"]}>
            <label>Withdrawal amount</label>
            <div>N 500000</div>
          </div>
          <div className={classes["container__summary--label2"]}>
            <label>Account Number</label>
            <div>06543356766</div>
          </div>
          <div className={classes["container__summary--label3"]}>
            <label>Name</label>
            <div>Marian Adeniran</div>
          </div>
          <div className={classes["container__summary--label4"]}>
            <label>Destination Bank</label>
            <div>Access Bank</div>
          </div>
        </div>
      </div>
      <button className={classes.button}>Done</button>
    </>
  );
};

export default SuccessModal;
