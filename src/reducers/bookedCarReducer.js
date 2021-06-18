import {
  FETCH_BOOKED_CAR_REQUEST,
  FETCH_BOOKED_CAR_SUCCESS,
  FETCH_BOOKED_CAR_FAILURE,
} from '../actions/action';

const INITIAL_STATE = {
  bookedCar: [],
  loading: false,
  error: null,
};

const bookedCarReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_BOOKED_CAR_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_BOOKED_CAR_SUCCESS:
      return {
        ...state,
        loading: false,
        bookedCar: action.payload,
      };
    case FETCH_BOOKED_CAR_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default bookedCarReducer;
