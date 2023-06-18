import { describe, expect, it } from 'vitest'
import { getBggFamily } from '../../src/wrappers'

describe('getBggFamily', () => {
  it('gets family with given ID', async () => {
    const response = await getBggFamily({ id: 12210 })
    expect(response.items).toHaveProperty('item')
    expect(response.items.item).toBeInstanceOf(Object)
  })

  it('gets family with list of IDs', async () => {
    const response = await getBggFamily({ id: [12210, 17552] })
    expect(response.items).toHaveProperty('item')
    expect(response.items.item).toBeInstanceOf(Array)
    expect(response.items.item.length).toEqual(2)
  })
})
