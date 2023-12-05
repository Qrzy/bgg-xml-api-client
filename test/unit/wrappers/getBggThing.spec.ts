import { describe, expect, it, vi } from 'vitest'
import { getBggThing } from '../../../src/wrappers'
import bggXmlApiClient from '../../../src/client'

vi.mock('../../../src/client')

describe('getBggThing', () => {
  it('gets thing with given ID', async () => {
    await getBggThing({ id: 6249 })
    expect(bggXmlApiClient.get).toHaveBeenCalledWith('thing', { id: 6249 }, {})
  })

  it('gets thing with list of IDs', async () => {
    await getBggThing({ id: [6249, 202976] })
    expect(bggXmlApiClient.get).toHaveBeenCalledWith('thing', { id: '6249,202976' }, {})
  })

  it('gets thing with given ID and type', async () => {
    await getBggThing({ id: 6249, type: 'boardgame' })
    expect(bggXmlApiClient.get).toHaveBeenCalledWith('thing', { id: 6249, type: 'boardgame' }, {})
  })

  it('gets thing with list of IDs and types', async () => {
    await getBggThing({ id: [6249, 202976], type: ['boardgame', 'boardgameexpansion'] })
    expect(bggXmlApiClient.get).toHaveBeenCalledWith('thing', {
      id: '6249,202976',
      type: 'boardgame,boardgameexpansion',
    }, {})
  })
})
