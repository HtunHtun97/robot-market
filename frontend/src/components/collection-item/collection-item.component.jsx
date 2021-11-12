import moment from 'moment';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Swal from 'sweetalert2';

import { addItem, clearError } from '../../redux/cart/cart.actions';
import {
  selectCartItems,
  selectErrorMesg,
} from '../../redux/cart/cart.selectors';
import { selectRobots } from '../../redux/shop/shop.selectors';

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer,
  Description,
} from './collection-styles.styles';

const CollectionItem = ({
  cartItems,
  items,
  item,
  addItem,
  errorMesg,
  clearError,
}) => {
  useEffect(() => {
    showErrorMesg(errorMesg);
  }, [errorMesg]);

  const showErrorMesg = (errorMesg) => {
    if (errorMesg) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: errorMesg,
        confirmButtonColor: '#3085d6',
      });
    }
  };

  const addItemToCart = async (item) => {
    await clearError();
    const cartItem = cartItems.find((i) => i.name === item.name);
    const robot = items.find((i) => i.name === item.name);
    if ((cartItem && cartItem.stock < 1) || (robot && robot.stock < 1)) {
      showErrorMesg('This item is out of stock');
    } else {
      items.filter((i) => {
        if (i.name === item.name) {
          i.stock -= 1;
        }
        return i;
      });
      await addItem(item);
    }
  };

  const { name, price, material, stock, createdAt, image: imageUrl } = item;

  return (
    <CollectionItemContainer>
      <BackgroundImage className='image' imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>฿{price}</PriceContainer>
      </CollectionFooterContainer>
      <Description className='desc'>
        Material - {material} <br />
        Available - {stock} <br />
        Created At - {moment(createdAt).format('DD-MM-YYYY')}
      </Description>
      <AddButton onClick={() => addItemToCart(item)} inverted>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  errorMesg: selectErrorMesg,
  cartItems: selectCartItems,
  items: selectRobots,
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  clearError: () => dispatch(clearError()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionItem);
