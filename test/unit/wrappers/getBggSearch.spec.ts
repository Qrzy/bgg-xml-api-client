import { describe, expect, it, vi } from 'vitest'
import { getBggSearch } from '../../../src/wrappers'
import bggXmlApiClient from '../../../src/client'

vi.mock('../../../src/client')

describe('getBggSearch', () => {
  it('gets search with given term', async () => {
    await getBggSearch({ query: 'alhambra' }, { authorizationKey: 'test-key' })
    expect(bggXmlApiClient.get).toHaveBeenCalledWith('search', { query: 'alhambra' }, { authorizationKey: 'test-key' })
  })

  it('gets search with given term and type', async () => {
    await getBggSearch({ query: 'alhambra', type: 'boardgame' }, { authorizationKey: 'test-key' })
    expect(bggXmlApiClient.get).toHaveBeenCalledWith('search', { query: 'alhambra', type: 'boardgame' }, { authorizationKey: 'test-key' })
  })

  it('gets search with given term and types list', async () => {
    await getBggSearch({ query: 'alhambra', type: ['boardgame', 'boardgameexpansion'] }, { authorizationKey: 'test-key' })
    expect(bggXmlApiClient.get).toHaveBeenCalledWith('search', {
      query: 'alhambra',
      type: 'boardgame,boardgameexpansion',
    }, { authorizationKey: 'test-key' })
  })
})
