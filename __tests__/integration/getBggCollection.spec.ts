import { getBggCollection } from '../../src/wrappers';

describe('getBggCollection', () => {
  it('gets collection with given username', async () => {
    jest.setTimeout(60000);
    const { data } = await getBggCollection({ username: 'Qrzy88' });
    expect(data).toHaveProperty('item');
    expect(data.item).toBeInstanceOf(Array);
  });

  it('gets collection with given ID', async () => {
    jest.setTimeout(60000);
    const { data } = await getBggCollection({ username: 'Qrzy88', id: 173346 });
    expect(data).toHaveProperty('item');
    expect(data.item).toBeInstanceOf(Object);
  });

  it('gets collection with list of IDs', async () => {
    jest.setTimeout(60000);
    const { data } = await getBggCollection({ username: 'Qrzy88', id: [173346, 202976] });
    expect(data).toHaveProperty('item');
    expect(data.item).toBeInstanceOf(Array);
    expect(data.item.length).toEqual(2);
  });
});
