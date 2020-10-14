import { getBggGeeklist } from '../../../src/wrappers';
import bggXmlApiClient from '../../../src/client';

jest.mock('../../../src/client');

describe('getBggGeeklist', () => {
  it('gets geeklist with given ID', async () => {
    jest.setTimeout(60000);
    await getBggGeeklist({ id: 272940, comments: 1 });
    expect(bggXmlApiClient.get).toHaveBeenCalledWith('geeklist', { id: 272940, comments: 1 });
  });
});
