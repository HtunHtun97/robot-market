import ShopActionTypes from './shop.types';

const INITIAL_STATE = {
  robots: [],
  isFetching: false,
  errorMessage: undefined,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_ROBOT_START:
      return {
        ...state,
        isFetching: true,
      };
    case ShopActionTypes.FETCH_ROBOT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        robots: action.payload,
      };
    case ShopActionTypes.FETCH_ROBOT_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
