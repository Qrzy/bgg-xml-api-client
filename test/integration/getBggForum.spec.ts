import { describe, expect, it } from 'vitest'
import { getBggForum } from '../../src/wrappers'

describe('getBggForum', () => {
  it('gets forum with given ID', async () => {
    const response = await getBggForum({ id: 19 })
    expect(response.forum).toHaveProperty('title')
    expect(response.forum).toHaveProperty('threads')
    expect(response.forum.threads.thread).toBeInstanceOf(Array)
  })
})
