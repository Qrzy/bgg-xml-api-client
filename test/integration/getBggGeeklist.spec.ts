import { describe, expect, it } from 'vitest'
import { getBggGeeklist } from '../../src/wrappers'

describe('getBggGeeklist', () => {
  it('gets geeklist with given ID', async () => {
    const response = await getBggGeeklist({ id: 272940, comments: 1 }, { authorizationKey: import.meta.env.VITE_BGG_API_KEY || '' })
    expect(response).toHaveProperty('item')
    expect(response.item).toBeInstanceOf(Array)
  })
})
