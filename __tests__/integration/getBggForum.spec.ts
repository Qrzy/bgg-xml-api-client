import { describe, expect, it } from 'vitest'
import { getBggForum } from '../../src/wrappers'

describe('getBggForum', () => {
  it('gets forum with given ID', async () => {
    const { data } = await getBggForum({ id: 19 })
    expect(data).toHaveProperty('title')
    expect(data).toHaveProperty('threads')
    expect(data.threads.thread).toBeInstanceOf(Array)
  })
})
