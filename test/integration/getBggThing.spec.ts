import { describe, expect, it } from 'vitest'
import { getBggThing } from '../../src/wrappers'

describe('getBggThing', () => {
  it('gets thing with given ID', async () => {
    const response = await getBggThing({ id: 6249 })
    expect(response).toHaveProperty('item')
    expect(response.item).toBeInstanceOf(Object)
    expect(response.item.type).toEqual('boardgame')
  })

  it('gets thing with list of IDs', async () => {
    const response = await getBggThing({ id: [6249, 202976] })
    expect(response).toHaveProperty('item')
    expect(response.item).toBeInstanceOf(Array)
    expect(response.item[0].type).toEqual('boardgame')
    expect(response.item[1].type).toEqual('boardgameexpansion')
  })

  it('gets thing with given ID and type', async () => {
    const response = await getBggThing({ id: 6249, type: 'boardgame' })
    expect(response).toHaveProperty('item')
    expect(response.item).toBeInstanceOf(Object)
    expect(response.item.type).toEqual('boardgame')
  })

  it('gets thing with list of IDs and types', async () => {
    const response = await getBggThing({ id: [6249, 202976], type: ['boardgame', 'boardgameexpansion'] })
    expect(response).toHaveProperty('item')
    expect(response.item).toBeInstanceOf(Array)
    expect(response.item[0].type).toEqual('boardgame')
    expect(response.item[1].type).toEqual('boardgameexpansion')
  })
})
