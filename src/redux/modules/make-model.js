const LOAD_MAKE = 'make-model/LOAD_MAKE';
const LOAD_MODEL = 'make-model/LOAD_MODEL';
const EMPTY_MODEL = 'make-model/EMPTY_MODEL';

const initialState = {
  availableMake: [],
  availableModel: [],
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_MAKE:
      return {
        ...state,
        availableMake: action.result,
      };
    case LOAD_MODEL:
      return {
        ...state,
        availableModel: action.result,
      };
    case EMPTY_MODEL:
      return {
        ...state,
        availableModel: [],
      };
    default:
      return state;
  }
}

export function isMakeLoaded(globalState) {
  return globalState.availableMake && globalState.availableMake.length > 0;
}

export function loadMake() {
  return {
    types: ['startload of make', LOAD_MAKE, ' make failed'],
    promise: (client) => client.get('/cars/makes'),
  };
}
export function loadModel(make) {
  if (make === '') {
    return {
      type: EMPTY_MODEL,
    };
  }
  return {
    types: ['startload of model', LOAD_MODEL, 'model failed'],
    promise: (client) => client.get(`/cars/models/${make}`),
  };
}
