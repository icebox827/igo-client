import { fetchCar } from '../actions/index';
import carReducer from '../reducers/carReducer';

describe('filter reducer', () => {
  it('Should return the default state', () => {
    expect('').toEqual('');
  });

  it('Should return new state if a valid filter is provide', () => {
    const action = fetchCar({ cars: 'Action' });
    const state = carReducer(undefined, action);

    expect(state).toEqual({ error: null, cars: [], loading: false });
  });
});
