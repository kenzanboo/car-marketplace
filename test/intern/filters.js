/* eslint-disable object-shorthand */
/* eslint-disable no-undef */

const STAGING_URL = 'https://staging.prodigycars.com';
const LOCAL_URL = 'http://localhost:4000/';
const FIND_TIMEOUT = 30000;
const IMPLICIT_WAIT_TIMEOUT = 10000;

const openProdigy = (remote) => {
  const env = process.env.NODE_ENV;
  const baseUrl = env === 'local' ? LOCAL_URL : STAGING_URL;
  const loadPage = remote
    .get(require.toUrl(baseUrl))
    .setFindTimeout(FIND_TIMEOUT)
    .setTimeout('implicit', IMPLICIT_WAIT_TIMEOUT);
  return loadPage;
};


const IPINFO_WAIT = 2000;
const NETWORK_WAIT = 500;
const UI_WAIT = 300;
define([
  'intern!object',
  'intern/chai!expect',
], (registerSuite, expect) => {
  registerSuite({
    name: 'demo',
    'run through the whole app and change filters': function () {
      return openProdigy(this.remote)
        .findByCssSelector('h1')
          .getVisibleText().then((text) => {
            expect(text.toLowerCase()).to.contain('car');
          }).end()
        // Click from home page to car-list
        .findByCssSelector('#new-car-link').click().end()
        // Integration test with ipInfo
        .sleep(IPINFO_WAIT)
        .findByCssSelector('input#zip')
          .getSpecAttribute('value').then((text) => {
            expect(text.toLowerCase()).to.exist; // this only works from our office IP
          }).end()

        // Filter yearStart
        .findByCssSelector('#desktop-filter input#yearStart').click().pressKeys('\uE010\uE003\uE003\uE003\uE003')
          .pressKeys('2017').end()
        .findByCssSelector('#desktop-filter #apply-filter').click().end()
        .sleep(NETWORK_WAIT)
        .findByCssSelector('.car-name')
          .getVisibleText().then((text) => {
            expect(text).to.contain('2017');
          }).end()
        // Filter price
        .findByCssSelector('#desktop-filter input#priceStart').click().pressKeys('\uE010\uE003\uE003\uE003\uE003')
          .pressKeys('19000').end()
        .findByCssSelector('#desktop-filter input#priceEnd').click().pressKeys('\uE010\uE003\uE003\uE003\uE003')
          .pressKeys('19999').end()
        .findByCssSelector('#desktop-filter #apply-filter').click().end()
        .sleep(NETWORK_WAIT)
        .findByCssSelector('.total-price')
          .getVisibleText().then((text) => {
            expect(text).to.contain('$19');
          }).end()
        // Clear price end
        .findByCssSelector('#desktop-filter input#priceEnd').click().pressKeys('\uE010\uE003\uE003\uE003\uE003\uE003').end()
        // Filter Make
        .findByCssSelector('#desktop-filter #make>div').click().end()
        .sleep(UI_WAIT)
        .findByCssSelector('#make-Ford>div>div>div').click().end()
        .sleep(NETWORK_WAIT)
        .findByCssSelector('#desktop-filter #model>div').click().end()
        .sleep(UI_WAIT)
        .findByCssSelector('#model-Fusion>div>div>div').click().end()
        .findByCssSelector('.car-name')
          .getVisibleText().then((text) => {
            expect(text).to.contain('Ford');
          }).end()
        .sleep(NETWORK_WAIT)
        .findByCssSelector('.car-link').click().end()


        .sleep(1000) // for visual confirmation
        ;
    },
  });
});
