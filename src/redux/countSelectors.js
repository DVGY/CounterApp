import { createSelector } from 'reselect';

const selectCount = (state) => state.count;

export const selectTotalCarts = createSelector(
  [selectCount],
  (count) => count.total
);

export const selectTotalItemsInAllCarts = createSelector(
  [selectCount],
  (count) =>
    count.total.reduce((acc, currVal) => {
      return acc + count[currVal]['count'];
    }, 0)
);
