import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Currency from './Currency';
import Login from './Login';
import Cart from './Cart';

import useStyles from './styles';

const Header = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar variant="dense" className={classes.toolBar}>
          <Currency />
          <div className={classes.rightSection}>
            <Login />
            <Cart />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
