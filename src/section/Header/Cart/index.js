import React from 'react';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import useStyles from './styles';

const Cart = () => {
  const classes = useStyles();

  return (
    <div className={classes.cartContainer}>
      <div>
        <ShoppingCartIcon />
      </div>
      <div>
        empty
      </div>
    </div>
  )
};

export default Cart;
