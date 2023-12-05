import { describe, expect, it, vi } from 'vitest'
import { getBggFamily } from '../../../src/wrappers'
import bggXmlApiClient from '../../../src/client'

vi.mock('../../../src/client')

describe('getBggFamily', () => {
  it('gets family with given ID', async () => {
    await getBggFamily({ id: 12210 })
    expect(bggXmlApiClient.get).toHaveBeenCalledWith('family', { id: 12210 }, {})
  })

  it('gets family with list of IDs', async () => {
    await getBggFamily({ id: [12210, 17552] })
    expect(bggXmlApiClient.get).toHaveBeenCalledWith('family', { id: '12210,17552' }, {})
  })
})
