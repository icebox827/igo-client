import {
  FETCH_CAR_ITEM_REQUEST,
  FETCH_CAR_ITEM_SUCCESS,
  FETCH_CAR_ITEM_FAILURE,
} from '../actions/action';

const INITIAL_STATE = {
  carItem: [],
  loading: false,
  error: null,
};

const CarItemReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_CAR_ITEM_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_CAR_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        carItem: action.payload,
      };
    case FETCH_CAR_ITEM_FAILURE:
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
