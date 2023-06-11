import { describe, expect, it } from 'vitest'
import { getBggThread } from '../../src/wrappers'

describe('getBggThread', () => {
  it('gets thread with given ID', async () => {
    const { data } = await getBggThread({ id: 2427564 })
    expect(data).toHaveProperty('subject')
    expect(data.subject).toEqual('where to buy?')
  })
})
