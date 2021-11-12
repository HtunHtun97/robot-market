export const addItemToCart = (cartItems, cartItemToAdd) => {
  let cartObj = {};

  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.name === cartItemToAdd.name
  );

  if (existingCartItem) {
    let updatedCarts = cartItems.map((cartItem) =>
      cartItem.name === cartItemToAdd.name
        ? {
            ...cartItem,
            quantity: cartItem.quantity + 1,
            stock: cartItem.stock - 1,
          }
        : cartItem
    );
    return Object.assign(
      { ...cartObj },
      { cartItems: [...updatedCarts], errorMesg: '' }
    );
  } else {
    if (cartItems.length + 1 > 5) {
      return Object.assign(
        { ...cartObj },
        {
          cartItems: [...cartItems],
          errorMesg: 'Sorry, you added 5 different robots to cart',
        }
      );
    } else {
      return Object.assign(
        { ...cartObj },
        {
          cartItems: [
            ...cartItems,
            { ...cartItemToAdd, quantity: 1, stock: cartItemToAdd.stock - 1 },
          ],
          errorMesg: '',
        }
      );
    }
  }
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.name === cartItemToRemove.name
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(
      (cartItem) => cartItem.name !== cartItemToRemove.name
    );
  }

  return cartItems.map((cartItem) =>
    cartItem.name === cartItemToRemove.name
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
