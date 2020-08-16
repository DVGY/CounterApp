import React from 'react';

import CartItems from './CartItems';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectTotalCarts } from '../redux/countSelectors';

const CartBar = ({ totalCarts }) => {
  return (
    <div className="cartbar-box d-flex flex-column  ">
      {totalCarts.map((el) => (
        <CartItems key={el} id={el} />
      ))}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  totalCarts: selectTotalCarts,
});
export default connect(mapStateToProps)(CartBar);
