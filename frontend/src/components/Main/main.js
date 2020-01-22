import React, { useState, useEffect, useCallback } from 'react';
import { socket } from 'services';
import { PayNowCard, PaymentHistoryCard } from 'components';
import { Container, Grid, Typography, Divider, Box } from '@material-ui/core';

const Main = () => {
  const [debt, setDebt] = useState(0);
  const [payments, setPayments] = useState([]);

  const handleSubmit = useCallback(v => {
    console.log(v);
  }, []);

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

    setDebt(200);
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
          Remaining: {debt}€
        </Typography>
      </Box>
      <Box mt={4} mb={1}>
        <Typography align={'center'} variant={'h5'}>
          Pay now
        </Typography>
      </Box>
      <PayNowCard debt={debt} handleSubmit={handleSubmit} />
      <Box mt={4}>
        <Divider />
      </Box>
      <Box mt={2} mb={1}>
        <Typography align={'center'} variant={'h5'}>
          History
        </Typography>
      </Box>
      <Grid container direction={'column'} spacing={2} wrap={'nowrap'}>
        {payments.map(payment => (
          <Grid key={payment.id} item>
            <PaymentHistoryCard payment={payment} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Main;
