import {
  FETCH_SUCCESS,
  FETCH_FAILURE,
  FETCH_REQUEST,
} from '../actions/action';

const INITIAL_STATE = {
  carItem: [],
  loading: false,
  error: null,
};

const CarItemReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        carItem: action.payload,
      };
    case FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default CarItemReducer;
