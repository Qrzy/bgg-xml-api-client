import { describe, expect, it } from 'vitest'
import { getBggUser } from '../../src/wrappers'

describe('getBggUser', () => {
  it('gets user with given name', async () => {
    const response = await getBggUser({ name: 'Qrzy88' })
    expect(response.user).toHaveProperty('id')
    expect(response.user.id).toEqual(1381959)
    expect(response.user).toHaveProperty('name')
    expect(response.user.name).toEqual('Qrzy88')
  })
})
