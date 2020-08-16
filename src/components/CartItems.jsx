import React from 'react';

import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

import DelSVG from '../assets/DelSVG';

import { connect } from 'react-redux';
import {
  addItemCart,
  removeItemCart,
  deleteCart,
} from '../redux/counterActions';

const CartItems = ({
  id,
  addItemCart,
  removeItemCart,
  deleteCart,
  cartCount,
}) => {
  return (
    <div className="cartbar-box__item d-flex mb-3 justify-content-center">
      <Badge
        variant={cartCount[id].count > 0 ? 'primary' : 'warning'}
        className="ml-3 "
      >
        {' '}
        {cartCount[id].count}
      </Badge>
      <Button
        onClick={() => addItemCart(id)}
        variant="secondary"
        className="ml-3 d-flex"
      >
        Increase
      </Button>
      <Button
        onClick={() => removeItemCart(id)}
        variant="secondary"
        className="ml-3 d-flex"
      >
        Decrease
      </Button>
      <Button
        onClick={() => deleteCart(id)}
        variant="danger"
        className="ml-3 d-flex"
      >
        <DelSVG className="dec-svg mr-1" />
        Delete
      </Button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItemCart: (id) => dispatch(addItemCart(id)),
  removeItemCart: (id) => dispatch(removeItemCart(id)),
  deleteCart: (id) => dispatch(deleteCart(id)),
});
const mapStateToProps = (state) => ({
  cartCount: state.count,
});
export default connect(mapStateToProps, mapDispatchToProps)(CartItems);
