const LOAD = 'car/LOAD';
const LOAD_SUCCESS = 'car/LOAD_SUCCESS';
const LOAD_FAIL = 'car/LOAD_FAIL';
const SET = 'car/SET';

const initialState = {
  loaded: false,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true,
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.result,
        error: null,
      };
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        data: null,
        error: action.error,
      };
    case SET:
      return {
        ...state,
        loaded: true,
        data: action.result,
      };
    default:
      return state;
  }
}

export function isLoaded(globalState, carId) {
  return globalState.car && globalState.car.loaded && globalState.car.data && globalState.car.data.id === carId;
}

export function load(carId) {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: (client) => client.get(`/cars/${carId}`),
  };
}

export function setCar(car) {
  return {
    type: SET,
    result: car,
  };
}
