import {
  BOOKED_REQUEST,
  BOOKED_SUCCESS,
  BOOKED_FAILURE,
} from '../actions/action';

const INITIAL_STATE = {
  message: [],
  loading: false,
  error: null,
};

const bookedReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case BOOKED_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case BOOKED_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload,
      };
    case BOOKED_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  };
};

export default bookedReducer;