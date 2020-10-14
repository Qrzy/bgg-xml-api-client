import { getBggThing } from '../../../src/wrappers';
import bggXmlApiClient from '../../../src/client';

jest.mock('../../../src/client');

describe('getBggThing', () => {
  it('gets thing with given ID', async () => {
    jest.setTimeout(60000);
    await getBggThing({ id: 6249 });
    expect(bggXmlApiClient.get).toHaveBeenCalledWith('thing', { id: 6249 });
  });

  it('gets thing with list of IDs', async () => {
    jest.setTimeout(60000);
    await getBggThing({ id: [6249, 202976] });
    expect(bggXmlApiClient.get).toHaveBeenCalledWith('thing', { id: '6249,202976' });
  });

  it('gets thing with given ID and type', async () => {
    jest.setTimeout(60000);
    await getBggThing({ id: 6249, type: 'boardgame' });
    expect(bggXmlApiClient.get).toHaveBeenCalledWith('thing', { id: 6249, type: 'boardgame' });
  });

  it('gets thing with list of IDs and types', async () => {
    jest.setTimeout(60000);
    await getBggThing({ id: [6249, 202976], type: ['boardgame', 'boardgameexpansion'] });
    expect(bggXmlApiClient.get).toHaveBeenCalledWith('thing', {
      id: '6249,202976',
      type: 'boardgame,boardgameexpansion',
    });
  });
});
