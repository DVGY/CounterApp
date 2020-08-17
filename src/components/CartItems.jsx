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
  cartCount1,
  cartCount2,
  cartCount3,
  cartCount4,
}) => {
  return (
    <div className="cartbar-box__item d-flex mb-3 justify-content-center">
      {console.log('Rendering inside cartItems.jsx')}

      {id === 'cartItem1' && (
        <Badge
          variant={cartCount1.count > 0 ? 'primary' : 'warning'}
          className="ml-1 ml-sm-3 "
        >
          {' '}
          {cartCount1.count}
        </Badge>
      )}
      {id === 'cartItem2' && (
        <Badge
          variant={cartCount2.count > 0 ? 'primary' : 'warning'}
          className="ml-1 ml-sm-3 "
        >
          {' '}
          {cartCount2.count}
        </Badge>
      )}
      {id === 'cartItem3' && (
        <Badge
          variant={cartCount3.count > 0 ? 'primary' : 'warning'}
          className="ml-1 ml-sm-3 "
        >
          {' '}
          {cartCount3.count}
        </Badge>
      )}
      {id === 'cartItem4' && (
        <Badge
          variant={cartCount4.count > 0 ? 'primary' : 'warning'}
          className="ml-1 ml-sm-3 "
        >
          {' '}
          {cartCount4.count}
        </Badge>
      )}

      <Button
        onClick={() => addItemCart(id)}
        variant="secondary"
        className=" ml-1 ml-sm-3 d-flex"
      >
        Increase
      </Button>
      <Button
        onClick={() => removeItemCart(id)}
        variant="secondary"
        className="ml-1 ml-sm-3 d-flex"
      >
        Decrease
      </Button>
      <Button
        onClick={() => deleteCart(id)}
        variant="danger"
        className="ml-1 ml-sm-3 d-flex"
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
  cartCount1: state.count.cartItem1,
  cartCount2: state.count.cartItem2,
  cartCount3: state.count.cartItem3,
  cartCount4: state.count.cartItem4,
});
export default connect(mapStateToProps, mapDispatchToProps)(CartItems);
