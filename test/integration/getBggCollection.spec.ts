import { describe, expect, it } from 'vitest'
import { getBggCollection } from '../../src/wrappers'

describe('getBggCollection', () => {
  it('gets collection with given username', async () => {
    const { items } = await getBggCollection({ username: 'Qrzy88' })
    expect(items).toHaveProperty('item')
    expect(items.item).toBeInstanceOf(Array)
  })

  it('gets collection with given ID', async () => {
    const { items } = await getBggCollection({ username: 'Qrzy88', id: 173346 })
    expect(items).toHaveProperty('item')
    expect(items.item).toBeInstanceOf(Object)
  })

  it('gets collection with list of IDs', async () => {
    const { items } = await getBggCollection({ username: 'Qrzy88', id: [173346, 202976] })
    expect(items).toHaveProperty('item')
    expect(items.item).toBeInstanceOf(Array)
    expect(items.item.length).toEqual(2)
  })
})
