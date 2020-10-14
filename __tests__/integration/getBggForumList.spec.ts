import { getBggForumlist } from '../../src/wrappers';

describe('getBggForumlist', () => {
  it('gets forumlist with given ID', async () => {
    jest.setTimeout(60000);
    const { data } = await getBggForumlist({ id: 13, type: 'thing' });
    expect(data).toHaveProperty('forum');
    expect(data.forum).toBeInstanceOf(Array);
  });
});
