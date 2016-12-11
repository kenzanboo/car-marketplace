import _ from 'lodash';
const LOAD = 'car-list/LOAD';
const LOAD_SUCCESS = 'car-list/LOAD_SUCCESS';
const LOAD_FAIL = 'car-list/LOAD_FAIL';

const LOAD_NEXT = 'car-list/LOAD_NEXT';
const LOAD_NEXT_SUCCESS = 'car-list/LOAD_NEXT_SUCCESS';
const LOAD_NEXT_FAIL = 'car-list/LOAD_NEXT_FAIL';

const CAR_FILTER_API = '/cars/filter';

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
    case LOAD_NEXT_SUCCESS:
      return {
        ...state,
        data: _.uniqBy(state.data.concat(action.result), 'id'),
      };
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        data: null,
        error: action.error,
      };

    default:
      return state;
  }
}

export function isLoaded(globalState) {
  return globalState.carList && globalState.carList.loaded && globalState.carFilter.zip;
}

export function loadNext({ filter, offset }) {
  const filtersWithOffset = _.assign({}, filter, { offset });
  return {
    types: [LOAD_NEXT, LOAD_NEXT_SUCCESS, LOAD_NEXT_FAIL],
    promise: (client) => client.get(CAR_FILTER_API, { params: filtersWithOffset }),
  };
}
export function load(filter) {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: (client) => client.get(CAR_FILTER_API, { params: filter }),
  };
}
