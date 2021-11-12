import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

export const selectRobots = createSelector([selectShop], (shop) => shop.robots);

export const selectIsRobotFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);

export const selectIsRobotLoaded = createSelector(
  [selectShop],
  (shop) => !!shop.robots.length > 0
);
