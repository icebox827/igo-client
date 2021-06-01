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

const baseURL = 'https://igo-api.herokuapp.com/api/v1';

const signin = async() => {
  const response = await fetch(`${baseURL}/sessions`, {
    headers: { 'Content-Type': 'application/json' },
    method: 'post',
    body: JSON.stringify({username}),
  })
    .then((res) => res.json())
    .then((data) => data);
  return response
};

const signup = async (credits) => {
  const response = await fetch(`${baseURL}/users`, {
    headers: { 'Content-Type': 'application/json' },
    method: 'post',
    body: JSON.stringify({ user: username }),
  })
    .then((res) => res.json())
    .then((data) => data);
  return response;
};

const fetchUser = () => async(dispatch) => {
  dispatch({ type: FETCH_USERS_REQUEST });

  try {
    const response = await fetch(`${baseURL}/users`);
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

export { fetchUser, fetchCar, signin, signup };