import { getBggCollection } from '../../../src/wrappers';
import bggXmlApiClient from '../../../src/client';

jest.mock('../../../src/client');

describe('getBggCollection', () => {
  it('passes given username', async () => {
    await getBggCollection({ username: 'user' });
    expect(bggXmlApiClient.get).toHaveBeenCalledWith('collection', { username: 'user' });
  });

  it('passes given ID', async () => {
    await getBggCollection({ username: 'user', id: 123 });
    expect(bggXmlApiClient.get).toHaveBeenCalledWith('collection', { username: 'user', id: 123 });
  });

  it('passes given array of IDs', async () => {
    await getBggCollection({ username: 'user', id: [123, 456, 789] });
    expect(bggXmlApiClient.get).toHaveBeenCalledWith('collection', { username: 'user', id: '123,456,789' });
  });
});
