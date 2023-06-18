import { describe, expect, it } from 'vitest'
import { getBggGeeklist } from '../../src/wrappers'

describe('getBggGeeklist', () => {
  it('gets geeklist with given ID', async () => {
    const response = await getBggGeeklist({ id: 272940, comments: 1 })
    expect(response.geeklist).toHaveProperty('item')
    expect(response.geeklist.item).toBeInstanceOf(Array)
  })
})
