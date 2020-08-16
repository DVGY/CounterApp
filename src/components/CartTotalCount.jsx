import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectTotalItemsInAllCarts } from '../redux/countSelectors';

import CartSVG from '../assets/CartSVG';

const CartTotalCount = ({ totalItemsInAllCarts }) => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      className="mb-3 mx-0 mx-sm-auto navbar-cart"
    >
      <Navbar.Brand className="mx-auto">
        <CartSVG className="cart-svg mr-3" /> {totalItemsInAllCarts}
      </Navbar.Brand>
    </Navbar>
  );
};
const mapStateToProps = createStructuredSelector({
  totalItemsInAllCarts: selectTotalItemsInAllCarts,
});

export default connect(mapStateToProps)(CartTotalCount);
