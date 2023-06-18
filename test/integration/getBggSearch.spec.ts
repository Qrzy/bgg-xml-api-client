import { describe, expect, it } from 'vitest'
import { getBggSearch } from '../../src/wrappers'

describe('getBggSearch', () => {
  it('gets search with given term', async () => {
    const response = await getBggSearch({ query: 'alhambra' })
    expect(response.items).toHaveProperty('item')
    expect(response.items.item).toBeInstanceOf(Array)
  })

  it('gets search with given term and type', async () => {
    const response = await getBggSearch({ query: 'alhambra', type: 'boardgame' })
    expect(response.items).toHaveProperty('item')
    expect(response.items.item).toBeInstanceOf(Array)
  })

  it('gets search with given term and types list', async () => {
    const response = await getBggSearch({ query: 'alhambra', type: ['boardgame', 'boardgameexpansion'] })
    expect(response.items).toHaveProperty('item')
    expect(response.items.item).toBeInstanceOf(Array)
  })
})
