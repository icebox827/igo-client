import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILURE,
} from './action';

const baseURL = 'https://igo-api.herokuapp.com/api/v1';

const fetchCar = () => async (dispatch) => {
  dispatch({ type: FETCH_REQUEST });

  try {
    const response = await fetch(`${baseURL}/cars`);
    const data = await response.json();
    dispatch({ type: FETCH_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_FAILURE, payload: error });
  }
};

const fetchCarItem = (id) => async (dispatch) => {
  dispatch({ type: FETCH_REQUEST });

  try {
    const response = await fetch(`${baseURL}/cars/${id}`);
    const data = await response.json();
    dispatch({ type: FETCH_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_FAILURE, payload: error });
  }
};

const fetchBookedcar = () => async (dispatch) => {
  dispatch({ type: FETCH_REQUEST });
  const userToken = (JSON.parse(sessionStorage.getItem('userToken')));

  try {
    const response = await fetch(`${baseURL}/booked_cars`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${userToken}`,
      },
    });
    const data = await response.json();
    dispatch({ type: FETCH_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_FAILURE, payload: error });
  }
};

export { fetchCar, fetchCarItem, fetchBookedcar };
