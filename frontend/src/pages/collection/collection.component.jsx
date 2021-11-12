import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectRobots } from '../../redux/shop/shop.selectors';

import {
  CollectionPageContainer,
  CollectionItemsContainer,
} from './collection.styles';

const CollectionPage = ({ items }) => {
  return (
    <CollectionPageContainer>
      <CollectionItemsContainer>
        {items.map((item, index) => (
          <CollectionItem key={index} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  items: selectRobots,
});

export default connect(mapStateToProps)(CollectionPage);
