import { getBggSearch } from '../../../src/wrappers';
import bggXmlApiClient from '../../../src/client';

jest.mock('../../../src/client');

describe('getBggSearch', () => {
  it('gets search with given term', async () => {
    jest.setTimeout(60000);
    await getBggSearch({ query: 'alhambra' });
    expect(bggXmlApiClient.get).toHaveBeenCalledWith('search', { query: 'alhambra' });
  });

  it('gets search with given term and type', async () => {
    jest.setTimeout(60000);
    await getBggSearch({ query: 'alhambra', type: 'boardgame' });
    expect(bggXmlApiClient.get).toHaveBeenCalledWith('search', { query: 'alhambra', type: 'boardgame' });
  });

  it('gets search with given term and types list', async () => {
    jest.setTimeout(60000);
    await getBggSearch({ query: 'alhambra', type: ['boardgame', 'boardgameexpansion'] });
    expect(bggXmlApiClient.get).toHaveBeenCalledWith('search', {
      query: 'alhambra',
      type: 'boardgame,boardgameexpansion',
    });
  });
});
