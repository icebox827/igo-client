import {
  FETCH_CARS_REQUEST,
  FETCH_CARS_SUCCESS,
  FETCH_CARS_FAILURE,
} from '../actions/action';

const INITIAL_STATE = {
  car: [],
  loading: false,
  error: null,
};

const carReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_CARS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_CARS_SUCCESS:
      return {
        ...state,
        loading: false,
        car: action.payload,
      };
    case FETCH_CARS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default carReducer;
