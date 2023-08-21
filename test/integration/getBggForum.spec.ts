import { describe, expect, it } from 'vitest'
import { getBggForum } from '../../src/wrappers'

describe('getBggForum', () => {
  it('gets forum with given ID', async () => {
    const response = await getBggForum({ id: 19 })
    expect(response).toHaveProperty('title')
    expect(response).toHaveProperty('threads')
    expect(response.threads.thread).toBeInstanceOf(Array)
  })
})
