import { describe, expect, it } from 'vitest'
import { getBggUser } from '../../src/wrappers'

describe('getBggUser', () => {
  it('gets user with given name', async () => {
    const { data } = await getBggUser({ name: 'Qrzy88' })
    expect(data).toHaveProperty('id')
    expect(data.id).toEqual('1381959')
    expect(data).toHaveProperty('name')
    expect(data.name).toEqual('Qrzy88')
  })
})
