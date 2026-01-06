import { describe, expect, it } from 'vitest'
import { getBggSearch } from '../../src/wrappers'

describe('getBggSearch', () => {
  it('gets search with given term', async () => {
    const response = await getBggSearch({ query: 'alhambra' }, { authorizationKey: import.meta.env.VITE_BGG_API_KEY || '' })
    expect(response).toHaveProperty('item')
    expect(response.item).toBeInstanceOf(Array)
  })

  it('gets search with given term and type', async () => {
    const response = await getBggSearch({ query: 'alhambra', type: 'boardgame' }, { authorizationKey: import.meta.env.VITE_BGG_API_KEY || '' })
    expect(response).toHaveProperty('item')
    expect(response.item).toBeInstanceOf(Array)
  })

  it('gets search with given term and types list', async () => {
    const response = await getBggSearch({ query: 'alhambra', type: ['boardgame', 'boardgameexpansion'] }, { authorizationKey: import.meta.env.VITE_BGG_API_KEY || '' })
    expect(response).toHaveProperty('item')
    expect(response.item).toBeInstanceOf(Array)
  })
})
