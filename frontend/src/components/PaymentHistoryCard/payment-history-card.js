import React, { memo } from 'react';
import { DateInfo } from 'components';
import { Paper, Grid, Typography, Box } from '@material-ui/core';

const PaymentHistoryCard = ({
  payment: { amount = 0, requested = {}, finalized = {} } = {},
}) => (
  <Box border={1} clone>
    <Paper>
      <Box py={1} px={2} borderBottom={1}>
        <Typography align={'center'} variant={'h4'}>
          {amount}€
        </Typography>
      </Box>
      <Grid container>
        <Box borderRight={1} clone>
          <Grid item xs>
            <DateInfo label={'Requested'} date={requested} />
          </Grid>
        </Box>
        <Grid container item xs justify={'center'} alignItems={'center'}>
          <DateInfo label={'Accepted'} date={finalized} />
        </Grid>
      </Grid>
    </Paper>
  </Box>
);

export default memo(PaymentHistoryCard);
