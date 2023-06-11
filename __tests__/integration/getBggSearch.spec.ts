import { getBggSearch } from '../../src/wrappers'

describe('getBggSearch', () => {
  it('gets search with given term', async () => {
    jest.setTimeout(60000)
    const { data } = await getBggSearch({ query: 'alhambra' })
    expect(data).toHaveProperty('item')
    expect(data.item).toBeInstanceOf(Array)
  })

  it('gets search with given term and type', async () => {
    jest.setTimeout(60000)
    const { data } = await getBggSearch({ query: 'alhambra', type: 'boardgame' })
    expect(data).toHaveProperty('item')
    expect(data.item).toBeInstanceOf(Array)
  })

  it('gets search with given term and types list', async () => {
    jest.setTimeout(60000)
    const { data } = await getBggSearch({ query: 'alhambra', type: ['boardgame', 'boardgameexpansion'] })
    expect(data).toHaveProperty('item')
    expect(data.item).toBeInstanceOf(Array)
  })
})
