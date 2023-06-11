import { describe, expect, it } from 'vitest'
import { getBggCollection } from '../../src/wrappers'

describe('getBggCollection', () => {
  it('gets collection with given username', async () => {
    const { data } = await getBggCollection({ username: 'Qrzy88' })
    expect(data).toHaveProperty('item')
    expect(data.item).toBeInstanceOf(Array)
  })

  it('gets collection with given ID', async () => {
    const { data } = await getBggCollection({ username: 'Qrzy88', id: 173346 })
    expect(data).toHaveProperty('item')
    expect(data.item).toBeInstanceOf(Object)
  })

  it('gets collection with list of IDs', async () => {
    const { data } = await getBggCollection({ username: 'Qrzy88', id: [173346, 202976] })
    expect(data).toHaveProperty('item')
    expect(data.item).toBeInstanceOf(Array)
    expect(data.item.length).toEqual(2)
  })
})
