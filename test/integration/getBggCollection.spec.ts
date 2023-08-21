import { describe, expect, it } from 'vitest'
import { getBggCollection } from '../../src/wrappers'

describe('getBggCollection', () => {
  it('gets collection with given username', async () => {
    const response = await getBggCollection({ username: 'Qrzy88' })
    expect(response).toHaveProperty('item')
    expect(response.item).toBeInstanceOf(Array)
  })

  it('gets collection with given ID', async () => {
    const response = await getBggCollection({ username: 'Qrzy88', id: 173346 })
    expect(response).toHaveProperty('item')
    expect(response.item).toBeInstanceOf(Object)
  })

  it('gets collection with list of IDs', async () => {
    const response = await getBggCollection({ username: 'Qrzy88', id: [173346, 202976] })
    expect(response).toHaveProperty('item')
    expect(response.item).toBeInstanceOf(Array)
    expect(response.item.length).toEqual(2)
  })
})
