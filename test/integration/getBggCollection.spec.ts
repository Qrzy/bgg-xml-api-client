import { beforeEach, describe, expect, it } from 'vitest'
import { getBggCollection } from '../../src/wrappers'

describe('getBggCollection', () => {
  beforeEach(async () => await new Promise((resolve) => setTimeout(resolve, 1000)))

  it('gets collection with given username', async () => {
    const response = await getBggCollection({ username: 'Qrzy88' }, { authorizationKey: import.meta.env.VITE_BGG_API_KEY || '' })
    expect(response).toHaveProperty('item')
    expect(response.item).toBeInstanceOf(Array)
  })

  it('gets collection with given ID', async () => {
    const response = await getBggCollection({ username: 'Qrzy88', id: 173346 }, { authorizationKey: import.meta.env.VITE_BGG_API_KEY || '' })
    expect(response).toHaveProperty('item')
    expect(response.item).toBeInstanceOf(Object)
  })

  it('gets collection with list of IDs', async () => {
    const response = await getBggCollection({ username: 'Qrzy88', id: [173346, 202976] }, { authorizationKey: import.meta.env.VITE_BGG_API_KEY || '' })
    expect(response).toHaveProperty('item')
    expect(response.item).toBeInstanceOf(Array)
    expect((response.item as Array<unknown>).length).toEqual(2)
  })
})
