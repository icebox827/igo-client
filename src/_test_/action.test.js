import * as actions from '../actions/action';

describe('Evaluate carRequest',() => {
    it('should not return an empty object', () => {
      const action = actions.FETCH_CAR_REQUEST;
      expect(action).not.toBe('');
    });
    it('Should return car request', () => {
      const action = actions.FETCH_CARS_REQUEST;
      expect(action).toBe('FETCH_CARS_REQUEST');
    });
    it('Should return car success', () => {
      const action = actions.FETCH_CARS_SUCCESS;
      expect(action).toBe('FETCH_CARS_SUCCESS');
    });
    it('Should return car failure', () => {
      const action = actions.FETCH_CARS_FAILURE;
      expect(action).toBe('FETCH_CARS_FAILURE');
    });
  },
);

describe(
  'Evaluate reservationRequest',
  () => {
    it(
      'Should not be an empty object',
      () => {
        const action = actions.reservationRequest;
        expect(action).not.toBe('');
      },
    );
    it('Should return reservation request', () => {
      const action = actions.FETCH_BOOKED_CARS_REQUEST;
      expect(action).toBe('FETCH_BOOKED_CARS_REQUEST');
    });
    it('Should return reservation success', () => {
      const action = actions.FETCH_BOOKED_CARS_SUCCESS;
      expect(action).toBe('FETCH_BOOKED_CARS_SUCCESS');
    });
    it('Should return reservation failure', () => {
      const action = actions.FETCH_BOOKED_CARS_FAILURE;
      expect(action).toBe('FETCH_BOOKED_CARS_FAILURE');
    });
  },
);

describe(
  'Evaluate carDetailRequest',
  () => {
    it(
      'Should not be an empty object',
      () => {
        const action = actions.carDetailRequest;
        expect(action).not.toBe('');
      },
    );
    it('Should return car detail request', () => {
      const action = actions.FETCH_CAR_ITEM_REQUEST;
      expect(action).toBe('FETCH_CAR_ITEM_REQUEST');
    });
    it('Should return car detail success', () => {
      const action = actions.FETCH_CAR_ITEM_SUCCESS;
      expect(action).toBe('FETCH_CAR_ITEM_SUCCESS');
    });
    it('Should return car detail failure', () => {
      const action = actions.FETCH_CAR_ITEM_FAILURE;
      expect(action).toBe('FETCH_CAR_ITEM_FAILURE');
    });
  },
);
