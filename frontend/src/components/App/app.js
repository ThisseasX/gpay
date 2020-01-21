import React from 'react';
import { theme } from 'style';
import { Main } from 'components';
import {
  ThemeProvider,
  CssBaseline,
  Grid,
  Typography,
  Box,
} from '@material-ui/core';

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Box pt={4} clone>
      <Grid container direction={'column'} alignItems={'center'}>
        <Typography variant={'h1'} gutterBottom>
          G-Pay
        </Typography>
        <Main />
      </Grid>
    </Box>
  </ThemeProvider>
);

export default App;
