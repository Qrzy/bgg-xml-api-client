import { getBggHot } from '../../../src/wrappers';
import bggXmlApiClient from '../../../src/client';

jest.mock('../../../src/client');

describe('getBggHot', () => {
  it('gets hot', async () => {
    jest.setTimeout(60000);
    await getBggHot({ type: 'boardgame' });
    expect(bggXmlApiClient.get).toHaveBeenCalledWith('hot', { type: 'boardgame' });
  });
});
