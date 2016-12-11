import { expect } from 'chai';
import ApiClient from 'helpers/ApiClient';

describe('api client', () => {
  it('should get an external url (zip for an ip) correctly', () => {
    const client = new ApiClient();
    return client.get('http://ipinfo.io/8.8.8.8').then((data) => {
      expect(data.postal).to.eql('94035');
    });
  });
});
