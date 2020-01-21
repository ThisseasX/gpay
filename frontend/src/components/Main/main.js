import React, { useState, useEffect } from 'react';
import { socket } from 'services';
import { Payment } from 'components';
import { Container, Grid, Typography, Box } from '@material-ui/core';

const Main = () => {
  const [debt, setDebt] = useState(0);
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    setPayments([
      // { amount: 50, requested: { _seconds: 1000 }, finalized: { _seconds: 1000 } },
      { id: '1', amount: 50, requested: { _seconds: 1000 } },
      {
        id: '2',
        amount: 50,
        requested: { _seconds: 1000 },
        finalized: { _seconds: 1000 },
      },
    ]);

    setDebt({ amount: 200 });
    // socket.on('PAYMENTS_FETCHED', payload => {
    //   setPayments(payload);
    // });

    // socket.on('DEBT_FETCHED', payload => {
    //   setDebt(payload);
    // });

    // socket.emit('FETCH_PAYMENTS');
    // socket.emit('FETCH_DEBT');
  }, []);

  return (
    <Container maxWidth={'xs'}>
      <Box px={2} mb={2}>
        <Typography align={'center'} variant={'h4'}>
          Remaining: {debt.amount}€
        </Typography>
      </Box>
      <Grid container direction={'column'} spacing={2}>
        {payments.map(payment => (
          <Grid item>
            <Payment key={payment.id} payment={payment} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Main;
