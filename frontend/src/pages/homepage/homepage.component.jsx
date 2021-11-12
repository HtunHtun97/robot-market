import React from 'react';
import { connect } from 'react-redux';

import { fetchRobotStart } from '../../redux/shop/shop.actions';
import CollectionPageContainer from '../collection/collection.container';

class HomePage extends React.Component {
  componentDidMount() {
    const { onFetchRobotStart } = this.props;
    onFetchRobotStart();
  }
  render() {
    return (
      <div className='shop-page'>
        <CollectionPageContainer />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onFetchRobotStart: () => dispatch(fetchRobotStart()),
});

export default connect(null, mapDispatchToProps)(HomePage);
