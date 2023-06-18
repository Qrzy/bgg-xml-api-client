import { describe, expect, it } from 'vitest'
import { getBggThing } from '../../src/wrappers'

describe('getBggThing', () => {
  it('gets thing with given ID', async () => {
    const response = await getBggThing({ id: 6249 })
    expect(response.items).toHaveProperty('item')
    expect(response.items.item).toBeInstanceOf(Object)
    expect(response.items.item.type).toEqual('boardgame')
  })

  it('gets thing with list of IDs', async () => {
    const response = await getBggThing({ id: [6249, 202976] })
    expect(response.items).toHaveProperty('item')
    expect(response.items.item).toBeInstanceOf(Array)
    expect(response.items.item[0].type).toEqual('boardgame')
    expect(response.items.item[1].type).toEqual('boardgameexpansion')
  })

  it('gets thing with given ID and type', async () => {
    const response = await getBggThing({ id: 6249, type: 'boardgame' })
    expect(response.items).toHaveProperty('item')
    expect(response.items.item).toBeInstanceOf(Object)
    expect(response.items.item.type).toEqual('boardgame')
  })

  it('gets thing with list of IDs and types', async () => {
    const response = await getBggThing({ id: [6249, 202976], type: ['boardgame', 'boardgameexpansion'] })
    expect(response.items).toHaveProperty('item')
    expect(response.items.item).toBeInstanceOf(Array)
    expect(response.items.item[0].type).toEqual('boardgame')
    expect(response.items.item[1].type).toEqual('boardgameexpansion')
  })
})
