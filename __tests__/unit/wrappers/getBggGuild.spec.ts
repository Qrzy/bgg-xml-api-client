import { getBggGuild } from '../../../src/wrappers';
import bggXmlApiClient from '../../../src/client';

jest.mock('../../../src/client');

describe('getBggGuild', () => {
  it('gets guild with given ID', async () => {
    jest.setTimeout(60000);
    await getBggGuild({ id: 1497 });
    expect(bggXmlApiClient.get).toHaveBeenCalledWith('guild', { id: 1497 });
  });
});
