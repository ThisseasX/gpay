import React from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import classes from './style.module.sass';

const DateInfo = ({ label, date }) =>
  date ? (
    <div className={classes.dateInfo}>
      <div className={classes.dateLabel}>{label}</div>
      <div className={classes.date}>
        {new Date(date._seconds * 1000).toLocaleDateString()}
      </div>
    </div>
  ) : (
    <div className={classes.request}>
      <Button variant={'contained'} color={'primary'}>
        Request
      </Button>
    </div>
  );

const Payment = ({ payment: { amount, requested, finalized } }) => (
  <Paper className={classes.paymentContainer}>
    <div className={classes.contentRow}>
      <div className={classes.amount}>{amount}€</div>
    </div>
    <div className={classes.dateRow}>
      <DateInfo label={'Requested'} date={requested} />
      <DateInfo label={'Accepted'} date={finalized} />
    </div>
  </Paper>
);

export default Payment;
