import { describe, expect, it, vi } from 'vitest'
import { getBggUser } from '../../../src/wrappers'
import bggXmlApiClient from '../../../src/client'

vi.mock('../../../src/client')

describe('getBggUser', () => {
  it('gets user with given name', async () => {
    await getBggUser({ name: 'Qrzy88' })
    expect(bggXmlApiClient.get).toHaveBeenCalledWith('user', { name: 'Qrzy88' }, {})
  })
})
