import React from 'react';
import Button from '@material-ui/core/Button';

import useStyles from './styles';

const Login = () => {
  const classes = useStyles();

  return (
    <div>
      <Button className={classes.loginButton}>Register</Button>
      <Button className={classes.loginButton}>Sign In</Button>
    </div>
  )
};

export default Login;