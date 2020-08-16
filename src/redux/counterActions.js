import counterTypes from './counterTypes';

export const addItemCart = (id) => ({
  type: counterTypes.INCREASE,
  payload: id,
});
export const removeItemCart = (id) => ({
  type: counterTypes.DECREASE,
  payload: id,
});

export const deleteCart = (id) => ({
  type: counterTypes.DELETE,
  payload: id,
});
