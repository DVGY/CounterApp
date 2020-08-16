import counterTypes from './counterTypes';

const INITIAL_STATE = {
  total: ['cartItem1', 'cartItem2', 'cartItem3', 'cartItem4'],
  cartItem1: {
    count: 0,
  },
  cartItem2: {
    count: 0,
  },
  cartItem3: {
    count: 0,
  },
  cartItem4: {
    count: 0,
  },
};
export const countReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case counterTypes.INCREASE:
      return {
        ...state,
        [action.payload]: { count: state[action.payload]['count'] + 1 },
      };
    case counterTypes.DECREASE:
      if (state[action.payload]['count'] > 0) {
        return {
          ...state,
          [action.payload]: {
            count: state[action.payload]['count'] - 1,
          },
        };
      } else {
        return { ...state };
      }
    case counterTypes.DELETE:
      const newState = { ...state };
      delete newState[action.payload];
      return {
        ...newState,
        total: state['total'].filter((el) => el !== action.payload),
      };
    case counterTypes.RESET:
      return {
        ...state,
        total: ['cartItem1', 'cartItem2', 'cartItem3', 'cartItem4'],
        cartItem1: {
          count: 0,
        },
        cartItem2: {
          count: 0,
        },
        cartItem3: {
          count: 0,
        },
        cartItem4: {
          count: 0,
        },
      };

    default:
      return state;
  }
};
export default countReducer;
