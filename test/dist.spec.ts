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
      const response = await getBggCollection({ username: 'Qrzy88' })
      expect(Number.parseInt(response.items.totalitems, 10)).toBeGreaterThan(200)
    })

    it('gets collection with given ID', async () => {
      const response = await getBggCollection({ username: 'Qrzy88', id: 173346 })
      expect(Number.parseInt(response.items.totalitems, 10)).toEqual(1)
    })

    it('gets collection with list of IDs', async () => {
      const response = await getBggCollection({ username: 'Qrzy88', id: [173346, 202976] })
      expect(Number.parseInt(response.items.totalitems, 10)).toEqual(2)
    })
  })

  describe('getBggFamily', () => {
    it('gets family with given ID', async () => {
      const response = await getBggFamily({ id: 12210 })
      expect(response.items.item.name.value).toEqual('Mechanism: 4X')
    })

    it('gets family with list of IDs', async () => {
      const response = await getBggFamily({ id: [12210, 17552] })
      expect(response.items.item[0].name.value).toEqual('Mechanism: 4X')
      expect(response.items.item[1].name.value).toEqual('Game: 7 Wonders')
    })
  })

  describe('getBggForum', () => {
    it('gets forum with given ID', async () => {
      const response = await getBggForum({ id: 19 })
      expect(response.forum.title).toEqual('General Gaming')
    })
  })

  describe('getBggForumlist', () => {
    it('gets forumlist with given ID', async () => {
      const response = await getBggForumlist({ id: 13, type: 'thing' } as any)
      expect(Array.isArray(response.forums.forum)).toBe(true)
    })
  })

  describe('getBggGeeklist', () => {
    it('gets geeklist with given ID', async () => {
      const response = await getBggGeeklist({ id: 272940, comments: 1 })
      expect(response.geeklist.title).toEqual('#36,5 Polski MatHandel (Polish Math Trade)')
    })
  })

  describe('getBggGuild', () => {
    it('gets guild with given ID', async () => {
      const response = await getBggGuild({ id: 1497 })
      expect(response.guild.name).toEqual('#boardgames')
    })
  })

  describe('getBggHot', () => {
    it('gets hot', async () => {
      const response = await getBggHot({ type: 'boardgame' })
      expect(Array.isArray(response.items.item)).toBe(true)
    })
  })

  describe('getBggPlays', () => {
    it('gets plays with given username', async () => {
      const response = await getBggPlays({ username: 'Qrzy88' })
      expect(response.plays.username).toEqual('Qrzy88')
      expect(response.plays.userid).toEqual(1381959)
    })

    it('throws when necessary params are not given', async () => {
      expect(() => getBggPlays({})).toThrowError()
      expect(() => getBggPlays({ type: 'thing' })).toThrowError()
      expect(() => getBggPlays({ id: 1 })).toThrowError()
    })
  })

  describe('getBggSearch', () => {
    it('gets search with given term', async () => {
      const response = await getBggSearch({ query: 'alhambra' })
      expect(Array.isArray(response.items.item)).toBe(true)
    })

    it('gets search with given term and type', async () => {
      const response = await getBggSearch({ query: 'alhambra', type: 'boardgame' })
      expect(Array.isArray(response.items.item)).toBe(true)
    })

    it('gets search with given term and types list', async () => {
      const response = await getBggSearch({ query: 'alhambra', type: ['boardgame', 'boardgameexpansion'] })
      expect(Array.isArray(response.items.item)).toBe(true)
    })
  })

  describe('getBggThing', () => {
    it('gets thing with given ID', async () => {
      const response = await getBggThing({ id: 6249 })
      expect(response.items.item.type).toEqual('boardgame')
    })

    it('gets thing with list of IDs', async () => {
      const response = await getBggThing({ id: [6249, 202976] })
      expect(response.items.item[0].type).toEqual('boardgame')
      expect(response.items.item[1].type).toEqual('boardgameexpansion')
    })

    it('gets thing with given ID and type', async () => {
      const response = await getBggThing({ id: 6249, type: 'boardgame' })
      expect(response.items.item.type).toEqual('boardgame')
    })

    it('gets thing with list of IDs and types', async () => {
      const response = await getBggThing({ id: [6249, 202976], type: ['boardgame', 'boardgameexpansion'] })
      expect(response.items.item[0].type).toEqual('boardgame')
      expect(response.items.item[1].type).toEqual('boardgameexpansion')
    })
  })

  describe('getBggThread', () => {
    it('gets thread with given ID', async () => {
      const response = await getBggThread({ id: 2427564 })
      expect(response.thread.subject).toEqual('where to buy?')
    })
  })

  describe('getBggUser', () => {
    it('gets user with given name', async () => {
      const response = await getBggUser({ name: 'Qrzy88' })
      expect(response.user.id).toEqual(1381959)
    })
  })
})
