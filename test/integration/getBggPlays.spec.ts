import { describe, expect, it } from 'vitest'
import { getBggPlays } from '../../src/wrappers'

describe('getBggPlays', () => {
  it('gets plays with given username', async () => {
    const response = await getBggPlays({ username: 'Qrzy88' }, { authorizationKey: import.meta.env.VITE_BGG_API_KEY || '' })
    expect(response).toHaveProperty('play')
    expect(response.play).toBeInstanceOf(Array)
    expect(response.username).toEqual('Qrzy88')
    expect(response.userid).toEqual(1381959)
  })

  it('throws when necessary params are not given', async () => {
    expect(() => getBggPlays({}, { authorizationKey: import.meta.env.VITE_BGG_API_KEY || '' })).toThrowError()
    expect(() => getBggPlays({ type: 'thing' }, { authorizationKey: import.meta.env.VITE_BGG_API_KEY || '' })).toThrowError()
    expect(() => getBggPlays({ id: 1 }, { authorizationKey: import.meta.env.VITE_BGG_API_KEY || '' })).toThrowError()
  })
})
