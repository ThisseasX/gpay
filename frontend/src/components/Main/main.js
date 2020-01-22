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
      {
        id: '1',
        amount: 50,
        requested: { _seconds: new Date().valueOf() / 1000 },
        finalized: { _seconds: new Date().valueOf() / 1000 },
      },
      {
        id: '2',
        amount: 50,
        requested: { _seconds: new Date().valueOf() / 1000 },
        finalized: { _seconds: new Date().valueOf() / 1000 },
      },
    ]);

    setDebt(200);

    // Will unmock later
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
      <Box px={2} mb={2} textAlign={'center'}>
        <Typography
          align={'center'}
          color={'textSecondary'}
          variant={'h4'}
          component={'span'}
        >
          Remaining:&nbsp;
        </Typography>
        <Typography variant={'h3'} component={'span'}>
          {debt}€
        </Typography>
      </Box>
      <PayNowCard debt={debt} handleSubmit={handleSubmit} />
      <Box mt={4} mb={4}>
        <Grid container alignItems={'center'}>
          <Grid item xs>
            <Divider />
          </Grid>
          <Box px={2} clone>
            <Grid item>
              <Typography align={'center'} variant={'h5'}>
                History
              </Typography>
            </Grid>
          </Box>
          <Grid item xs>
            <Divider />
          </Grid>
        </Grid>
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
