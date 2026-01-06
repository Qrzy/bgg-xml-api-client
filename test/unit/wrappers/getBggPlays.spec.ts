import { describe, expect, it, vi } from 'vitest'
import { getBggPlays } from '../../../src/wrappers'
import bggXmlApiClient from '../../../src/client'

vi.mock('../../../src/client')

describe('getBggPlays', () => {
  it('gets plays with given username', async () => {
    await getBggPlays({ username: 'Qrzy88' }, { authorizationKey: 'test-key' })
    expect(bggXmlApiClient.get).toHaveBeenCalledWith('plays', { username: 'Qrzy88' }, { authorizationKey: 'test-key' })
  })

  it('throws when necessary params are not given', async () => {
    expect(() => getBggPlays({}, { authorizationKey: 'test-key' })).toThrowError()
    expect(() => getBggPlays({ type: 'thing' }, { authorizationKey: 'test-key' })).toThrowError()
    expect(() => getBggPlays({ id: 1 }, { authorizationKey: 'test-key' })).toThrowError()
  })
})
