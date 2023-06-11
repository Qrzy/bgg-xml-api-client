import { describe, expect, it } from 'vitest'
import { getBggHot } from '../../src/wrappers'

describe('getBggHot', () => {
  it('gets hot', async () => {
    const { data } = await getBggHot({ type: 'boardgame' })
    expect(data).toHaveProperty('item')
    expect(data.item).toBeInstanceOf(Array)
  })
})
