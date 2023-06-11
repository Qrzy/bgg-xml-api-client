import { describe, expect, it } from 'vitest'
import { getBggGeeklist } from '../../src/wrappers'

describe('getBggGeeklist', () => {
  it('gets geeklist with given ID', async () => {
    const { data } = await getBggGeeklist({ id: 272940, comments: 1 })
    expect(data).toHaveProperty('item')
    expect(data.item).toBeInstanceOf(Array)
  })
})
