import { describe, expect, it } from 'vitest'
import { getBggUser } from '../../src/wrappers'

describe('getBggUser', () => {
  it('gets user with given name', async () => {
    const response = await getBggUser({ name: 'Qrzy88' })
    expect(response).toHaveProperty('id')
    expect(response.id).toEqual(1381959)
    expect(response).toHaveProperty('name')
    expect(response.name).toEqual('Qrzy88')
  })
})
