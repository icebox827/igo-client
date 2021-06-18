import { combineReducers } from 'redux';
import carReducer from './carReducer';
import bookedCarReducer from './bookedCarReducer';
import CarItemReducer from './carItemReducer';

const allReducers = combineReducers({
  cars: carReducer,
  carItem: CarItemReducer,
  bookedCar: bookedCarReducer,
});

export default allReducers;
