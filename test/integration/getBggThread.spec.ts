import { describe, expect, it } from 'vitest'
import { getBggThread } from '../../src/wrappers'

describe('getBggThread', () => {
  it('gets thread with given ID', async () => {
    const response = await getBggThread({ id: 2427564 }, { authorizationKey: import.meta.env.VITE_BGG_API_KEY || '' })
    expect(response).toHaveProperty('subject')
    expect(response.subject).toEqual('where to buy?')
  })
})
