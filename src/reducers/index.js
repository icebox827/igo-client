import { combineReducer } from 'redux';
import userReducer from './userReducer';
import carReducer from './carReducer';
import bookedCarReducer from './bookedCarReducer';
import CarItemReducer from './carItemReducer';

const allReducers = combineReducer({
  users: userReducer,
  cars: carReducer,
  carItem: CarItemReducer,
  bookedCar: bookedCarReducer,
});

export default allReducers;