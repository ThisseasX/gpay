import React from 'react';
import { Main } from 'components';
import classes from './style.module.sass';

const App = () => (
  <div className={classes.appContainer}>
    <div className={classes.title}>G-Pay</div>
    <Main />
  </div>
);

export default App;
