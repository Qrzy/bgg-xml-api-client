import { describe, expect, it, vi } from 'vitest'
import { getBggCollection } from '../../../src/wrappers'
import { bggXmlApiClient } from '../../../src/client'

vi.mock('../../../src/client')

describe('getBggCollection', () => {
  it('passes given username', async () => {
    await getBggCollection({ username: 'user' }, { authorizationKey: 'test-key' })
    expect(bggXmlApiClient.get).toHaveBeenCalledWith('collection', { username: 'user' }, { authorizationKey: 'test-key' })
  })

  it('passes given ID', async () => {
    await getBggCollection({ username: 'user', id: 123 }, { authorizationKey: 'test-key' })
    expect(bggXmlApiClient.get).toHaveBeenCalledWith('collection', { username: 'user', id: 123 }, { authorizationKey: 'test-key' })
  })

  it('passes given array of IDs', async () => {
    await getBggCollection({ username: 'user', id: [123, 456, 789] }, { authorizationKey: 'test-key' })
    expect(bggXmlApiClient.get).toHaveBeenCalledWith('collection', { username: 'user', id: '123,456,789' }, { authorizationKey: 'test-key' })
  })
})
