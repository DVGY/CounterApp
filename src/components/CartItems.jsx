import React from 'react';
import Badge from 'react-bootstrap/Badge';

import Button from 'react-bootstrap/Button';

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
    <div className="cartbar-box__item d-flex mb-3">
      <Badge
        variant={cartCount[id].count > 0 ? 'primary' : 'warning'}
        className="ml-3"
      >
        {' '}
        {cartCount[id].count}
      </Badge>
      <Button
        onClick={() => addItemCart(id)}
        variant="secondary"
        className="ml-3"
      >
        Increase
      </Button>
      <Button
        onClick={() => removeItemCart(id)}
        variant="secondary"
        className="ml-3"
      >
        Decrease
      </Button>
      <Button onClick={() => deleteCart(id)} variant="danger" className="ml-3">
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
