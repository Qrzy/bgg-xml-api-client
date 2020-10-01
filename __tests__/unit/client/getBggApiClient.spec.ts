import { getBggApiClient } from '../../../src/client/getBggApiClient';

describe('getBggApiClient', () => {
  it('throws when empty resource given', () => {
    expect(() => getBggApiClient('' as never)).toThrow();
  });

  it('returns client that transforms XML response to JSON', async () => {
    const client = getBggApiClient('user');
    const response = { data: '<root>some data</root>' };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data = await (client.interceptors.response as any).handlers[0].fulfilled(response);
    expect(data).toEqual({ data: { root: 'some data' } });
  });
});
