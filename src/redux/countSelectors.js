import { createSelector } from 'reselect';

const selectCount = (state) => state.count;

export const selectTotalCarts = createSelector(
  [selectCount],
  (count) => count.total
);
export const selectCartItem1 = createSelector(
  [selectCount],
  (count) => count.cartItem1
);
export const selectCartItem2 = createSelector(
  [selectCount],
  (count) => count.cartItem2
);
export const selectCartItem3 = createSelector(
  [selectCount],
  (count) => count.cartItem4
);
export const selectCartItem4 = createSelector(
  [selectCount],
  (count) => count.cartItem4
);

export const selectTotalItemsInAllCarts = createSelector(
  [selectCount],
  (count) =>
    count.total.reduce((acc, currVal) => {
      return acc + count[currVal]['count'];
    }, 0)
);
