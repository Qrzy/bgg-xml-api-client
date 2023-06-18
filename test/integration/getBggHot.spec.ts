import { describe, expect, it } from 'vitest'
import { getBggHot } from '../../src/wrappers'

describe('getBggHot', () => {
  it('gets hot', async () => {
    const response = await getBggHot({ type: 'boardgame' })
    expect(response.items).toHaveProperty('item')
    expect(response.items.item).toBeInstanceOf(Array)
  })
})
