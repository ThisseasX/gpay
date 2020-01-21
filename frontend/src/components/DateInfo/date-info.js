import React from 'react';
import { Button, Typography, Box } from '@material-ui/core';

const DateInfo = ({ label, date }) =>
  date ? (
    <Box py={1} px={2}>
      <Typography align={'center'} color={'textSecondary'}>
        {label}
      </Typography>
      <Typography align={'center'}>
        {new Date(date._seconds * 1000).toLocaleDateString()}
      </Typography>
    </Box>
  ) : (
    <Box py={1} px={2}>
      <Button variant={'contained'} color={'primary'}>
        Request
      </Button>
    </Box>
  );

export default DateInfo;
