import _ from 'lodash';
import { TOKEN_IPINFO } from 'config/secrets';
import { nameDebug } from 'utils/logger';

const debug = nameDebug('market:redux:car-filter');

const SET = 'car-filter/SET';
const GET = 'car-filter/GET';
const LOADZIP_SUCCESS = 'car-filter/LOADZIP_SUCCESS';
const LOADZIP_FAIL = 'car-filter/LOADZIP_FAIL';
// Important! All filter inputs must be strings
const RADIUS = 'radius';

const initialState = {
  make: '',
  model: '',
  condition: '',
  yearStart: '',
  yearEnd: '',
  priceStart: '',
  priceEnd: '',
  sortKey: RADIUS,
  zip: '',
  limit: 30,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET:
      return state;
    case SET:
      return _.assign({}, state, action.result);
    case LOADZIP_SUCCESS:
      return {
        ...state,
        zip: action.result.postal,
      };
    case LOADZIP_FAIL:
      debug('FAILED dispatch get zip');
      return state;
    default:
      return state;
  }
}

export function setCarFilter(filterObject) {
  return {
    type: SET,
    result: filterObject,
  };
}

export function loadZipFromIP(ip) {
  debug(`dispatch get zip from IP ${ip}`);
  const formattedIP = ip || '';
  return {
    types: ['load zip from ip start', LOADZIP_SUCCESS, LOADZIP_FAIL],
    promise: (client) => client.get(`https://ipinfo.io/${formattedIP}?token=${TOKEN_IPINFO}`),
  };
}
