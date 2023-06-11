import { describe, expect, it, vi } from 'vitest'
import { getBggSearch } from '../../../src/wrappers'
import bggXmlApiClient from '../../../src/client'

vi.mock('../../../src/client')

describe('getBggSearch', () => {
  it('gets search with given term', async () => {
    await getBggSearch({ query: 'alhambra' })
    expect(bggXmlApiClient.get).toHaveBeenCalledWith('search', { query: 'alhambra' })
  })

  it('gets search with given term and type', async () => {
    await getBggSearch({ query: 'alhambra', type: 'boardgame' })
    expect(bggXmlApiClient.get).toHaveBeenCalledWith('search', { query: 'alhambra', type: 'boardgame' })
  })

  it('gets search with given term and types list', async () => {
    await getBggSearch({ query: 'alhambra', type: ['boardgame', 'boardgameexpansion'] })
    expect(bggXmlApiClient.get).toHaveBeenCalledWith('search', {
      query: 'alhambra',
      type: 'boardgame,boardgameexpansion',
    })
  })
})
