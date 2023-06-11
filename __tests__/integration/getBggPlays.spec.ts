import { describe, expect, it } from 'vitest'
import { getBggPlays } from '../../src/wrappers'

describe('getBggPlays', () => {
  it('gets plays with given username', async () => {
    const { data } = await getBggPlays({ username: 'Qrzy88' })
    expect(data).toHaveProperty('play')
    expect(data.play).toBeInstanceOf(Array)
    expect(data.username).toEqual('Qrzy88')
    expect(data.userid).toEqual('1381959')
  })

  it('throws when necessary params are not given', async () => {
    expect(() => getBggPlays({})).toThrowError()
    expect(() => getBggPlays({ type: 'thing' })).toThrowError()
    expect(() => getBggPlays({ id: 1 })).toThrowError()
  })
})
