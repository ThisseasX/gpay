import React from 'react';
import classes from './style.module.sass';

const Debt = ({ debt: { id, amount } }) => (
  <div className={classes.debtContainer}>
    <span className={classes.amount}>Remaining: {amount}€</span>
  </div>
);

export default Debt;
