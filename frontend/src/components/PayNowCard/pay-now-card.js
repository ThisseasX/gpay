import React, { useState, useEffect, memo } from 'react';
import { Paper, Button, Grid, Typography, Box, Slider } from '@material-ui/core';

const PayNowCard = ({ debt, handleSubmit }) => {
  const [payAmount, setPayAmount] = useState(debt);

  useEffect(() => {
    setPayAmount(Math.min(50, Math.ceil(debt / 2)));
  }, [debt]);

  const handleChange = (_, v) => {
    setPayAmount(v);
  };

  const handleClick = () => {
    handleSubmit(payAmount);
  };

  return (
    <Box border={1} clone>
      <Paper>
        <Box py={1} px={2} borderBottom={1}>
          <Typography color={'secondary'} align={'center'} variant={'h3'}>
            {payAmount}€
          </Typography>
          <Slider
            onChange={handleChange}
            value={payAmount}
            color={'secondary'}
            min={1}
            max={200}
          />
        </Box>
        <Grid container>
          <Grid container item xs justify={'center'} alignItems={'center'}>
            <Button
              style={{
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
              }}
              fullWidth
              variant={'contained'}
              color={'primary'}
              onClick={handleClick}
            >
              Pay
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default memo(PayNowCard);
