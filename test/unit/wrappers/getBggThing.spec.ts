import { describe, expect, it, vi } from 'vitest'
import { getBggThing } from '../../../src/wrappers'
import bggXmlApiClient from '../../../src/client'

vi.mock('../../../src/client')

describe('getBggThing', () => {
  it('gets thing with given ID', async () => {
    await getBggThing({ id: 6249 }, { authorizationKey: 'test-key' })
    expect(bggXmlApiClient.get).toHaveBeenCalledWith('thing', { id: 6249 }, { authorizationKey: 'test-key' })
  })

  it('gets thing with list of IDs', async () => {
    await getBggThing({ id: [6249, 202976] }, { authorizationKey: 'test-key' })
    expect(bggXmlApiClient.get).toHaveBeenCalledWith('thing', { id: '6249,202976' }, { authorizationKey: 'test-key' })
  })

  it('gets thing with given ID and type', async () => {
    await getBggThing({ id: 6249, type: 'boardgame' }, { authorizationKey: 'test-key' })
    expect(bggXmlApiClient.get).toHaveBeenCalledWith('thing', { id: 6249, type: 'boardgame' }, { authorizationKey: 'test-key' })
  })

  it('gets thing with list of IDs and types', async () => {
    await getBggThing({ id: [6249, 202976], type: ['boardgame', 'boardgameexpansion'] }, { authorizationKey: 'test-key' })
    expect(bggXmlApiClient.get).toHaveBeenCalledWith('thing', {
      id: '6249,202976',
      type: 'boardgame,boardgameexpansion',
    }, { authorizationKey: 'test-key' })
  })
})
