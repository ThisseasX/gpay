import React, { memo } from 'react';
import { Typography, Box } from '@material-ui/core';

const DateInfo = ({ label, date }) => (
  <Box py={1} px={2}>
    <Typography align={'center'} color={'textSecondary'}>
      {label}
    </Typography>
    <Typography align={'center'}>
      {date ? new Date(date._seconds * 1000).toLocaleDateString() : 'Invalid Date'}
    </Typography>
  </Box>
);

export default memo(DateInfo);
