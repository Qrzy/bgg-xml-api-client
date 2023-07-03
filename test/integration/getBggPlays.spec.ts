import { describe, expect, it } from 'vitest'
import { getBggPlays } from '../../src/wrappers'

describe('getBggPlays', () => {
  it('gets plays with given username', async () => {
    const response = await getBggPlays({ username: 'Qrzy88' })
    expect(response.plays).toHaveProperty('play')
    expect(response.plays.play).toBeInstanceOf(Array)
    expect(response.plays.username).toEqual('Qrzy88')
    expect(response.plays.userid).toEqual(1381959)
  })

  it('throws when necessary params are not given', async () => {
    expect(() => getBggPlays({})).toThrowError()
    expect(() => getBggPlays({ type: 'thing' })).toThrowError()
    expect(() => getBggPlays({ id: 1 })).toThrowError()
  })
})
