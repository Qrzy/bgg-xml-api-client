import { describe, expect, it } from 'vitest'
import { getBggThread } from '../../src/wrappers'

describe('getBggThread', () => {
  it('gets thread with given ID', async () => {
    const response = await getBggThread({ id: 2427564 })
    expect(response.thread).toHaveProperty('subject')
    expect(response.thread.subject).toEqual('where to buy?')
  })
})
