import superagent from 'superagent';
import config from '../config';
import { nameDebug } from 'utils/logger';

const methods = ['get', 'post', 'put', 'patch', 'del'];
const debug = nameDebug('market:helpers:apiclient');

function formatUrl(path) {
  if (path.indexOf('//') >= 0) { // full url
    return path;
  }
  const adjustedPath = path[0] !== '/' ? `/${path}` : path;
  if (__SERVER__) {
    // Prepend host and port of the API server to the path.
    return `http://${config.apiHost}:${config.apiPort}${adjustedPath}`;
  }
  // Prepend `/api` to relative URL, to proxy to API server.
  return `/api${adjustedPath}`;
}

export default class ApiClient {
  constructor(req) {
    methods.forEach((method) => // eslint-disable-line
      this[method] = (path, { params, data } = {}) => new Promise((resolve, reject) => {
        const formattedUrl = formatUrl(path);
        const request = superagent[method](formattedUrl);
        debug(`${formattedUrl}, ${params}, ${data}`);
        request.accept('json'); // Prodigy added this here from original template code.

        if (params) {
          request.query(params);
        }

        if (__SERVER__ && req.get('cookie')) {
          request.set('cookie', req.get('cookie'));
        }

        if (data) {
          request.send(data);
        }
        request.end((err, res = {}) => {
          if (err) {
            return reject(res.body || err);
          }
          return resolve(res.body);
        });
      }));
  }
  /*
   * There's a V8 bug where, when using Babel, exporting classes with only
   * constructors sometimes fails. Until it's patched, this is a solution to
   * "ApiClient is not defined" from issue #14.
   * https://github.com/erikras/react-redux-universal-hot-example/issues/14
   *
   * Relevant Babel bug (but they claim it's V8): https://phabricator.babeljs.io/T2455
   *
   * Remove it at your own risk.
   */
  empty() {}
}
