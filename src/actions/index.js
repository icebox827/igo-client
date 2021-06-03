import {
FETCH_CARS_REQUEST,
FETCH_CARS_SUCCESS,
FETCH_CARS_FAILURE,
FETCH_BOOKED_CARS_REQUEST,
FETCH_BOOKED_CARS_SUCCESS,
FETCH_BOOKED_CARS_FAILURE,
FETCH_CAR_ITEM_SUCCESS,
FETCH_CAR_ITEM_FAILURE,
FETCH_CAR_ITEM_REQUEST,
} from './action';

const baseURL = 'https://igo-api.herokuapp.com/api/v1';

const fetchCar = () => async(dispatch) => {
  dispatch({ type: FETCH_CARS_REQUEST });

  try {
    const response = await fetch(`${baseURL}/cars`);
    const data = await response.json();
    dispatch({ type: FETCH_CARS_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: FETCH_CARS_FAILURE, payload: error })
  }
};

const fetchCarItem = (id) => async(dispatch) => {
  dispatch({ type: FETCH_CAR_ITEM_REQUEST });

  try {
    const response = await fetch(`${baseURL}/cars/${id}`);
    const data = response.json();
    dispatch({ type: FETCH_CAR_ITEM_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_CAR_ITEM_FAILURE, payload: error });
  }
};

export { fetchCar, fetchCarItem };