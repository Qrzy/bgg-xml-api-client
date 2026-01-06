import { describe, expect, it } from 'vitest'
import { getBggHot } from '../../src/wrappers'

describe('getBggHot', () => {
  it('gets hot', async () => {
    const response = await getBggHot({ type: 'boardgame' }, { authorizationKey: import.meta.env.VITE_BGG_API_KEY || '' })
    expect(response).toHaveProperty('item')
    expect(response.item).toBeInstanceOf(Array)
  })
})
