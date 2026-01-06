import { describe, expect, it } from 'vitest'
import { getBggGuild } from '../../src/wrappers'

describe('getBggGuild', () => {
  it('gets guild with given ID', async () => {
    const response = await getBggGuild({ id: 1497 }, { authorizationKey: import.meta.env.VITE_BGG_API_KEY || '' })
    expect(response).toHaveProperty('name')
    expect(response.name).toEqual('#boardgames')
  })
})
