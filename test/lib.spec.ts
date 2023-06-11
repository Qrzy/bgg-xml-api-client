import { describe, expect, it } from 'vitest'
import {
  getBggCollection,
  getBggFamily,
  getBggForum,
  getBggForumlist,
  getBggGeeklist,
  getBggGuild,
  getBggHot,
  getBggPlays,
  getBggSearch,
  getBggThing,
  getBggThread,
  getBggUser,
} from '../dist'

describe('bggXmlApiClient client wrappers', () => {
  describe('getBggCollection', () => {
    it('gets collection with given username', async () => {
      const { data } = await getBggCollection({ username: 'Qrzy88' })

      expect(Number.parseInt((data as any).totalitems, 10)).toBeGreaterThan(200)
    })

    it('gets collection with given ID', async () => {
      const { data } = await getBggCollection({ username: 'Qrzy88', id: 173346 })

      expect(Number.parseInt((data as any).totalitems, 10)).toEqual(1)
    })

    it('gets collection with list of IDs', async () => {
      const { data } = await getBggCollection({ username: 'Qrzy88', id: [173346, 202976] })

      expect(Number.parseInt((data as any).totalitems, 10)).toEqual(2)
    })
  })

  describe('getBggFamily', () => {
    it('gets family with given ID', async () => {
      const { data } = await getBggFamily({ id: 12210 })

      expect((data as any).item.name.value).toEqual('Mechanism: 4X')
    })

    it('gets family with list of IDs', async () => {
      const { data } = await getBggFamily({ id: [12210, 17552] })

      expect((data as any).item[0].name.value).toEqual('Mechanism: 4X')

      expect((data as any).item[1].name.value).toEqual('Game: 7 Wonders')
    })
  })

  describe('getBggForum', () => {
    it('gets forum with given ID', async () => {
      const { data } = await getBggForum({ id: 19 })

      expect((data as any).title).toEqual('General Gaming')
    })
  })

  describe('getBggForumlist', () => {
    it('gets forumlist with given ID', async () => {
      const { data } = await getBggForumlist({ id: 13, type: 'thing' } as any)

      expect(Array.isArray((data as any).forum)).toBe(true)
    })
  })

  describe('getBggGeeklist', () => {
    it('gets geeklist with given ID', async () => {
      const { data } = await getBggGeeklist({ id: 272940, comments: 1 })

      expect((data as any).title).toEqual('#36,5 Polski MatHandel (Polish Math Trade)')
    })
  })

  describe('getBggGuild', () => {
    it('gets guild with given ID', async () => {
      const { data } = await getBggGuild({ id: 1497 })

      expect((data as any).name).toEqual('#boardgames')
    })
  })

  describe('getBggHot', () => {
    it('gets hot', async () => {
      const { data } = await getBggHot({ type: 'boardgame' })

      expect(Array.isArray((data as any).item)).toBe(true)
    })
  })

  describe('getBggPlays', () => {
    it('gets plays with given username', async () => {
      const { data } = await getBggPlays({ username: 'Qrzy88' })

      expect((data as any).username).toEqual('Qrzy88')

      expect((data as any).userid).toEqual('1381959')
    })

    it('throws when necessary params are not given', async () => {
      expect(() => getBggPlays({})).toThrowError()
      expect(() => getBggPlays({ type: 'thing' })).toThrowError()
      expect(() => getBggPlays({ id: 1 })).toThrowError()
    })
  })

  describe('getBggSearch', () => {
    it('gets search with given term', async () => {
      const { data } = await getBggSearch({ query: 'alhambra' })

      expect(Array.isArray((data as any).item)).toBe(true)
    })

    it('gets search with given term and type', async () => {
      const { data } = await getBggSearch({ query: 'alhambra', type: 'boardgame' })

      expect(Array.isArray((data as any).item)).toBe(true)
    })

    it('gets search with given term and types list', async () => {
      const { data } = await getBggSearch({ query: 'alhambra', type: ['boardgame', 'boardgameexpansion'] })

      expect(Array.isArray((data as any).item)).toBe(true)
    })
  })

  describe('getBggThing', () => {
    it('gets thing with given ID', async () => {
      const { data } = await getBggThing({ id: 6249 })

      expect((data as any).item.type).toEqual('boardgame')
    })

    it('gets thing with list of IDs', async () => {
      const { data } = await getBggThing({ id: [6249, 202976] })

      expect((data as any).item[0].type).toEqual('boardgame')

      expect((data as any).item[1].type).toEqual('boardgameexpansion')
    })

    it('gets thing with given ID and type', async () => {
      const { data } = await getBggThing({ id: 6249, type: 'boardgame' })

      expect((data as any).item.type).toEqual('boardgame')
    })

    it('gets thing with list of IDs and types', async () => {
      const { data } = await getBggThing({ id: [6249, 202976], type: ['boardgame', 'boardgameexpansion'] })

      expect((data as any).item[0].type).toEqual('boardgame')

      expect((data as any).item[1].type).toEqual('boardgameexpansion')
    })
  })

  describe('getBggThread', () => {
    it('gets thread with given ID', async () => {
      const { data } = await getBggThread({ id: 2427564 })

      expect((data as any).subject).toEqual('where to buy?')
    })
  })

  describe('getBggUser', () => {
    it('gets user with given name', async () => {
      const { data } = await getBggUser({ name: 'Qrzy88' })

      expect((data as any).id).toEqual('1381959')
    })
  })
})
