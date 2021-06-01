import {
FETCH_USERS_REQUEST,
FETCH_USERS_SUCCESS,
FETCH_USERS_FAILURE,
FETCH_CARS_REQUEST,
FETCH_CARS_FAILURE,
FETCH_BOOKED_CARS_REQUEST,
FETCH_BOOKED_CARS_SUCCESS,
FETCH_BOOKED_CARS_FAILURE,
FETCH_CAR_ITEM_SUCCESS,
FETCH_CAR_ITEM_FAILURE,
FETCH_CAR_ITEM_REQUEST,
FETCH_CARS_SUCCESS,
} from './action';

const fetchUser = () => async(dispatch) => {
  dispatch({ type: FETCH_USERS_REQUEST });

  try {
    const response = await fetch('https://igo-api.herokuapp.com/api/v1/users');
    const data = await response.json();
    dispatch({ type: FETCH_USERS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ FETCH_USERS_FAILURE, payload: error });
  }
};

const fetchCar = () => async(dispatch) => {
  dispatch({ type: FETCH_CARS_REQUEST });

  try {
    const response = await fetch('https://igo-api.herokuapp.com/api/v1/cars');
    const data = await response.json();
    dispatch({ type: FETCH_CARS_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: FETCH_CARS_FAILURE, payload: error })
  }
};

export { fetchUser, fetchCar };