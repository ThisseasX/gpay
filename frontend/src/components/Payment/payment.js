import React from 'react';
import classes from './style.module.sass';

const Payment = ({ payment: { amount, requested, finalized } }) => (
  <div className={classes.paymentContainer}>
    <div className={classes.amount}>{amount}€</div>
    <div className={classes.amount}>
      {new Date(requested._seconds * 1000).toLocaleDateString()}
    </div>
  </div>
);

export default Payment;
