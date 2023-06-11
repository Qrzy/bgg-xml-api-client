import { describe, expect, it } from 'vitest'
import { getBggFamily } from '../../src/wrappers'

describe('getBggFamily', () => {
  it('gets family with given ID', async () => {
    const { data } = await getBggFamily({ id: 12210 })
    expect(data).toHaveProperty('item')
    expect(data.item).toBeInstanceOf(Object)
  })

  it('gets family with list of IDs', async () => {
    const { data } = await getBggFamily({ id: [12210, 17552] })
    expect(data).toHaveProperty('item')
    expect(data.item).toBeInstanceOf(Array)
    expect(data.item.length).toEqual(2)
  })
})
