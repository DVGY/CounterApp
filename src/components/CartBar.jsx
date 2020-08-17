import React from 'react';

import CartItems from './CartItems';

import Button from 'react-bootstrap/Button';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectTotalCarts } from '../redux/countSelectors';
import { resetCarts } from '../redux/counterActions';
import {
  selectCartItem1,
  selectCartItem2,
  selectCartItem3,
  selectCartItem4,
} from '../redux/countSelectors';

const CartBar = ({
  totalCarts,
  resetCarts,
  cartCount1,
  cartCount2,
  cartCount3,
  cartCount4,
}) => {
  return (
    <div className="cartbar-box d-flex flex-column">
      <Button
        onClick={() => resetCarts()}
        variant="primary"
        className="mb-3  align-self-center"
      >
        Reset Carts
      </Button>
      {totalCarts.map((el) => (
        <CartItems
          key={el}
          id={el}
          cartCount={
            el === 'cartItem1'
              ? cartCount1
              : el === 'cartItem2'
              ? cartCount2
              : el === 'cartItem3'
              ? cartCount3
              : cartCount4
          }
        />
      ))}
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  resetCarts: () => dispatch(resetCarts()),
});

const mapStateToProps = createStructuredSelector({
  totalCarts: selectTotalCarts,
  cartCount1: selectCartItem1,
  cartCount2: selectCartItem2,
  cartCount3: selectCartItem3,
  cartCount4: selectCartItem4,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartBar);
