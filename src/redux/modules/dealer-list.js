const LOAD = 'dealer-list/LOAD';
const LOAD_SUCCESS = 'dealer-list/LOAD_SUCCESS';
const LOAD_FAIL = 'dealer-list/LOAD_FAIL';

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
    default:
      return state;
  }
}

export function isDealerListLoaded(globalState) {
  return globalState.dealerList && globalState.dealerList.loaded;
}

export function load() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: (client) => client.get('/dealers/all'), // params not used, just shown as demonstration
  };
}
