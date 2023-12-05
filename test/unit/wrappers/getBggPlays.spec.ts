import { describe, expect, it, vi } from 'vitest'
import { getBggPlays } from '../../../src/wrappers'
import bggXmlApiClient from '../../../src/client'

vi.mock('../../../src/client')

describe('getBggPlays', () => {
  it('gets plays with given username', async () => {
    await getBggPlays({ username: 'Qrzy88' })
    expect(bggXmlApiClient.get).toHaveBeenCalledWith('plays', { username: 'Qrzy88' }, {})
  })

  it('throws when necessary params are not given', async () => {
    expect(() => getBggPlays({})).toThrowError()
    expect(() => getBggPlays({ type: 'thing' })).toThrowError()
    expect(() => getBggPlays({ id: 1 })).toThrowError()
  })
})
