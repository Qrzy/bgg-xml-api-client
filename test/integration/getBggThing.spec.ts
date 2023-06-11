import { describe, expect, it } from 'vitest'
import { getBggThing } from '../../src/wrappers'

describe('getBggThing', () => {
  it('gets thing with given ID', async () => {
    const { data } = await getBggThing({ id: 6249 })
    expect(data).toHaveProperty('item')
    expect(data.item).toBeInstanceOf(Object)
    expect(data.item.type).toEqual('boardgame')
  })

  it('gets thing with list of IDs', async () => {
    const { data } = await getBggThing({ id: [6249, 202976] })
    expect(data).toHaveProperty('item')
    expect(data.item).toBeInstanceOf(Array)
    expect(data.item[0].type).toEqual('boardgame')
    expect(data.item[1].type).toEqual('boardgameexpansion')
  })

  it('gets thing with given ID and type', async () => {
    const { data } = await getBggThing({ id: 6249, type: 'boardgame' })
    expect(data).toHaveProperty('item')
    expect(data.item).toBeInstanceOf(Object)
    expect(data.item.type).toEqual('boardgame')
  })

  it('gets thing with list of IDs and types', async () => {
    const { data } = await getBggThing({ id: [6249, 202976], type: ['boardgame', 'boardgameexpansion'] })
    expect(data).toHaveProperty('item')
    expect(data.item).toBeInstanceOf(Array)
    expect(data.item[0].type).toEqual('boardgame')
    expect(data.item[1].type).toEqual('boardgameexpansion')
  })
})
