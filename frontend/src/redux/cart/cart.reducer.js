import CartActionTypes from './cart.types';
import { addItemToCart, removeItemFromCart } from './cart.utils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
  errorMesg: '',
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.ADD_ITEM:
      const { cartItems, errorMesg } = addItemToCart(
        state.cartItems,
        action.payload
      );
      return {
        ...state,
        cartItems: cartItems,
        errorMesg: errorMesg,
      };
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.name !== action.payload.name
        ),
      };
    case CartActionTypes.CLEAR_ERROR:
      return { ...state, errorMesg: '' };
    default:
      return state;
  }
};

export default cartReducer;
