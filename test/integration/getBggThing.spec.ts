import { describe, expect, it } from 'vitest'
import { getBggThing } from '../../src/wrappers'

// TODO: get rid of **any**

describe('getBggThing', () => {
  it('gets thing with given ID', async () => {
    const response = await getBggThing({ id: 6249 }, { authorizationKey: import.meta.env.VITE_BGG_API_KEY || '' })
    expect(response).toHaveProperty('item')
    expect(response.item).toBeInstanceOf(Object)
    expect((response.item as any).type).toEqual('boardgame')
  })

  it('gets thing with list of IDs', async () => {
    const response = await getBggThing({ id: [6249, 202976] }, { authorizationKey: import.meta.env.VITE_BGG_API_KEY || '' })
    expect(response).toHaveProperty('item')
    expect(response.item).toBeInstanceOf(Array)
    expect((response.item as Array<any>)[0].type).toEqual('boardgame')
    expect((response.item as Array<any>)[1].type).toEqual('boardgameexpansion')
  })

  it('gets thing with given ID and type', async () => {
    const response = await getBggThing({ id: 6249, type: 'boardgame' }, { authorizationKey: import.meta.env.VITE_BGG_API_KEY || '' })
    expect(response).toHaveProperty('item')
    expect(response.item).toBeInstanceOf(Object)
    expect((response.item as any).type).toEqual('boardgame')
  })

  it('gets thing with list of IDs and types', async () => {
    const response = await getBggThing({ id: [6249, 202976], type: ['boardgame', 'boardgameexpansion'] }, { authorizationKey: import.meta.env.VITE_BGG_API_KEY || '' })
    expect(response).toHaveProperty('item')
    expect(response.item).toBeInstanceOf(Array)
    expect((response.item as Array<any>)[0].type).toEqual('boardgame')
    expect((response.item as Array<any>)[1].type).toEqual('boardgameexpansion')
  })
})
