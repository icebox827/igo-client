import { combineReducers } from 'redux';
import bookedReducer from './bookedReducer';
import carReducer from './carReducer';
import bookedCarReducer from './bookedCarReducer';
import CarItemReducer from './carItemReducer';

const allReducers = combineReducers({
  users: bookedReducer,
  cars: carReducer,
  carItem: CarItemReducer,
  bookedCar: bookedCarReducer,
});

export default allReducers;