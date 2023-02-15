import React from "react";
import classes from './Wallet.module.css';
import UserPix from '../../Assets/Images/Image and Alarm.svg';
import dashboard from '../../Assets/Icons/dashboard.svg';
import send from '../../Assets/Icons/send.svg';
import wallet from '../../Assets/Icons/wallet.svg';
import beneficiary from '../../Assets/Icons/beneficiary.svg';
import transaction from '../../Assets/Icons/transaction.svg';
import setting from '../../Assets/Icons/setting.svg';
import help from '../../Assets/Icons/help.svg';


const Wallet = () => {
  return (
    <>
    <div className={classes.container}>
    <nav className={classes.container__nav}>
      <ul className={classes['container__nav--ul']}>
        <li className={classes['container__nav--li']}>
          <a><img className={classes['container__nav--img']} src={dashboard}/>Dashboard</a>
        </li>
        <li className={classes['container__nav--li']}>
          <a><img className={classes['container__nav--img']} src={send}/>Send</a>
        </li>
        <li className={classes['container__nav--li']}>
          <a><img className={classes['container__nav--img']} src={wallet}/>Wallet</a>
        </li>
        <li className={classes['container__nav--li']}>
          <a><img className={classes['container__nav--img']} src={beneficiary}/>Beneficiary</a>
        </li>
        <li className={classes['container__nav--li']}>
          <a><img className={classes['container__nav--img']} src={transaction}/>Transactions</a>
        </li>
        <li className={classes['container__nav--li']}>
          <a><img className={classes['container__nav--img']} src={help}/>Get Help</a>
        </li>
        <li className={classes['container__nav--li']}>
          <a ><img className={classes['container__nav--img']} src={setting}/>Settings</a>
        </li>
      </ul>
    </nav>
    <div className={classes.container__topnav}>
      <button className={classes['container__topnav--button']}>+ Add Money</button>
      <img src={UserPix} alt="img" className={classes['container__topnav--image']}/>
    </div>
    </div>
    </>
  );
};

export default Wallet