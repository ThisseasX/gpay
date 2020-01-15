import React, { useState, useEffect } from 'react';
import { socket } from 'services';
import { Payment, Debt } from 'components';
import classes from './style.module.sass';

const Main = () => {
  const [debt, setDebt] = useState(0);
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    socket.on('PAYMENTS_FETCHED', payload => {
      setPayments(payload);
    });

    socket.on('DEBT_FETCHED', payload => {
      setDebt(payload);
    });

    socket.emit('FETCH_PAYMENTS');
    socket.emit('FETCH_DEBT');
  }, []);

  return (
    <div className={classes.mainContainer}>
      <Debt debt={debt} />
      {payments.map(payment => (
        <Payment key={payment.id} payment={payment} />
      ))}
    </div>
  );
};

export default Main;
