import { describe, expect, it } from 'vitest'
import { getBggSearch } from '../../src/wrappers'

describe('getBggSearch', () => {
  it('gets search with given term', async () => {
    const { data } = await getBggSearch({ query: 'alhambra' })
    expect(data).toHaveProperty('item')
    expect(data.item).toBeInstanceOf(Array)
  })

  it('gets search with given term and type', async () => {
    const { data } = await getBggSearch({ query: 'alhambra', type: 'boardgame' })
    expect(data).toHaveProperty('item')
    expect(data.item).toBeInstanceOf(Array)
  })

  it('gets search with given term and types list', async () => {
    const { data } = await getBggSearch({ query: 'alhambra', type: ['boardgame', 'boardgameexpansion'] })
    expect(data).toHaveProperty('item')
    expect(data.item).toBeInstanceOf(Array)
  })
})
