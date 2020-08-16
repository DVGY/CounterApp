import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectTotalItemsInAllCarts } from '../redux/countSelectors';

const CartTotalCount = ({ totalItemsInAllCarts }) => {
  return (
    <Navbar bg="dark" variant="dark" className="mb-5">
      <Navbar.Brand href="#home"> Counter: {totalItemsInAllCarts}</Navbar.Brand>
    </Navbar>
  );
};
const mapStateToProps = createStructuredSelector({
  totalItemsInAllCarts: selectTotalItemsInAllCarts,
});

export default connect(mapStateToProps)(CartTotalCount);
