import React from 'react';

import CartItems from './CartItems';

import Button from 'react-bootstrap/Button';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectTotalCarts } from '../redux/countSelectors';
import { resetCarts } from '../redux/counterActions';

const CartBar = ({ totalCarts, resetCarts }) => {
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
        <CartItems key={el} id={el} />
      ))}
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  resetCarts: () => dispatch(resetCarts()),
});

const mapStateToProps = createStructuredSelector({
  totalCarts: selectTotalCarts,
});
export default connect(mapStateToProps, mapDispatchToProps)(CartBar);
