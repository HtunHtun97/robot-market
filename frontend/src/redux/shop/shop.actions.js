import ShopActionTypes from './shop.types';
import axios from '../../axios-robot';
export const fetchRobotStart = () => ({
  type: ShopActionTypes.FETCH_ROBOT_START,
});

export const fetchRobotSuccess = (robotMap) => ({
  type: ShopActionTypes.FETCH_ROBOT_SUCCESS,
  payload: robotMap,
});

export const fetchRobotFailure = (errorMessage) => ({
  type: ShopActionTypes.FETCH_ROBOT_FAILURE,
  payload: errorMessage,
});

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    dispatch(fetchRobotStart());
    axios
      .get('/api/robots')
      .then((res) => {
        dispatch(fetchRobotSuccess(res.data.data));
      })
      .catch((error) => dispatch(fetchRobotFailure(error.message)));
  };
};
