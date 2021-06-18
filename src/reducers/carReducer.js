import {
  FETCH_CAR_REQUEST,
  FETCH_CAR_SUCCESS,
  FETCH_CAR_FAILURE,
} from '../actions/action';

const INITIAL_STATE = {
  cars: [],
  loading: false,
  error: null,
};

const carReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_CAR_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_CAR_SUCCESS:
      return {
        ...state,
        loading: false,
        cars: action.payload,
      };
    case FETCH_CAR_FAILURE:
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
